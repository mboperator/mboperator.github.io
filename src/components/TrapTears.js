import React from 'react';

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
        <h3>feelings</h3>
      </div>
    </div>
  </div>
);

export default TrapTears;
