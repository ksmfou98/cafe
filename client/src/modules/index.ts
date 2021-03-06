import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import board, { boardState } from './board';
import cafe, { cafeState } from './cafe';
import comment, { commentState } from './comment';
import post, { postState } from './post';
import user, { userState } from './user';
import write, { writeState } from './write';

export interface reduxStateStore {
  user: userState;
  cafe: cafeState;
  board: boardState;
  post: postState;
  comment: commentState[];
  write: writeState;
}

const rootReducer = combineReducers({
  user: user.reducer,
  cafe: cafe.reducer,
  board: board.reducer,
  post: post.reducer,
  comment: comment.reducer,
  write: write.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
