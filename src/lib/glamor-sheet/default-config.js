import defaultColors from "./default-colors";

export default {
  breakpoints: ["40em", "52em", "64em", "76em"].map(
    w => `screen and (min-width:${w})`
  ),
  scale: [0, 4, 8, 16, 32, 64, 128],
  typeScale: [64, 48, 32, 24, 16, 14, 12],
  colors: defaultColors
};
