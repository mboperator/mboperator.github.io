import React from 'react';
import Icon from '../components/Icon';

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

const Home = () => (
  <div>
    <div className="App-hero">
      <video autoPlay loop>
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="App-heading">
      <h1>Marcus Bernales</h1>
      <h3>Frontend Developer</h3>
      <h3>Making software for humanity</h3>
      <div className="App-social-icons">
        {socialAccounts.map(account =>
          <Icon
            key={account.link}
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

export default Home;
