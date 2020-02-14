import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import TimerContainer from './TimerContainer';
import CardsContainer from './CardsContainer';
import Result from '../components/Result';
import Header from '../components/Header';

const Game = ({ remainingTime, visibleCounts, isFinish }) => {
  return (
    <>
      <Header />
      <TimerContainer isFinish={isFinish} />
      {isFinish
        ? <Result remainingTime={remainingTime} visibleCounts={visibleCounts} isOpen />
        : <CardsContainer />}
    </>
  );
};

const mapStateToProps = (state) => ({
  remainingTime: state.timer,
  visibleCounts: state.cards.visibleCounts,
  isFinish: !state.timer || !state.cards.visibleCounts,
});

Game.propTypes = {
  remainingTime: PropTypes.number.isRequired,
  visibleCounts: PropTypes.number.isRequired,
  isFinish: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(Game);
