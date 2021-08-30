import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userState } from './user';

export interface replyState {
  writer: userState;
  content: string;
  responseTo: userState;
  _id: string;
  createdAt: string;
}

export interface commentState {
  _id: string;
  deleted: boolean;
  postId: string;
  content: string;
  writer: userState;
  reply: replyState[];
  createdAt: string;
}

const userInitialState: userState = {
  _id: '',
  email: '',
  name: '',
  nickname: '',
};

const initialState: commentState[] = [
  {
    _id: '',
    deleted: false,
    postId: '',
    content: '',
    writer: userInitialState,
    createdAt: '',
    reply: [
      {
        _id: '',
        content: '',
        responseTo: userInitialState,
        writer: userInitialState,
        createdAt: '',
      },
    ],
  },
];

const comment = createSlice({
  name: 'commentReducer',
  initialState,
  reducers: {
    SetComments: (
      state: commentState[],
      action: PayloadAction<commentState[]>,
    ) => action.payload,

    SaveComment: (
      state: commentState[],
      action: PayloadAction<commentState>,
    ) => {
      state.push(action.payload);
    },
    SaveReplyComment: (state: commentState[], action: PayloadAction<any>) => {
      const { commentId, comment } = action.payload;
      for (let s of state) {
        if (s._id.toString() === commentId) {
          s.reply.push(comment);
          break;
        }
      }
    },

    UpdateComment: (state: commentState[], action: PayloadAction<any>) => {
      const { commentId, content } = action.payload;
      for (let s of state) {
        if (s._id.toString() === commentId) {
          s.content = content;
          break;
        }
      }
    },

    UpdateReplyComment: (state: commentState[], action: PayloadAction<any>) => {
      const { commentId, replyCommentId, content } = action.payload;
      for (let s of state) {
        if (s._id.toString() === commentId) {
          for (let replyComment of s.reply) {
            if (replyComment._id === replyCommentId) {
              replyComment.content = content;
              break;
            }
          }
        }
      }
    },
  },
});

export const {
  SetComments,
  SaveComment,
  SaveReplyComment,
  UpdateComment,
  UpdateReplyComment,
} = comment.actions;

export default comment;
