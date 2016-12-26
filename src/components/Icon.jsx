import React, { PropTypes } from 'react';

const Icon = ({ link, icon, size, color, style }) => (
  <a
    href={link}
    style={{ color, ...style }}
  >
    <i style={{ fontSize: size }} className={`fa fa-${icon}`} />
  </a>
);

export default Icon;
