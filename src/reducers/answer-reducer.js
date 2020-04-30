import { randomWord } from '../components/WordList';

export default (state = "haru", action) => {
  switch (action.type) {
    case 'SET_ANSWER':
      const currentAnswer = randomWord();
      return currentAnswer;
    default:
      return state;
  }
};