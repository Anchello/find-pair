import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Card.scss';
import ImgDeck from '../media/deck.png';

const Card = ({
  onClick, isClosed, isHided, imgSrc,
}) => {
  const bgImgSrc = isClosed ? ImgDeck : `${process.env.PUBLIC_URL}/${imgSrc}`;
  return (
  <li className="card">
    <button
      type="button"
      onClick={onClick}
      className={classNames('card__item', {
        'card__item--is-hided': isHided,
      })}
      style={{ backgroundImage: `url(${bgImgSrc})` }}
    />
  </li>
);}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  isClosed: PropTypes.bool.isRequired,
  isHided: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Card;
