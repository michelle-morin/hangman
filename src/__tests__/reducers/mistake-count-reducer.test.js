import mistakeCountReducer from '../../reducers/mistake-counter-reducer';

describe('mistakeCountReducer', ()=> {

  test('should return default state if no action type is specified', () => {
    expect(mistakeCountReducer(0, { type: null })).toEqual(0);
  });

  test('should add 1 to mistake counter', () => {
    const action = {
      type: 'ADD_MISTAKE'
    };
    expect(mistakeCountReducer(0, action)).toEqual(1);
  });

});