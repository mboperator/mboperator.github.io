import React from 'react'
import Head from 'next/head'

class App extends React.Component {
  render() {
    return (
      <div className="root">
          <style global jsx>{`
            body {
              margin: 0;
              padding: 0;
              font-family: 'Pontano Sans', sans-serif;
            }
            `}
          </style>
          <style jsx>{`
            .root {
              height: 100vh;
              background-image: url('/static/korea.jpg');
              background-size: cover;
              background-position: center;
            }

            .overlay {
              background: radial-gradient(transparent, rgba(0, 0, 0, 0.7)), rgba(0, 0, 0, 0);
              height: 100%;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .subtitle {
              color: white;
              background-color: black;
              mix-blend-mode: overlay;
              font-size: 1.5em;
            }

            .content {
            }

            .hero h1 {
              display: inline;
              background-color: #000;
              mix-blend-mode: overlay;
              color: white;
              mix-blend-mode: overlay;
            }

            .hero {
              font-size: 2em;
              margin: .5em 0;
            }

            .links {
              padding: 0;
              margin: 1.5em 0;
              display: flex;
              flex-direction: row;
            }

            .links li {
              flex: 1
              margin: .5em;
              list-style-type: none;
              text-align: center;
            }

            .links li i {
              font-size: 30px;
            }

            h1 { margin: 0.2em 0; }
            a:visited { color: black; }
          `}
        </style>

        <div className="overlay">
          <Head>
            <title>Marcus Bernales</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Pontano+Sans" rel="stylesheet" />
          </Head>
          <div className="content">
            <div className="hero">
              <h1>I'm Marcus</h1>
            </div>
            <div className="subtitle">
              I create tools and products that make people more effective
            </div>
            <ul className="links">
              <li>
                <a href="/blog">
                  <i className="fa fa-book" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/mboperator">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/marcus-bernales-71b2284b">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/mpowered__">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/mpowered__/">
                  <i className=" fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
