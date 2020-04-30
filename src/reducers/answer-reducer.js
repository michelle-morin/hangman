import { randomWord } from '../components/WordList';
import * as c from './../actions/ActionTypes';

export default (state = "haru", action) => {
  switch (action.type) {
    case c.SET_ANSWER:
      const currentAnswer = randomWord();
      return currentAnswer;
    default:
      return state;
  }
};