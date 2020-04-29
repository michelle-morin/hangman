import letterListReducer from '../../reducers/letter-list-reducer';
import mistakeCountReducer from '../../reducers/mistake-counter-reducer';
import answerReducer from '../../reducers/answer-reducer';
import rootReducer from '../../reducers/index';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', ()=> {
  let action;

  test('should return default state if no type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      guessed: new Set([]),
      mistake: 0,
      answer: null
    });
  });

});