import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openCard, closeCard, hideCard } from '../actions';
import Cards from '../components/Cards';
import { GameOptions, COUNT_CARDS_IN_PAIR } from '../constants';

class CardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentDidUpdate(prevProps) {
    const { isOpened, hide } = this.props;
    this.stopTimout();
    if (prevProps.isOpened.length !== isOpened.length) {
      const isOpenPair = isOpened.length === COUNT_CARDS_IN_PAIR;
      const delayClosing = isOpenPair
        ? GameOptions.delayClosingPair : GameOptions.delayClosingCard;
      this.closeCards(delayClosing);
      if (isOpenPair && this.isMatchingCards()) hide();
    }
  }

  componentWillUnmount() {
    this.stopTimout();
  }

  handleClick = (card) => {
    const { open, isOpened } = this.props;
    if (isOpened.length === COUNT_CARDS_IN_PAIR || !card.isClosed) return;
    open(card.id, card.name);
  };

  stopTimout() {
    if (this.timer) clearTimeout(this.timer);
  }

  closeCards(delay) {
    const { close } = this.props;
    this.timer = setTimeout(close, delay);
  }

  isMatchingCards() {
    const { isOpened } = this.props;
    const [first, second] = [isOpened[0], isOpened[1]];
    return first.name.number === second.name.number && first.name.suit === second.name.suit;
  }

  render() {
    const { cards } = this.props;
    return (
      <Cards cards={cards} onClick={this.handleClick} />
    );
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards.total,
  isOpened: state.cards.isOpened,
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
    isHided: PropTypes.bool.isRequired,
    name: PropTypes.objectOf(PropTypes.string).isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  isOpened: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired).isRequired,
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsContainer);
