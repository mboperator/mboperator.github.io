import React, {PropTypes} from 'react';
import { Match } from 'react-router';
import Post from './Post';

const Musings = ({ pathname, pattern }) => (
  <div>
    Musings
    <Match pattern={`${pathname}/:post`} component={Post} />
  </div>
);

export default Musings;
