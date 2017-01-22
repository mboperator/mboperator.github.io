import React from 'react';

import Torn from './Torn';
import God from './God';
import ReduxModules from './ReduxModules';

import Enlighten from '../components/Enlighten';
import SiteSection from '../components/SiteSection';
import TrapTears from '../components/TrapTears';

import scrollDecorator from '../decorators/pageScroll';

const EnlightenPartiallyApplied = () =>
  <Enlighten initialY={-1000} initialX={0} />

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
      <div style={{ color: 'white' }}>
        <h1>M. Bernales</h1>
      </div>
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
