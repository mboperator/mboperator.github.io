import React from 'react';
import { BrowserRouter, Match } from 'react-router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import appModule from './modules/app';

import Home from './views/Home';
import './App.css';

const store = createStore(appModule.reducer);

const PartiallyAppliedHome = () => <Home initialPositionTop={50}/>

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Match exactly pattern="/" component={PartiallyAppliedHome} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
