import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Cards.scss';

const Cards = ({ cards, onClick }) => (
  <ul className="cards">
    {cards.map((card) => (
      <Card
        key={card.id}
        name={card.name}
        imgSrc={card.imgSrc}
        isClosed={card.isClosed}
        isHided={card.isHided}
        onClick={() => onClick(card)}
      />
    ))}
  </ul>
);

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isClosed: PropTypes.bool.isRequired,
    isHided: PropTypes.bool.isRequired,
    name: PropTypes.objectOf(PropTypes.string).isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cards;
