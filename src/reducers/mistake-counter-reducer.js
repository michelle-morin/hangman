export default (state = 0, action) => {
  switch(action.type) { 
    case 'ADD_MISTAKE':
      const updateMistakeCount = state + 1;
      return updateMistakeCount;
    case 'RESET_MISTAKES':
      return 0;
  }
    return state;
};