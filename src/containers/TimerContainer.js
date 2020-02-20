import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from '../components/Timer';
import { startTimer } from '../actions';
import { MS_IN_ONE_MIN } from '../constants';

const TimerContainer = ({
  remainingTime, tick, isFinish,
}) => {
  const intervalRef = useRef(0);
  useEffect(() => {
    if (!isFinish) {
      intervalRef.current = setInterval(tick, MS_IN_ONE_MIN);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [tick, isFinish]);
  return (
    <Timer remainingTime={remainingTime} isFinish={isFinish} />
  );
};

const mapStateToProps = (state) => ({
  remainingTime: state.timer,
});

const mapDispatchToProps = (dispatch) => ({
  tick: () => {
    dispatch(startTimer());
  },
});

TimerContainer.propTypes = {
  remainingTime: PropTypes.number.isRequired,
  tick: PropTypes.func.isRequired,
  isFinish: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerContainer);
