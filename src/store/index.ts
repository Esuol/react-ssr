import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as homeReducer } from '../containers/home/store';
import { reducer as translationReducer } from '../containers/songs/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';
