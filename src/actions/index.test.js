import * as actions from './index';
import { ActionTypes } from '../constants';

describe('start timer actions', () => {
  it('startTimer should create START_TIMER action', () => {
    expect(actions.startTimer('Use Redux')).toEqual({
      type: ActionTypes.START_TIMER,
    });
  });
});
