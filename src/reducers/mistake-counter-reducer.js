import * as c from './../actions/ActionTypes';

export default (state = 0, action) => {
  const { value } = action;
  switch(action.type) { 
    case c.ADD_MISTAKE:
      const updateMistakeCount = state + value;
      return updateMistakeCount;
    case c.RESET_MISTAKES:
      return 0;
    default:
      return state;
  }
};