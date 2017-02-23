import { media } from "glamor";

const names = ["s", "m", "l", "xl", "xxl", "xxxl"];

const mapArrayToObject = (mapKey, mapValue) => values => values.reduce(
  (output, value, index) => ({
    ...output,
    [mapKey(value, index)]: mapValue(value)
  }),
  {}
);

export default mapArrayToObject((value, index) => names[index], value =>
  (...rules) => media(value, rules));
