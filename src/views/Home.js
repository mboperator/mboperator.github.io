import React from 'react';

import Torn from './Torn';
import God from './God';
import ReduxModules from './ReduxModules';

import Title from '../components/Title';
import Enlighten from '../components/Enlighten';
import SiteSection from '../components/SiteSection';
import TrapTears from '../components/TrapTears';

import scrollDecorator from '../decorators/pageScroll';

const EnlightenPartiallyApplied = () =>
  <Enlighten initialY={-1000} initialX={0} />

const Home = ({ headerHeight, headerWidth, verticalScrollPercentage, horizontalScrollPercentage }) => (
  <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
    <SiteSection
      header={EnlightenPartiallyApplied}
      style={{
        width: `${headerWidth}vw`,
        height: `${headerHeight + 1}vh`,
        top: '0vh',
      }}
    >
      <ReduxModules />
    </SiteSection>
    <Title
      verticalScrollPercentage={verticalScrollPercentage}
      horizontalScrollPercentage={horizontalScrollPercentage}
    />
    <SiteSection
      header={TrapTears}
      style={{
        width: `${headerWidth}vw`,
        height: `${Math.ceil(100 - headerHeight - 2, 0)}vh`,
        bottom: '0vh',
      }}
    >
      <Torn />
      <God />
    </SiteSection>
  </div>
);

export default scrollDecorator(Home);
