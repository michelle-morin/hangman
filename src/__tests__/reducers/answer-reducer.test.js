import answerReducer from '../../reducers/answer-reducer';
import { masterWordList } from '../../components/WordList';
import * as c from '../../actions/ActionTypes';

describe('answerReducer', ()=> {
  test('should set answer to random word from word list', () => {
    const action = {
      type: c.SET_ANSWER
    };
    expect(masterWordList.includes(answerReducer(null, action))).toBe(true);
  });
})