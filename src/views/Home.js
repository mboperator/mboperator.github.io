import React from 'react';

import Torn from './Torn';
import God from './God';
import ReduxModules from './ReduxModules';

import Enlighten from '../components/Enlighten';
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
        <h3>reflections</h3>
      </div>
    </div>
  </div>
);

const EnlightenPartiallyApplied = () =>
  <Enlighten initialY={-700} initialX={0} />

const Home = ({ headerHeight, headerWidth }) => (
  <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
    <SiteSection
      header={EnlightenPartiallyApplied}
      style={{
        width: `${headerWidth}vw`,
        height: `${headerHeight}vh`,
        top: '0vh',
      }}
    >
      <ReduxModules />
    </SiteSection>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>M. Bernales</h1>
    </div>
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
