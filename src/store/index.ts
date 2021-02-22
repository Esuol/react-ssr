import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as homeReducer } from '../containers/home/store';
import { reducer as songsReducer } from '../containers/songs/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  songs: songsReducer
})
// 改变服务器端store的内容，那么就一定要使用serverAxios
export const getServerStore = req => createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));

export const getclientStore = () => {
  const defaultState = window.context.state;
  // 改变客户端store的内容，一定要使用clientAxios
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}

