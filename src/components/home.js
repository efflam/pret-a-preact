import { h, Component } from "preact";
import { css } from "glamor";
import sheet from "../sheet";
import Logo from "./logo";
import ProjectList from "./project-list";

const root = css(
  sheet.fixed,
  sheet.top,
  sheet.left,
  sheet.right,
  sheet.bottom,
  sheet.fullHeight
);
const nav = css(sheet.fixed, sheet.top, sheet.pr, sheet.z3);
const leftNav = css(nav, sheet.left);
const rightNav = css(nav, sheet.right);
const profile = css(sheet.noDeco, sheet.inherit, sheet.f3r);
const main = css(sheet.fullHeight, { overflow: "hidden" });

class Home extends Component {
  render({ disabled }, state, { projects }) {
    return (
      <div {...root}>
        <nav {...leftNav}>
          <Logo />
        </nav>
        <nav {...rightNav}>
          <a href="/profile" {...profile}>Link</a>
          <a href="/playground" {...profile}>Playground</a>
        </nav>
        <main {...main}>
          {projects
            ? <ProjectList projects={projects} disabled={disabled} />
            : null}
        </main>
      </div>
    );
  }
}

export default Home;
