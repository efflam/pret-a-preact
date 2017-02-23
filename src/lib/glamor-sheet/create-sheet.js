import typeScale from "./type-scale";
import spacing from "./spacing";
import position from "./position";
import color from "./color";
import backgroundColor from "./background-color";
import background from "./background";
import display from "./display";
import breakpoint from "./breakpoint";
import flexbox from "./flexbox";
import borderRadius from "./border-radius";
import textAlign from "./text-align";
import reset from './reset';
import size from './size';
import zIndex from './z-index';
import font from './font';
export default config => ({
  noDeco: {textDecoration: 'none'},
  underline: {textDecoration: 'underline'},
  ...reset,
  ...background,
  ...size,
  ...zIndex,
  ...position,
  ...textAlign,
  ...font,
  ...display,
  ...flexbox,
  ...typeScale(config.typeScale),
  ...spacing(config.scale),
  ...color(config.colors),
  ...backgroundColor(config.colors),
  ...breakpoint(config.breakpoints),
  ...borderRadius(),
  config
});
