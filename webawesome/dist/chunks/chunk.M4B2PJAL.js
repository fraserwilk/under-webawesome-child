import {
  o,
  require_react
} from "./chunk.JTWJFQSS.js";
import {
  WaColorPicker
} from "./chunk.3YTQGEFN.js";
import {
  __toESM
} from "./chunk.CLOX737Y.js";

// _bundle_/src/react/color-picker/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-color-picker";
var reactWrapper = o({
  tagName,
  elementClass: WaColorPicker,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide",
    onWaInvalid: "wa-invalid"
  },
  displayName: "WaColorPicker"
});
var color_picker_default = reactWrapper;

export {
  color_picker_default
};
