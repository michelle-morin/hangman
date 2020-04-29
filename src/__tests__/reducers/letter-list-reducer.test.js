import letterListReducer from '../../reducers/letter-list-reducer';

describe('letterListReducer', ()=> {

  test('should return default state if there is no action type passed to the reducer', ()=> {
    expect(letterListReducer(new Set([]), {type: null})).toEqual(new Set([]));
  });

  test('should add a letter to guessed letters set data object', ()=> {
    const value = 'e';
    const action = {
      type: 'ADD_GUESS',
      value: value
    };
    expect(letterListReducer(new Set([]), action)).toContain('e');
  });

});
