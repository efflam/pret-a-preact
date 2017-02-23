import { h, Component } from "preact";
import { css } from "glamor";
import sheet from "../sheet";

const link = css(sheet.white, sheet.noDeco, {
  ":hover": [sheet.underline]
});

const root = css(
  sheet.fullViewport,
  sheet.flex,
  sheet.alignCenter,
  sheet.justifyCenter,
  sheet.bgBlack,
  sheet.silver,
  sheet.textCenter,
  { " a": link }
);

const title = css(sheet.white);

class Home extends Component {
  render() {
    return (
      <div {...root}>
        <header>
          <div>
            <h1 {...title}>Prêt-à-Preact 🛍️</h1>
            <p>
              <a href="https://github.com/developit/preact">Preact</a>
              {" "}&{" "}
              <a href="https://github.com/threepointone/glamor">Glamor</a>
              {" "}boilerplate powered by webpack2. (
              <a href="https://github.com/efflam/pret-a-preact">github</a>
              )
            </p>
            <p />
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
