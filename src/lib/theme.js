import { typography, defaultColors } from "pret-a-porter";
import colors from "./colors";

export const fontFamily = ["-apple-system", "sans-serif"].join(", ");

const breakpoints = ["590px", "768px", "980px", "1280px"];

const theme = {
  breakpoints: breakpoints,
  fontFamily: fontFamily,
  typography: typography({
    fontSize: 16,
    scaleRatio: "majorThird",
    lineHeightRatio: 1.5
  }),
  colors,
  text: {
    bold: 600,
    fontFamily: fontFamily
  }
};

export default theme;
