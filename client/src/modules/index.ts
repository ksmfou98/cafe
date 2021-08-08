import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import board, { boardState } from './board';
import cafe, { cafeState } from './cafe';
import post, { postState } from './post';
import user, { userState } from './user';

export interface reduxStateStore {
  user: userState;
  cafe: cafeState;
  board: boardState;
  post: postState;
}

const rootReducer = combineReducers({
  user: user.reducer,
  cafe: cafe.reducer,
  board: board.reducer,
  post: post.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
