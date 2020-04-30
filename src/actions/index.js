export const setAnswer = () => ({
  type: 'SET_ANSWER'
});
export const addMistake = () => ({
  type: 'ADD_MISTAKE'
});
export const addGuess = (value) => ({
  type: 'ADD_GUESS',
  value: value
});
export const resetGuesses = () => ({
  type: 'RESET_GUESSES'
});
export const resetMistakes = () => ({
  type: 'RESET_MISTAKES'
});