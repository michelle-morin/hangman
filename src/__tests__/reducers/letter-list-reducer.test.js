import letterListReducer from '../../reducers/letter-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('letterListReducer', ()=> {

  test('should return default state if there is no action type passed to the reducer', ()=> {
    expect(letterListReducer(new Set(), {type: null})).toEqual(new Set());
  });

  test('should add a letter to guessed letters set data object', ()=> {
    const value = 'e';
    const action = {
      type: c.ADD_GUESS,
      value: value
    };
    expect(letterListReducer(new Set(), action)).toContain('e');
  });

  test('should reset guessed list to a new Set data object', () => {
    const action = {
      type: c.RESET_GUESSES
    };
    expect(letterListReducer(new Set(), action)).toEqual(new Set ());
  });
});
