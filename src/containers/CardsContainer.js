import React, { useEffect, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openCard, closeCard, hideCard } from '../actions';
import Cards from '../components/Cards';
import { GameOptions, COUNT_CARDS_IN_PAIR, COUNT_ONE_CARD } from '../constants';

const getDelayClosingCard = (countIsOpened) => {
  switch (countIsOpened) {
    case COUNT_CARDS_IN_PAIR:
      return GameOptions.delayClosingPair;
    case COUNT_ONE_CARD:
      return GameOptions.delayClosingCard;
    default:
      return null;
  }
};

const CardsContainer = ({
  cards, isOpened, countIsOpened, open, close, hide,
}) => {
  const timerRef = useRef(0);
  const handleClick = useCallback((card) => {
    if (countIsOpened === COUNT_CARDS_IN_PAIR || !card.isClosed) return;
    open(card.id, card.name);
  }, [countIsOpened, open]);

  const isMatchingCards = useCallback(() => {
    const [first, second] = [isOpened[0], isOpened[1]];
    return first.name.number === second.name.number && first.name.suit === second.name.suit;
  }, [isOpened]);

  useEffect(() => {
    const delayClosing = getDelayClosingCard(countIsOpened);
    if (delayClosing) {
      timerRef.current = setTimeout(close, delayClosing);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [countIsOpened, close]);

  useEffect(() => {
    const isOpenPair = countIsOpened === COUNT_CARDS_IN_PAIR;
    if (isOpenPair && isMatchingCards()) hide();
  }, [countIsOpened, hide, isMatchingCards]);

  return (
    <Cards cards={cards} onClick={handleClick} />
  );
};

const mapStateToProps = (state) => ({
  cards: state.cards.total,
  isOpened: state.cards.isOpened,
  countIsOpened: state.cards.isOpened.length,
});

const mapDispatchToProps = (dispatch) => ({
  open: (id, name) => dispatch(openCard(id, name)),
  close: () => dispatch(closeCard()),
  hide: () => dispatch(hideCard()),
});

CardsContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isClosed: PropTypes.bool.isRequired,
    isHidden: PropTypes.bool.isRequired,
    name: PropTypes.objectOf(PropTypes.string).isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  isOpened: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired).isRequired,
  countIsOpened: PropTypes.number.isRequired,
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsContainer);
