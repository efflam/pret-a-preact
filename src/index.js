import { h, render } from "preact";

let root;

function init() {
  let App = require("./components/app").default;
  root = render(<App />, document.body, document.getElementById('root'));
}
init();

if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("/service-worker.js");
  }
} else {
  require("preact/devtools");
  if (module.hot) {
    module.hot.accept(
      "./components/app",
      () => window.requestAnimationFrame(() => {
        init();
      })
    );
  }
}
