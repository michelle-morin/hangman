import letterListReducer from './letter-list-reducer';
import mistakeCountReducer from './mistake-counter-reducer';
import answerReducer from './answer-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  guessed: letterListReducer,
  mistake: mistakeCountReducer,
  answer: answerReducer
});

export default rootReducer;