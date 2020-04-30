export default (state = new Set([]), action) => {
  switch(action.type) {
    case 'ADD_GUESS':
      const newGuessSet = state.add(action.value);
      return newGuessSet;
    case 'RESET_GUESSES':
      const resetSet = new Set([]);
      return resetSet;
    default:
      return state;
  }
};