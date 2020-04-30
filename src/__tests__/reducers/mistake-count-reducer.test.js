import mistakeCountReducer from '../../reducers/mistake-counter-reducer';
import * as c from '../../actions/ActionTypes';

describe('mistakeCountReducer', ()=> {

  test('should return default state if no action type is specified', () => {
    expect(mistakeCountReducer(0, { type: null })).toEqual(0);
  });

  test('should add 1 to mistake counter', () => {
    const action = {
      type: c.ADD_MISTAKE,
      value: 1
    };
    expect(mistakeCountReducer(0, action)).toEqual(1);
  });

  test('should reset mistake count to 0', () => {
    const action = {
      type: c.RESET_MISTAKES
    };
    expect(mistakeCountReducer(4, action)).toEqual(0);
  });
});