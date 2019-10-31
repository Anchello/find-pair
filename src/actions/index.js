import { ActionTypes } from '../constants';

export const startTimer = () => ({
  type: ActionTypes.START_TIMER,
});

export const stopTimer = () => ({
  type: ActionTypes.STOP_TIMER,
});

export const openCard = (id, name) => ({
  type: ActionTypes.OPEN_CARD,
  id,
  name,
});

export const closeCard = () => ({
  type: ActionTypes.CLOSE_CARD,
});

export const hideCard = () => ({
  type: ActionTypes.HIDE_CARD,
});

export const receiveCards = (cards) => ({
  type: ActionTypes.RECEIVE_CARDS,
  cards,
});
