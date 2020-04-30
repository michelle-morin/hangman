import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('hangman actions', () => {
  it('setAnswer should create SET_ANSWER action', () => {
    expect(actions.setAnswer()).toEqual({
      type: c.SET_ANSWER
    });
  });
  it('addMistake should create ADD_MISTAKE action', () => {
    expect(actions.addMistake()).toEqual({
      type: c.ADD_MISTAKE
    });
  });
  it('addGuess should create ADD_guess action', () => {
    expect(actions.addGuess('e')).toEqual({
      type: c.ADD_GUESS,
      value: 'e'
    });
  });
  it('resetGuesses should create RESET_GUESSES action', () => {
    expect(actions.resetGuesses()).toEqual({
      type: c.RESET_GUESSES
    });
  });
  it('resetMistakes should create RESET_MISTAKES action', () => {
    expect(actions.resetMistakes()).toEqual({
      type: c.RESET_MISTAKES
    });
  });
});