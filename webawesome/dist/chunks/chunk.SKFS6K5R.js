import {
  watch
} from "./chunk.H7JGFWVW.js";
import {
  WebAwesomeElement,
  n,
  t
} from "./chunk.K3NQCJAH.js";
import {
  __decorateClass
} from "./chunk.CLOX737Y.js";

// _bundle_/src/components/divider/divider.css
var divider_default = ":host {\n  --color: var(--wa-color-surface-border);\n  --width: var(--wa-border-width-s);\n  --spacing: var(--wa-space-m);\n}\n\n:host(:not([orientation='vertical'])) {\n  display: block;\n  border-top: solid var(--width) var(--color);\n  margin: var(--spacing) 0;\n}\n\n:host([orientation='vertical']) {\n  display: inline-block;\n  height: 100%;\n  border-inline-start: solid var(--width) var(--color);\n  margin: 0 var(--spacing);\n  min-block-size: 1lh;\n}\n";

// _bundle_/src/components/divider/divider.ts
var WaDivider = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.orientation = "horizontal";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.orientation);
  }
};
WaDivider.css = divider_default;
__decorateClass([
  n({ reflect: true })
], WaDivider.prototype, "orientation", 2);
__decorateClass([
  watch("orientation")
], WaDivider.prototype, "handleVerticalChange", 1);
WaDivider = __decorateClass([
  t("wa-divider")
], WaDivider);

export {
  WaDivider
};
