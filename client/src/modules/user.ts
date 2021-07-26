import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface userState {
  _id: string;
  name: string;
  email: string;
}

const initialState: userState = {
  _id: '',
  name: '',
  email: '',
};

const user = createSlice({
  //  createSlice는 액션 생성함수, 리듀서를 둘다 만들어줌
  name: 'userReducer',
  initialState,
  reducers: {
    SetUser: (state: userState, action: PayloadAction<userState>) => {
      const { _id, name, email } = action.payload;
      state._id = _id;
      state.name = name;
      state.email = email;
    },
    UserStateEmpty: () => initialState,
  },
});

export const { SetUser, UserStateEmpty } = user.actions;

export default user;
