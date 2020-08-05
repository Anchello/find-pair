import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import TimerContainer from './TimerContainer';
import CardsContainer from './CardsContainer';
import { RESULT } from '../constants';

const GameContainer = ({ isFinish }) => {
  const history = useHistory();

  useEffect(() => {
    if (isFinish) history.push(RESULT);
  }, [isFinish, history]);

  return (
    <>
      <TimerContainer isFinish={isFinish} />
      <CardsContainer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isFinish: !state.timer || !state.cards.visibleCounts,
});

GameContainer.propTypes = {
  isFinish: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(GameContainer);
