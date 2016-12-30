import React, {PropTypes} from 'react';

export default class Torn extends React.Component {
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
        <section style={{position: 'absolute', top: 150, left: 10}}>
          <p>Two worlds, torn</p>
          <p>Light and dark, the dance of life</p>
        </section>

        <section style={{position: 'absolute', top: 250, left: 200}}>
          <p>Consumption destroying all inside out</p>
          <p>Creation bestowing love</p>
        </section>

        <section style={{position: 'absolute', top: 350, left: 300}}>
          <p>The pilot light of my soul</p>
          <p>Fragile, persistent, strong</p>
        </section>

        <section style={{position: 'absolute', top: 450, left: 400}}>
          <p>Give me strength</p>
          <p>Light my way</p>
        </section>

        <section style={{position: 'absolute', top: 550, left: 500}}>
          <p>So I can do the same for others</p>
        </section>
      </article>
    );
  }
}

Torn.propTypes = {
};
