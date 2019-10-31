import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Game from './Game';
import combineReducers from '../reducers';
import { receiveCards } from '../actions';
import getRandomCards from '../data/playing-cards';

const store = createStore(combineReducers);

const cards = getRandomCards();
store.dispatch(receiveCards(cards));

const App = () => (
  <main>
    <Provider store={store}>
      <Game />
    </Provider>
  </main>
);

export default App;
