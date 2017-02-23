import { css } from "glamor";
import mapObject from "./map-object";
import capitalize from "./capitalize";

export default mapObject(key => `bg${capitalize(key)}`, value => ({
  backgroundColor: value
}));
