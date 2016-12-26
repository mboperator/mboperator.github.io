import React from 'react';
import { BrowserRouter, Match } from 'react-router';

import Home from './views/Home';
import Musings from './views/Musings';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/musings" component={Musings} />
    </div>
  </BrowserRouter>
);

export default App;
