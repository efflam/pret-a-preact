import { h, Component } from "preact";
import { css } from "glamor";
import sheet from "../sheet";
import Router from "preact-router";
import Home from "./home";

sheet.reset();

const app = css({
  fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif"
});

export default class App extends Component {
  render(pros, { url }) {
    return (
      <div {...app}>
        <Router>
          <Home path="/" />
        </Router>
      </div>
    );
  }
}
