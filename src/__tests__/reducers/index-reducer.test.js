import letterListReducer from '../../reducers/letter-list-reducer';
import mistakeCountReducer from '../../reducers/mistake-counter-reducer';
import { masterWordList } from '../../components/WordList';
import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', ()=> {
  let action;

  test('should return default state if no type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      guessed: new Set([]),
      mistake: 0,
      answer: "haru"
    });
  });

  test('check that modified state of mistakeCountReducer matches rootReducer', ()=> {
    action = {
      type: c.ADD_MISTAKE,
      value: 1
    };
    store.dispatch(action);
    expect(store.getState().mistake).toEqual(mistakeCountReducer(undefined, action));
  });

  test('check that modified state of letterListReducer matches rootReducer', ()=> {
    action = {
      type: c.ADD_GUESS,
      value: 'e'
    };
    store.dispatch(action);
    expect(store.getState().guessed).toEqual(letterListReducer(undefined, action));
  });

  test('check that modified state of answerReducer matches rootReducer', ()=> {
    action = {
      type: c.SET_ANSWER
    };
    store.dispatch(action);
    expect(masterWordList.includes(store.getState().answer)).toBe(true);
  });
});