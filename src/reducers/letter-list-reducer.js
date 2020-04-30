import * as c from './../actions/ActionTypes';

export default (state = new Set(), action) => {
  const { value } = action;
  switch(action.type) {
    case c.ADD_GUESS:
      state.add(value);
      return state;
    case c.RESET_GUESSES:
      const resetSet = new Set();
      return resetSet;
    default:
      return state;
  }
};