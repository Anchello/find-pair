import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import combineReducers from '../reducers';
import { receiveCards } from '../actions';
import GameContainer from './GameContainer';
import Intro from '../components/Intro';
import getRandomCards from '../data/playing-cards';
import { INDEX, GAME, RESULT } from '../constants';
import ResultContainer from './ResultContainer';

const store = createStore(combineReducers);

const cards = getRandomCards();
store.dispatch(receiveCards(cards));

const Routing = () => (
  <HashRouter hashType="noslash">
    <main>
      <Provider store={store}>
        <Route exact path={INDEX} component={Intro} />
        <Route path={GAME} component={GameContainer} />
        <Route path={RESULT} component={ResultContainer} />
      </Provider>
    </main>
  </HashRouter>
);

export default Routing;
