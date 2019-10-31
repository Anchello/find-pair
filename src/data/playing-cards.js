import { GameOptions } from '../constants';

const numbers = ['ace', 'king', 'queen', 'jack', '10', '9', '8', '7', '6'];
const suits = ['heart', 'diamond', 'spade', 'club'];

const getPlayingCards = () => {
  const cards = [];
  suits.forEach((suit) => {
    numbers.forEach((number) => cards.push({
      name: {
        number,
        suit,
      },
    }));
    return cards;
  });
  return cards;
};

const getShuffleCards = (cards) => cards.sort(() => Math.random() - 0.5);

const getNewCards = (cards) => {
  const newCards = [];
  while (newCards.length < GameOptions.countPair) {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    if (!newCards.includes(randomCard)) newCards.push(randomCard);
  }
  return newCards;
};

const getRandomCards = () => {
  const cards = getPlayingCards();
  if (cards.length < GameOptions.countPair) return [];
  const newCards = getNewCards(cards);
  const shuffledCards = getShuffleCards([...newCards, ...newCards]);
  return shuffledCards.map((card, index) => ({ ...card, id: index }));
};

export default getRandomCards;
