import {
  watch
} from "./chunk.H7JGFWVW.js";
import {
  WebAwesomeElement,
  n,
  t
} from "./chunk.K3NQCJAH.js";
import {
  x
} from "./chunk.IB44PGUJ.js";
import {
  __decorateClass
} from "./chunk.CLOX737Y.js";

// _bundle_/src/events/mutation.ts
var WaMutationEvent = class extends Event {
  constructor(detail) {
    super("wa-mutation", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};

// _bundle_/src/components/mutation-observer/mutation-observer.css
var mutation_observer_default = ":host {\n  display: contents;\n}\n";

// _bundle_/src/components/mutation-observer/mutation-observer.ts
var WaMutationObserver = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.attrOldValue = false;
    this.charData = false;
    this.charDataOldValue = false;
    this.childList = false;
    this.disabled = false;
    this.handleMutation = (mutationList) => {
      this.dispatchEvent(new WaMutationEvent({ mutationList }));
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (typeof MutationObserver !== "undefined") {
      this.mutationObserver = new MutationObserver(this.handleMutation);
      if (!this.disabled) {
        this.startObserver();
      }
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  startObserver() {
    const observeAttributes = typeof this.attr === "string" && this.attr.length > 0;
    const attributeFilter = observeAttributes && this.attr !== "*" ? this.attr.split(" ") : void 0;
    try {
      this.mutationObserver.observe(this, {
        subtree: true,
        childList: this.childList,
        attributes: observeAttributes,
        attributeFilter,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue
      });
    } catch {
    }
  }
  stopObserver() {
    this.mutationObserver.disconnect();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  handleChange() {
    this.stopObserver();
    this.startObserver();
  }
  render() {
    return x` <slot></slot> `;
  }
};
WaMutationObserver.css = mutation_observer_default;
__decorateClass([
  n({ reflect: true })
], WaMutationObserver.prototype, "attr", 2);
__decorateClass([
  n({ attribute: "attr-old-value", type: Boolean, reflect: true })
], WaMutationObserver.prototype, "attrOldValue", 2);
__decorateClass([
  n({ attribute: "char-data", type: Boolean, reflect: true })
], WaMutationObserver.prototype, "charData", 2);
__decorateClass([
  n({ attribute: "char-data-old-value", type: Boolean, reflect: true })
], WaMutationObserver.prototype, "charDataOldValue", 2);
__decorateClass([
  n({ attribute: "child-list", type: Boolean, reflect: true })
], WaMutationObserver.prototype, "childList", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaMutationObserver.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], WaMutationObserver.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("attr", { waitUntilFirstUpdate: true }),
  watch("attr-old-value", { waitUntilFirstUpdate: true }),
  watch("char-data", { waitUntilFirstUpdate: true }),
  watch("char-data-old-value", { waitUntilFirstUpdate: true }),
  watch("childList", { waitUntilFirstUpdate: true })
], WaMutationObserver.prototype, "handleChange", 1);
WaMutationObserver = __decorateClass([
  t("wa-mutation-observer")
], WaMutationObserver);

export {
  WaMutationObserver
};
