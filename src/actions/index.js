import * as c from './ActionTypes';

export const setAnswer = () => ({
  type: c.SET_ANSWER
});
export const addMistake = () => ({
  type: c.ADD_MISTAKE
});
export const addGuess = (value) => ({
  type: c.ADD_GUESS,
  value: value
});
export const resetGuesses = () => ({
  type: c.RESET_GUESSES
});
export const resetMistakes = () => ({
  type: c.RESET_MISTAKES
});