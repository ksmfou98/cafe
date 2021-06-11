import { createSlice } from '@reduxjs/toolkit';

interface StateTypes {
  [index: string]: string | undefined;
  username: string;
  password: string;
  passwordConfirm?: string;
}

interface ChangeFieldTypes {
  [index: string]: StateTypes;
  register: StateTypes;
  login: StateTypes;
}

interface ActionTypes {
  payload: {
    form: string;
    key: string;
    value: string;
  };
}

const initialState: ChangeFieldTypes = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = createSlice({
  // createSlice는 액션 생성함수, 리듀서를 둘다 만들어줌
  name: 'authReducer',
  initialState,
  reducers: {
    ChangeField: (state: ChangeFieldTypes, action: ActionTypes) => {
      const { form, key, value } = action.payload;
      console.log(action.payload);
      state[form][key] = value;
    },
  },
});

export const { ChangeField } = auth.actions;

export default auth;
