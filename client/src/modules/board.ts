import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface boardState {
  _id: string;
  name: string;
}

const initialState: boardState = {
  _id: '',
  name: '',
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
