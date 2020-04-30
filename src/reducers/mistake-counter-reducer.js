import * as c from './../actions/ActionTypes';

export default (state = 0, action) => {
  switch(action.type) { 
    case c.ADD_MISTAKE:
      const updateMistakeCount = state + 1;
      return updateMistakeCount;
    case c.RESET_MISTAKES:
      return 0;
    default:
      return state;
  }
};