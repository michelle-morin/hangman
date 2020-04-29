export default (state = new Set([]), action) => {
  switch(action.type) {
    case 'ADD_GUESS':
      const newGuessSet = state.add(action.value);
      return newGuessSet;
    default:
      return state;
  }
};