import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
