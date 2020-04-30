import * as actions from './../../actions';

describe('hangman actions', () => {
  it('setAnswer should create SET_ANSWER action', () => {
    expect(actions.setAnswer()).toEqual({
      type: 'SET_ANSWER'
    });
  });
  it('addMistake should create ADD_MISTAKE action', () => {
    expect(actions.addMistake()).toEqual({
      type: 'ADD_MISTAKE'
    });
  });
  it('addGuess should create ADD_guess action', () => {
    expect(actions.addGuess('e')).toEqual({
      type: 'ADD_GUESS',
      value: 'e'
    });
  });
  it('resetGuesses should create RESET_GUESSES action', () => {
    expect(actions.resetGuesses()).toEqual({
      type: 'RESET_GUESSES'
    });
  });
  it('resetMistakes should create RESET_MISTAKES action', () => {
    expect(actions.resetMistakes()).toEqual({
      type: 'RESET_MISTAKES'
    });
  });
});