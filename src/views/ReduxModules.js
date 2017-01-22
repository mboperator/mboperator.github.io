import React, {PropTypes} from 'react';

export default class ReduxModules extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article style={{
        position: 'relative',
        width: '70vw',
        height: '100%',
      }}>
        <h1>redux-modules</h1>
        <p>redux-modules is a library for defining clear, predictable state transformations</p>
      </article>
    );
  }
}

ReduxModules.propTypes = {
};
