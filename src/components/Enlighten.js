import React from 'react';

const wrapSlowPan = Component =>
  class SlowPan extends React.Component {
    state = { x: 0, y: 0, direction: 'negative' }

    componentWillMount() {
      this.setState({
        x: this.props.initialX,
        y: this.props.initialY,
      });
    }

    componentDidMount() {
      this.startPanning();
    }

    componentWillUnmount() {
      this.stopPanning();
    }

    startPanning = () => {
      this.panProcess = setInterval(this.pan, 30)
    }

    stopPanning = () => {
      clearInterval(this.panProcess);
    }

    pan = () => {
      window.requestAnimationFrame(() => {
        this.setState(({ x, y, direction: currentDirection }) => {
          let direction = currentDirection;

          if (x < -1500 && (currentDirection === 'negative')) {
            direction = 'positive';
          }

          if (x === this.props.initialX) {
            direction = 'negative';
          }

          if (direction === 'positive') {
            return { x: x + 1, y, direction };
          } else {
            return { x: x - 1, y, direction };
          }
        });
      });
    }

    render() {
      const { x, y } = this.state;
      return(
        <Component coordinates={{ x, y }} {...this.props} />
      );
    }
  };

const Enlighten = ({ coordinates }) => (
  <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img
      style={{ position: 'absolute', top: coordinates.y, left: coordinates.x }}
      src="/opensource.jpg"
    />
    <div style={{
      backgroundColor: 'black',
      color: 'rgba(255, 255, 255, 0.66)',
      mixBlendMode: 'exclusion',
    }}>
      <h3>technology</h3>
    </div>
  </div>
);

export default wrapSlowPan(Enlighten);
