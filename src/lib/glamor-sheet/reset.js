import { css } from "glamor";

export default {
  reset: () => {
    css.global("*", { boxSizing: "border-box" });
    css.global("body", { margin: 0 });
  }
};
