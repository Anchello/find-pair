export const ActionTypes = {
  START_TIMER: 'START_TIMER',
  STOP_TIMER: 'STOP_TIMER',
  OPEN_CARD: 'OPEN_CARD',
  CLOSE_CARD: 'CLOSE_CARD',
  RECEIVE_CARDS: 'RECEIVE_CARDS',
};

const COUNT_PAIR = 18;

export const GameOptions = {
  countPair: COUNT_PAIR,
  totalCountCards: COUNT_PAIR * 2,
};

export const InitialState = {
  timer: 300,
  cards: {
    visibleCounts: GameOptions.totalCountCards,
    total: [],
    isOpened: [],
  },
};
