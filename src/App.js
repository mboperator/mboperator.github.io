import React from 'react';
import { BrowserRouter, Match } from 'react-router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import appModule from './modules/app';

import Home from './views/Home';
import Musings from './views/Musings';
import './App.css';

const store = createStore(appModule.reducer);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/musings" component={Musings} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
