import { randomWord } from '../components/WordList';

export default (state = null, action) => {
  switch (action.type) {
    case 'SET_ANSWER':
      const currentAnswer = randomWord();
      return currentAnswer;
  }
  return state;
};