import * as c from './../actions/ActionTypes';

export default (state = new Set([]), action) => {
  switch(action.type) {
    case c.ADD_GUESS:
      const newGuessSet = state.add(action.value);
      return newGuessSet;
    case c.RESET_GUESSES:
      const resetSet = new Set([]);
      return resetSet;
    default:
      return state;
  }
};