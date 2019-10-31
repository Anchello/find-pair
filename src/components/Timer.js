import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Timer.scss';

const addZero = (num) => ((num < 10) ? `0${num}` : num);

const getTimerValue = (remainingTime) => {
  const SECS_IN_ONE_MIN = 60;
  return {
    min: addZero(Math.trunc(remainingTime / SECS_IN_ONE_MIN)),
    sec: addZero(remainingTime % SECS_IN_ONE_MIN),
  };
};

const isFinishing = (remainingTime) => remainingTime && remainingTime < 30;

const Timer = ({ remainingTime, isFinish }) => {
  const timerValue = getTimerValue(remainingTime);
  return (
    <div className={classNames('timer', {
      'timer--is-finishing': isFinishing(remainingTime),
      'timer--is-finished': isFinish,
    })}
    >
      <span className="timer__value">
        {timerValue.min}
      </span>
      <span className="timer__dots">:</span>
      <span className="timer__value">{timerValue.sec}</span>
    </div>
  );
};

Timer.defaultProps = {
  remainingTime: 0,
};


Timer.propTypes = {
  remainingTime: PropTypes.number,
  isFinish: PropTypes.bool.isRequired,
};

export default Timer;
