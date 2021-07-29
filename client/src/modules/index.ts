import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cafe, { cafeState } from './cafe';
import user, { userState } from './user';

export interface reduxStateStore {
  user: userState;
  cafe: cafeState;
}

const rootReducer = combineReducers({
  user: user.reducer,
  cafe: cafe.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
