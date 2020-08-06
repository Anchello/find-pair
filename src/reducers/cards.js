import {
  getNewOpenedCards, getReceivedTotalCards, setOpenedCards, setClosedCards,
  setHiddenCards,
} from './helpers';
import { InitialState, ActionTypes, COUNT_CARDS_IN_PAIR } from '../constants';

const cards = (state = InitialState.cards, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_CARD:
      return {
        ...state,
        isOpened: [...state.isOpened, ...getNewOpenedCards(state.total, action.id)],
        total: setOpenedCards(state.total, action.id),
      };
    case ActionTypes.CLOSE_CARD:
      return {
        ...state,
        isOpened: [],
        total: setClosedCards(state.total),
      };
    case ActionTypes.HIDE_CARD:
      return {
        ...state,
        isOpened: [],
        visibleCounts: state.visibleCounts - COUNT_CARDS_IN_PAIR,
        total: setHiddenCards(state.total),
      };
    case ActionTypes.RECEIVE_CARDS:
      return {
        ...state,
        total: getReceivedTotalCards(action.cards),
      };
    case ActionTypes.RESET:
      return {
        ...InitialState.cards,
        total: getReceivedTotalCards(action.cards),
      };
    default:
      return state;
  }
};

export default cards;
