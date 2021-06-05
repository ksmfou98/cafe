import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const auth = createSlice({
  // createSlice는 액션 생성함수, 리듀서를 둘다 만들어줌
  name: 'authReducer',
  initialState,
  reducers: {
    SampleAction: (state, action) => state,
  },
});

export const { SampleAction } = auth.actions;

export default auth;
