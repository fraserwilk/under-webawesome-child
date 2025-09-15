import {
  o,
  require_react
} from "./chunk.JTWJFQSS.js";
import {
  WaSelect
} from "./chunk.QE7W4JRH.js";
import {
  __toESM
} from "./chunk.CLOX737Y.js";

// _bundle_/src/react/select/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-select";
var reactWrapper = o({
  tagName,
  elementClass: WaSelect,
  react: React,
  events: {
    onWaClear: "wa-clear",
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide",
    onWaInvalid: "wa-invalid"
  },
  displayName: "WaSelect"
});
var select_default = reactWrapper;

export {
  select_default
};
