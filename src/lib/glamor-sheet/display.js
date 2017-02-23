import camelcase from "./camelcase";
import mapArrayToObject from "./map-array-to-object";

const values = [
  "inline",
  "inline-block",
  "block",
  "flex",
  "table",
  "table-cell"
];

const displayRules = mapArrayToObject(value => camelcase(value), value => ({
  display: value
}))(values);


export default displayRules;
