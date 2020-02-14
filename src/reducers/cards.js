import { InitialState, ActionTypes, COUNT_CARDS_IN_PAIR } from '../constants';

const cards = (state = InitialState.cards, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_CARD:
      return {
        ...state,
        isOpened: [...state.isOpened, ...state.total
          .filter((card) => (card.id === action.id))
          .map((card) => ({ id: card.id, name: card.name }))],
        total: state.total.map((card) => ((card.id === action.id)
          ? { ...card, isClosed: false } : card)),
      };
    case ActionTypes.CLOSE_CARD:
      return {
        ...state,
        isOpened: [],
        total: state.total.map((card) => ((!card.isClosed)
          ? { ...card, isClosed: true } : card)),
      };
    case ActionTypes.HIDE_CARD:
      return {
        ...state,
        isOpened: [],
        visibleCounts: state.visibleCounts - COUNT_CARDS_IN_PAIR,
        total: state.total.map((card) => ((!card.isHidden && !card.isClosed)
          ? { ...card, isHidden: true } : card)),
      };
    case ActionTypes.RECEIVE_CARDS:
      return {
        ...state,
        total: action.cards.map((card) => ({ ...card, isClosed: true, isHidden: false })),
      };
    default:
      return state;
  }
};

export default cards;
