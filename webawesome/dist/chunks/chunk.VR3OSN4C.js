import {
  o,
  require_react
} from "./chunk.JTWJFQSS.js";
import {
  WaDialog
} from "./chunk.WSB37Z2A.js";
import {
  __toESM
} from "./chunk.CLOX737Y.js";

// _bundle_/src/react/dialog/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-dialog";
var reactWrapper = o({
  tagName,
  elementClass: WaDialog,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide"
  },
  displayName: "WaDialog"
});
var dialog_default = reactWrapper;

export {
  dialog_default
};
