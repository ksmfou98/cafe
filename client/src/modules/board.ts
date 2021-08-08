import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface boardState {
  _id: string;
  name: string;
}

const initialState: boardState = {
  _id: 'all',
  name: '전체 글보기',
};

const board = createSlice({
  name: 'boardReducer',
  initialState,
  reducers: {
    SetBoard: (state: boardState, action: PayloadAction<boardState>) => {
      const { name, _id } = action.payload;
      state.name = name;
      state._id = _id;
    },
  },
});

export const { SetBoard } = board.actions;

export default board;
