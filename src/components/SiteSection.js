import React from 'react';

const SiteSection = ({ children, style = {}, header: Header }) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div
      style={{
        overflow: 'hidden',
        position: 'fixed',
        zIndex: 10,
        ...style,
      }}
    >
      <div style={{
        height: '100%',
        width: '100%',
        position: 'relative',
      }}>
        <Header />
      </div>
    </div>
    <div style={{
      paddingLeft: '80vw',
      height: '100vh',
      zIndex: 5,
      flexDirection: 'row',
      display: 'flex',
    }}>
      {children}
    </div>
  </div>
);

export default SiteSection;
