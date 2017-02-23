import { css } from "glamor";
import mapArrayToObject from "./map-array-to-object";

export default mapArrayToObject((value, index) => [`f${index}`], value => ({
  fontSize: value
}));
