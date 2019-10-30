import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TimerContainer from './TimerContainer';
import combineReducers from '../reducers';

const store = createStore(combineReducers);

const App = () => (
  <div>
    <Provider store={store}>
      <TimerContainer />
    </Provider>
  </div>
);

export default App;
