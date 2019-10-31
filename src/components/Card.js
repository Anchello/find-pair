import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Card.scss';

const Card = ({
  onClick, isClosed, isHided, name,
}) => (
  <li className="card">
    <button
      type="button"
      onClick={onClick}
      className={classNames('card__item', {
        'card__item--is-closed': isClosed,
        'card__item--is-hided': isHided,
      })}
    >
      {isClosed ? null : `${name.number} ${name.suit}`}
    </button>
  </li>
);

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  isClosed: PropTypes.bool.isRequired,
  isHided: PropTypes.bool.isRequired,
  name: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Card;
