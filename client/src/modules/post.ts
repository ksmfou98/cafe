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

    PostStateEmpty: () => initialState,
  },
});

export const { SetPost, PostStateEmpty } = post.actions;

export default post;
