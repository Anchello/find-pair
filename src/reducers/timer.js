import { InitialState, ActionTypes } from '../constants';

const timer = (state = InitialState.timer, action) => {
  switch (action.type) {
    case ActionTypes.START_TIMER:
      return state - 1;
    default:
      return state;
  }
};

export default timer;
