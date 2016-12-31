import React, { PropTypes } from 'react';

const Icon = ({ link, icon, size, color, style }) => (
  <a
    href={link}
    style={{ color, ...style }}
  >
    <i style={{ fontSize: size }} className={`fa fa-${icon}`} />
  </a>
);

Icon.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
