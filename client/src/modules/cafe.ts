import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { string } from 'yargs';
import { userState } from './user';

export interface cafeState {
  _id: string;
  name: string;
  route: string;
  manager: userState;
  members: userState[];
}

const initialState: cafeState = {
  _id: '',
  name: '',
  route: '',
  manager: {
    _id: '',
    name: '',
    email: '',
  },
  members: [],
};

const cafe = createSlice({
  name: 'cafeReducer',
  initialState,
  reducers: {
    SetCafe: (state: cafeState, action: PayloadAction<cafeState>) =>
      action.payload,
  }, // action.payload에서 받아온걸 바로 저장
});

export const { SetCafe } = cafe.actions;

export default cafe;
