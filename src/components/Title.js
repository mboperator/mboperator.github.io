import React from 'react';

const Title = ({ verticalScrollPercentage, horizontalScrollPercentage }) => (
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
);

export default Title;
