import { h, render } from "preact";

let root;

function init() {
  let App = require("./components/app").default;
  root = render(<App />, document.body, root);
}; 

init();

if (module.hot) {
  module.hot.accept(
    "./components/app",
    () => window.requestAnimationFrame(() => {
      init();
    })
  );
}
