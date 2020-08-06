export const getNewOpenedCards = (total, actionId) => total.filter((card) => (card.id === actionId))
  .map((card) => ({ id: card.id, name: card.name }));

export const getReceivedTotalCards = (cards) => cards.map((card) => ({
  ...card,
  isClosed: true,
  isHidden: false,
}));

export const setOpenedCards = (total, actionId) => total.map((card) => (
  (card.id === actionId) ? { ...card, isClosed: false } : card));

export const setClosedCards = (total) => total.map((card) => ((!card.isClosed)
  ? { ...card, isClosed: true } : card));

export const setHiddenCards = (total) => total.map((card) => ((!card.isHidden && !card.isClosed)
  ? { ...card, isHidden: true } : card));
