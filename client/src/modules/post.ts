import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface postState {
  _id: string;
  title: string;
  content: string;
  boardId: string;
}

const initialState: postState = {
  _id: '',
  title: '',
  content: '',
  boardId: '',
};

const post = createSlice({
  name: 'postReducer',
  initialState,
  reducers: {
    SetPost: (state: any, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    EditPost: (state: postState, action: PayloadAction<postState>) =>
      action.payload,

    PostStateEmpty: () => initialState,
  },
});

export const { SetPost, EditPost, PostStateEmpty } = post.actions;

export default post;
