import { InitialState, ActionTypes } from '../constants';

const timer = (state = InitialState.timer, action) => {
  if (action.type === ActionTypes.START_TIMER) {
    return state - 1;
  }
  return state;
};

export default timer;
