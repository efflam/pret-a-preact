import camelcase from "./camelcase";
import mapArrayToObject from "./map-array-to-object";

const values = ["fixed", "absolute", "relative", "static"];

const positionRules = mapArrayToObject(value => camelcase(value), value => ({
  position: value
}))(values);

export default {
  ...positionRules,
  top: { top: 0 },
  right: { right: 0 },
  bottom: { bottom: 0 },
  left: { left: 0 }
};
