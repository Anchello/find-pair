import { combineReducers } from 'redux';
import timer from './timer';
import cards from './cards';

export default combineReducers({
  timer,
  cards,
});
