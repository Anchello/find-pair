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

export const closeCard = (id, name) => ({
  type: ActionTypes.CLOSE_CARD,
  id,
  name,
});

export const receiveCards = (cards) => ({
  type: ActionTypes.RECEIVE_CARDS,
  cards,
});

// export const getAllCards = () => (dispatch) => {
//   const cards = getRandomCards();
//   shop.getProducts(cards => {
//     dispatch(receiveCards(cards))
//   });
// }
