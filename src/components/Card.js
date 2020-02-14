import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Card.scss';

const Card = ({
  onClick, isClosed, isHidden, imgSrc,
}) => (
  <li className={classNames('card', {
    'card--is-hidden': isHidden,
    'card--is-opened': !isClosed,
  })}
  >
    <button
      type="button"
      onClick={onClick}
      className="card__item card__item--back"
    />
    <button
      type="button"
      onClick={onClick}
      className="card__item card__item--front"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${imgSrc})` }}
    />
  </li>
);

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  isClosed: PropTypes.bool.isRequired,
  isHidden: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Card;
