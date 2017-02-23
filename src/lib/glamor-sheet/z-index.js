import { css } from "glamor";
import mapArrayToObject from "./map-array-to-object";

export default mapArrayToObject((value, index) => [`z${index}`], value => ({
  zIndex: value
}))(Array(10).fill().map((_, i)=> i));
