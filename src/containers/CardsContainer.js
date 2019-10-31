import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openCard } from '../actions';
import Cards from '../components/Cards';

class CardsContainer extends React.Component {
  componentDidUpdate(prevProps) {
    const { isOpened } = this.props;
    if (prevProps.isOpened.length !== isOpened.length && isOpened.length === 2) {
      this.isMatсhingCards();
    }
  }

  onClick = (card) => {
    const { onOpen, isOpened } = this.props;
    if (isOpened.length === 2 || !card.isClosed) return;
    onOpen(card.id, card.name);
  };

  isMatсhingCards() {
    const { isOpened } = this.props;
    const [first, second] = [isOpened[0], isOpened[1]];
    return first.name.number === second.name.number && first.name.suit === second.name.suit;
  }

  render() {
    const { cards } = this.props;
    return (
      <Cards cards={cards} onOpen={this.onClick} />
    );
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards.total,
  isOpened: state.cards.isOpened,
});

const mapDispatchToProps = (dispatch) => ({
  onOpen: (id, name) => dispatch(openCard(id, name)),
});

CardsContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isClosed: PropTypes.bool.isRequired,
    isHided: PropTypes.bool.isRequired,
    name: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired).isRequired,
  isOpened: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired).isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsContainer);
