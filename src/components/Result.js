import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from './Modal';
import './Result.scss';

const Result = ({
  isWin, onClick,
}) => (
  <Modal open title="Your result">
    <p className={classNames('result', {
      'result--is-loser': !isWin,
    })}
    >
      {isWin ? 'Yeah! You won! 🎉' : "Unfortunately you lost, you didn't have enough time 😟 Try again!"}
    </p>
    <button
      type="button"
      className="button"
      onClick={onClick}
    >
      Play again
    </button>
  </Modal>
);

Result.propTypes = {
  isWin: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Result;
