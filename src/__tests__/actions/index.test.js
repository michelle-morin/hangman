import * as actions from './../../actions';

describe('hangman actions', () => {
  it('setAnswer should create SET_ANSWER action', () => {
    expect(actions.setAnswer()).toEqual({
      type: 'SET_ANSWER'
    });
  });
});