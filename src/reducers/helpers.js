export const getOpenedCards = (total, action) => total.filter((card) => (card.id === action.id))
  .map((card) => ({ id: card.id, name: card.name }));

export const getReceivedTotalCards = (cards) => cards.map((card) => ({ ...card, isClosed: true, isHidden: false }));
