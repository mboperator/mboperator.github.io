import React, { Component } from 'react';
import Icon from './components/Icon';
import logo from './logo.svg';
import './App.css';

const socialAccounts = [
  {
    icon: 'twitter',
    link: 'https://www.twitter.com/marcusbernales',
    color: 'blue',
  },
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/mboprtr',
    color: 'blue',
  },
  {
    icon: 'github',
    link: 'https://www.github.com/mboperator/',
    color: 'black',
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-hero">
        </div>
        <div className="App-heading">
          <h1>Marcus Bernales</h1>
          <h3>Software Engineer @ Procore Technologies</h3>
          <h3>Making software for humanity</h3>
          <div className="App-social-icons">
            {socialAccounts.map(account =>
              <Icon
                link={account.link}
                icon={account.icon}
                color={account.color}
                size="25px"
                style={{ padding: '5px' }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
