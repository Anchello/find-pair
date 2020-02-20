export const ActionTypes = {
  START_TIMER: 'START_TIMER',
  STOP_TIMER: 'STOP_TIMER',
  OPEN_CARD: 'OPEN_CARD',
  CLOSE_CARD: 'CLOSE_CARD',
  HIDE_CARD: 'HIDE_CARD',
  RECEIVE_CARDS: 'RECEIVE_CARDS',
};

const COUNT_PAIR = 18;
export const COUNT_CARDS_IN_PAIR = 2;
export const COUNT_ONE_CARD = 1;

export const GameOptions = {
  countPair: COUNT_PAIR,
  totalCountCards: COUNT_PAIR * COUNT_CARDS_IN_PAIR,
  delayClosingPair: 1500,
  delayClosingCard: 5000,
};

export const InitialState = {
  timer: 300,
  cards: {
    visibleCounts: GameOptions.totalCountCards,
    total: [],
    isOpened: [],
  },
};
