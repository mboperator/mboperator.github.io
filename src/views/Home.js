import React from 'react';

import Torn from './Torn';
import God from './God';
import SiteSection from '../components/SiteSection';

import scrollDecorator from '../decorators/pageScroll';

const TrapTears = () => (
  <div style={{
    height: '100%',
    width: '100%',
    position: 'relative',
  }}>
    <video autoPlay loop>
      <source src="/musings.mp4" type="video/mp4" />
    </video>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div>
        <h1>M. Bernales</h1>
        <h3>reflections and thoughts</h3>
      </div>
    </div>
  </div>
);

const Enlighten = () => (
  <div
    style={{
      height: '100%',
      width: '100%',
      backgroundImage: 'url(/opensource.jpg)',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div style={{
      backgroundColor: 'black',
      color: 'rgba(255, 255, 255, 0.66)',
      mixBlendMode: 'exclusion',
    }}>
      <h1>M. Bernales</h1>
      <h3>technology for humans</h3>
    </div>
  </div>
);

const Home = ({ headerHeight, headerWidth }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <SiteSection
      header={Enlighten}
      style={{
        width: `${headerWidth}vw`,
        height: `${headerHeight}vh`,
        top: '0vh',
      }}
    >
      <Torn />
      <God />
    </SiteSection>
    <SiteSection
      header={TrapTears}
      style={{
        width: `${headerWidth}vw`,
        height: `${100 - headerHeight}vh`,
        bottom: '0vh',
      }}
    >
      <Torn />
      <God />
    </SiteSection>
  </div>
);

export default scrollDecorator(Home);
