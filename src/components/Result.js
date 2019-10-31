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
    <Modal open={isOpen} title="Результаты игры">
      <p className={classNames('result', {
        'result--is-loser': !isWin,
      })}
      >
        {isWin ? 'Поздравляю Вы выиграли!' : 'К сожалению вы проиграли, Вам не хватило время. Попробуйте еще раз!'}
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
