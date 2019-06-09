import {combineReducers} from 'redux';
import words from './word-reducer';
import scores from './scores-reducer';

export default combineReducers({
  words, scores
});