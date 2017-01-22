import React from 'react';
import Rx from 'rxjs';

const scrollDecorator = Component =>
  class Connected extends React.Component {
    constructor(...args) {
      super(...args);

      this.state = {
        horizontalScrollPercentage: 0,
        verticalScrollPercentage: 0,
        headerWidth: 100,
        headerHeight: 100,
        sticky: false,
        initialMountComplete: false,
      };
    }

    componentDidMount() {
      if (this.props.initialPositionTop && !this.state.initialMountComplete) {
        const newY = (this.props.initialPositionTop / 100) * document.body.clientHeight;

        window.scrollTo(0, newY / 2);
        this.setState({ initialMountComplete: true });
      }

      const scroll$ = Rx.Observable.fromEvent(document, 'scroll');
      scroll$
        .map(() => {
          const horizontalScrollPercentage = (document.body.scrollLeft / document.body.clientWidth) * 2;
          const verticalScrollPercentage = (document.body.scrollTop / document.body.clientHeight) * 2;
          const headerHeight = (1 - verticalScrollPercentage) * 100;
          const headerWidth = Math.max(1 - horizontalScrollPercentage, 0.2) * 100;
          return {
            horizontalScrollPercentage,
            headerWidth,
            headerHeight,
          };
        })
        .subscribe(state => this.setState(state));
    }

    render() {
      return (
        <Component
          horizontalScrollPercentage={this.state.headerWidth}
          headerWidth={this.state.headerWidth}
          headerHeight={this.state.headerHeight}
          sticky={this.state.sticky}
        />
      );
    }
  };

export default scrollDecorator;
