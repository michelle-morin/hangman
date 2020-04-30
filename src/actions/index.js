import * as c from './ActionTypes';

export const setAnswer = () => ({
  type: c.SET_ANSWER
});
export const addMistake = (value) => ({
  type: c.ADD_MISTAKE,
  value: value
});
export const addGuess = (letter) => ({
  type: c.ADD_GUESS,
  value: letter
});
export const resetGuesses = () => ({
  type: c.RESET_GUESSES
});
export const resetMistakes = () => ({
  type: c.RESET_MISTAKES
});