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
        }
      }
    },
  },
});

export const { SetComments, SaveComment, SaveReplyComment } = comment.actions;

export default comment;
