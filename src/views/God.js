import React, {PropTypes} from 'react';

export default class God extends React.Component {
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
          <p>A God is one who learned how to rationalize the irrational</p>
          <p>Models allow us to try to predict the systems in our life</p>
        </section>

        <section style={{position: 'absolute', top: 250, left: 10}}>
          <p>The ability to rationalize the irrational represents our ability to model systems that were not previously/not commonly understood </p>
          <p>The error between the expectations of our model and reality represents the resolution with which we can predict the future</p>
        </section>

        <section style={{position: 'absolute', top: 350, left: 10}}>
          <p>How do you improve a model?</p>
          <p>Gather more data</p>
        </section>

        <section style={{position: 'absolute', top: 500, right: 100}}>
          <p>What is God?</p>
          <ul>
            <li>Omnipresent - Everywhere at once</li>
            <li>Omnipotent - Able to exert power anywhere at once</li>
            <li>Omniscient - Knowing everything at once</li>
          </ul>
          <p>What do these abilities allow?</p>
          <p>The ability to shape reality</p>
        </section>
      </article>
    );
  }
}
