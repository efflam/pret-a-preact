import { css } from "glamor";
const space = (shorthand, property, scale, value) => ({
  [`${shorthand}${scale}`]: css({ [`${property}`]: value }),
  [`${shorthand}t${scale}`]: css({ [`${property}Top`]: value }),
  [`${shorthand}r${scale}`]: css({ [`${property}Right`]: value }),
  [`${shorthand}b${scale}`]: css({ [`${property}Bottom`]: value }),
  [`${shorthand}l${scale}`]: css({ [`${property}Left`]: value }),
  [`${shorthand}x${scale}`]: css({
    [`${property}Left`]: value,
    [`${property}Right`]: value
  }),
  [`${shorthand}y${scale}`]: css({
    [`${property}Top`]: value,
    [`${property}Bottom`]: value
  }),
  [`n${shorthand}${scale}`]: css({ [`${property}`]: -value }),
  [`n${shorthand}t${scale}`]: css({ [`${property}Top`]: -value }),
  [`n${shorthand}r${scale}`]: css({ [`${property}Right`]: -value }),
  [`n${shorthand}b${scale}`]: css({ [`${property}Bottom`]: -value }),
  [`n${shorthand}l${scale}`]: css({ [`${property}Left`]: -value }),
  [`n${shorthand}x${scale}`]: css({
    [`${property}Left`]: -value,
    [`${property}Right`]: -value
  }),
  [`n${shorthand}y${scale}`]: css({
    [`${property}Top`]: -value,
    [`${property}Bottom`]: value
  })
});

export default values => ({
  ...values.reduce(
    (result, value, i) => ({
      ...result,
      ...space("p", "padding", i, value),
      ...space("m", "margin", i, value)
    }),
    {}
  ),
  mxauto: css({ marginLeft: "auto", marginRight: "auto" })
});
