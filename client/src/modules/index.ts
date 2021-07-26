import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user, { userState } from './user';

export interface reduxStateStore {
  user: userState;
}

const rootReducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
