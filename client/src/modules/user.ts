import { createSlice } from '@reduxjs/toolkit';

export interface UserStateTypes {
  _id: string;
  username: string;
}

interface ActionTypes {
  payload: UserStateTypes;
}

const initialState: UserStateTypes = {
  _id: '',
  username: '',
};

const user = createSlice({
  //  createSlice는 액션 생성함수, 리듀서를 둘다 만들어줌
  name: 'userReducer',
  initialState,
  reducers: {
    SetUser: (state: UserStateTypes, action: ActionTypes) => {
      state._id = action.payload._id;
      state.username = action.payload.username;
    },
  },
});

export const { SetUser } = user.actions;

export default user;
