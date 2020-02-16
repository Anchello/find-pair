import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from './Modal';
import './Result.scss';

const Result = ({
  remainingTime, visibleCounts, isOpen,
}) => {
  const isWin = remainingTime && !visibleCounts;
  return (
    <Modal open={isOpen}>
      <p className={classNames('result', {
        'result--is-loser': !isWin,
      })}
      >
        {isWin ? 'Yeah! You won! 🎉' : `Unfortunately you lost, you didn't have enough time 😟 Try again!`}
      </p>
    </Modal>
  );
};

Result.propTypes = {
  remainingTime: PropTypes.number.isRequired,
  visibleCounts: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Result;
