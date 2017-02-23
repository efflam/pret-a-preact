import { css } from "glamor";
import mapObject from "./map-object";

export default mapObject(color => `${color}`, color => ({ color }));
