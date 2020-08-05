import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { GAME } from '../constants';
import './Intro.scss';

const Intro = () => (
  <Modal open title="Welcome to game 'Find a pair'">
    <h3>Rules of the game:</h3>
    <ul className="intro-rules">
      <li>On the screen you will see 18 pairs of playing cards face down.</li>
      <li>You need to find all pairs of cards for a certain time.</li>
      <li>In order to open a card, click on it.</li>
      <li>You can open only two cards at a time.</li>
      <li>
        After opening one card, you have 5 seconds to open the second card,
        otherwise the first card automatically will close.
      </li>
      <li>If the cards match, then they will be hidden.</li>
      <li>
        If the cards don&apos;t match, then they automatically close after 1 second.
        And only after that you can open the following cards.
      </li>
      <li>You cann&apos;t close open cards yourself.</li>
      <li>
        If you find all the cards in a certain time, then you will win
        {' '}
        <span role="img" aria-label="win">🎉</span>
        ,
        if you don&apos;t have time, then you will lose
        {' '}
        <span role="img" aria-label="lose">😟</span>
        .
      </li>
    </ul>
    <Link
      className="button"
      to={{
        pathname: GAME,
      }}
    >
      Start the game
    </Link>
  </Modal>
);

export default Intro;
