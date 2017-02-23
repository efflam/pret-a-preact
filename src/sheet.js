import { createSheet, defaultConfig } from "./lib/glamor-sheet";
import { css } from "glamor";
const sheet = createSheet(defaultConfig);

export default {
  ...sheet,
  flexCenter: css(sheet.flex, sheet.alignCenter, sheet.justifyCenter),
  container: css(sheet.mxauto, sheet.p4, { maxWidth: 1040 })
};
