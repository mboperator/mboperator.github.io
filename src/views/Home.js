import React from 'react';
import Rx from 'rxjs';

import Torn from './Torn';
import God from './God';

const scrollDecorator = Component =>
  class Connected extends React.Component {
    constructor(...args) {
      super(...args);

      this.state = { scrollPercentage: 0, headerWidth: 100, sticky: false };
    }
    componentDidMount() {
      const scroll$ = Rx.Observable.fromEvent(document, 'scroll');
      scroll$
        .map(() => {
          const scrollPercentage = (document.body.scrollLeft / document.body.clientWidth) * 2;
          const headerWidth = Math.max(1 - scrollPercentage, 0.2) * 100;
          return {
            scrollPercentage,
            headerWidth,
          };
        })
        .subscribe(state => this.setState(state));
    }

    render() {
      return (
        <Component
          scrollPercentage={this.state.headerWidth}
          headerWidth={this.state.headerWidth}
          sticky={this.state.sticky}
        />
      );
    }
  };

const Home = ({ headerWidth, scrollPercentage }) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div
      style={{
        width: `${headerWidth}vw`,
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        zIndex: 10,
      }}
    >
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        <video autoPlay loop>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="App-heading">
          <h1>Marcus Bernales</h1>
          <h3>for the love of us</h3>
        </div>
      </div>
    </div>
    <div style={{
      paddingLeft: '80vw',
      height: '100vh',
      zIndex: 5,
      flexDirection: 'row',
      display: 'flex',
    }}>
      <Torn />
      <God />
    </div>
  </div>
);

export default scrollDecorator(Home);
