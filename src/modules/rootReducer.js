//루트 리듀서 만들기
import { combineReducers } from '@reduxjs/toolkit';
import musicController from './musicController';
import playlistsSlice from './playlistsSlice';

const rootReducer = combineReducers({
  playlists: playlistsSlice.reducer,
  musicController,
});

export default rootReducer;
export const {createPlaylist} = playlistsSlice.actions
export const {deletePlaylist} = playlistsSlice.actions