import { h, Component } from "preact";

export default class App extends Component {
  render() {
    return (
      <div>
        <style jsx global>{`
          body {
            font-family: -apple-system,BlinkMacSystemFont,sans-serif;
            margin: 0;
            background: black;
          }
        `}</style>
        <style jsx>{`
          header {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
          }
          h1 {
            font-weight: normal;
          }
          p {
            color: #ababab;
          }
          a {
            color: white;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
        <header>
          <div>
            <h1>Prêt-à-Preact 🛍️</h1>
            <p><a href="https://github.com/developit/preact">preact</a> & <a href="https://github.com/zeit/styled-jsx">styled-jsx</a> boilerplate powered by webpack2. (<a href="https://github.com/efflam/pret-a-preact">github</a>)</p>
            <p></p>
          </div>
        </header>
      </div>
    );
  }
}
