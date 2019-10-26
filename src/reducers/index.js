import {combineReducers} from 'redux';
import ratingFilterReducer from './RatingFilter';
import titlleFilterReducer from './titlleFilter';
import booksListReducer from './BooksList';

export default combineReducers({ratingFilterReducer,
  titlleFilterReducer,booksListReducer})
