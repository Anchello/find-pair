import { InitialState, ActionTypes } from '../constants';

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
    case ActionTypes.RECEIVE_CARDS:
      return {
        ...state,
        total: action.cards.map((card) => ({ ...card, isClosed: true, isHided: false })),
      };
    default:
      return state;
  }
};

export default cards;
