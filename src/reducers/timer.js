import { InitialState, ActionTypes } from '../constants';

const timer = (state = InitialState.timer, action) => {
  switch (action.type) {
    case ActionTypes.START_TIMER:
      return state - 1;
    case ActionTypes.RESET:
      return InitialState.timer;
    default:
      return state;
  }
};

export default timer;
