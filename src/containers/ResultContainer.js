import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Result from '../components/Result';
import { resetGame } from '../actions';
import { GAME } from '../constants';
import getRandomCards from '../data/playing-cards';

const ResultConatiner = ({
  remainingTime, visibleCounts, reset,
}) => {
  const history = useHistory();
  const isWin = useMemo(() => !!remainingTime && !visibleCounts, [remainingTime, visibleCounts]);
  const handleClick = useCallback(() => {
    const cards = getRandomCards();
    reset(cards);
    history.push(GAME);
  }, [history, reset]);
  return (
    <Result isWin={isWin} onClick={handleClick} />
  );
};

const mapStateToProps = (state) => ({
  remainingTime: state.timer,
  visibleCounts: state.cards.visibleCounts,
});

const mapDispatchToProps = (dispatch) => ({
  reset: (cards) => dispatch(resetGame(cards)),
});

ResultConatiner.propTypes = {
  remainingTime: PropTypes.number.isRequired,
  visibleCounts: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultConatiner);
