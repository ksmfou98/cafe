import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface writeState {
  commentContent: string;
}

const initialState: writeState = {
  commentContent: '',
};

const write = createSlice({
  name: 'writeReducer',
  initialState,
  reducers: {
    SetWrite: (state: any, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { SetWrite } = write.actions;

export default write;
