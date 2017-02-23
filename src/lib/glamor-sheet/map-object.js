import { css } from "glamor";

export default (mapKey, mapValue) => object => Object.keys(object).reduce(
  (output, key, i) => ({
    ...output,
    [mapKey(key)]: css(mapValue(object[key]))
  }),
  {}
);
