import { css } from "glamor";

export default (mapKey, mapValue) => values => values.reduce(
  (output, value, index) => ({
    ...output,
    [mapKey(value, index)]: css(mapValue(value))
  }),
  {}
);
