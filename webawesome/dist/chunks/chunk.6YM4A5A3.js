import {
  WaPopup
} from "./chunk.HLOS4YXL.js";
import {
  WaAfterHideEvent,
  WaAfterShowEvent,
  WaHideEvent,
  WaShowEvent
} from "./chunk.HB3HJLIB.js";
import {
  uniqueId
} from "./chunk.P4RF2EOP.js";
import {
  waitForEvent
} from "./chunk.GCQZYQ5P.js";
import {
  animateWithClass
} from "./chunk.XL72D5LO.js";
import {
  e as e2
} from "./chunk.EKCJVOUE.js";
import {
  watch
} from "./chunk.H7JGFWVW.js";
import {
  WebAwesomeElement,
  e,
  n,
  r,
  t
} from "./chunk.K3NQCJAH.js";
import {
  x
} from "./chunk.IB44PGUJ.js";
import {
  __decorateClass
} from "./chunk.CLOX737Y.js";

// _bundle_/src/components/tooltip/tooltip.css
var tooltip_default = ":host {\n  --max-width: 30ch;\n\n  /** These styles are added so we don't interfere in the DOM. */\n  display: inline-block;\n  position: absolute;\n\n  /** Defaults for inherited CSS properties */\n  color: var(--wa-tooltip-content-color);\n  font-size: var(--wa-tooltip-font-size);\n  line-height: var(--wa-tooltip-line-height);\n  text-align: start;\n  white-space: normal;\n}\n\n.tooltip {\n  --arrow-size: var(--wa-tooltip-arrow-size);\n  --arrow-color: var(--wa-tooltip-background-color);\n}\n\n.tooltip::part(popup) {\n  z-index: 1000;\n}\n\n.tooltip[placement^='top']::part(popup) {\n  transform-origin: bottom;\n}\n\n.tooltip[placement^='bottom']::part(popup) {\n  transform-origin: top;\n}\n\n.tooltip[placement^='left']::part(popup) {\n  transform-origin: right;\n}\n\n.tooltip[placement^='right']::part(popup) {\n  transform-origin: left;\n}\n\n.body {\n  display: block;\n  width: max-content;\n  max-width: var(--max-width);\n  border-radius: var(--wa-tooltip-border-radius);\n  background-color: var(--wa-tooltip-background-color);\n  border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);\n  padding: 0.25em 0.5em;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.tooltip::part(arrow) {\n  border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);\n  border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);\n}\n";

// _bundle_/src/components/tooltip/tooltip.ts
var WaTooltip = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.placement = "top";
    this.disabled = false;
    this.distance = 8;
    this.open = false;
    this.skidding = 0;
    this.showDelay = 150;
    this.hideDelay = 0;
    this.trigger = "hover focus";
    this.withoutArrow = false;
    this.for = null;
    this.anchor = null;
    this.eventController = new AbortController();
    this.handleBlur = () => {
      if (this.hasTrigger("focus")) {
        this.hide();
      }
    };
    this.handleClick = () => {
      if (this.hasTrigger("click")) {
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
      }
    };
    this.handleFocus = () => {
      if (this.hasTrigger("focus")) {
        this.show();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        this.hide();
      }
    };
    this.handleMouseOver = () => {
      if (this.hasTrigger("hover")) {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.show(), this.showDelay);
      }
    };
    this.handleMouseOut = () => {
      if (this.hasTrigger("hover")) {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.hide(), this.hideDelay);
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.open) {
      this.open = false;
      this.updateComplete.then(() => {
        this.open = true;
      });
    }
    if (!this.id) {
      this.id = uniqueId("wa-tooltip-");
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    this.eventController.abort();
    if (this.anchor) {
      const label = this.anchor.getAttribute("aria-labelledby") || "";
      this.anchor.setAttribute("aria-labelledby", label.replace(this.id, ""));
    }
  }
  firstUpdated() {
    this.body.hidden = !this.open;
    if (this.open) {
      this.popup.active = true;
      this.popup.reposition();
    }
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  async handleOpenChange() {
    if (this.open) {
      if (this.disabled) {
        return;
      }
      const waShowEvent = new WaShowEvent();
      this.dispatchEvent(waShowEvent);
      if (waShowEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      document.addEventListener("keydown", this.handleDocumentKeyDown, { signal: this.eventController.signal });
      this.body.hidden = false;
      this.popup.active = true;
      await animateWithClass(this.popup.popup, "show-with-scale");
      this.popup.reposition();
      this.dispatchEvent(new WaAfterShowEvent());
    } else {
      const waHideEvent = new WaHideEvent();
      this.dispatchEvent(waHideEvent);
      if (waHideEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      await animateWithClass(this.popup.popup, "hide-with-scale");
      this.popup.active = false;
      this.body.hidden = true;
      this.dispatchEvent(new WaAfterHideEvent());
    }
  }
  handleForChange() {
    const rootNode = this.getRootNode();
    if (!rootNode) {
      return;
    }
    const newAnchor = this.for ? rootNode.querySelector(`#${this.for}`) : null;
    const oldAnchor = this.anchor;
    if (newAnchor === oldAnchor) {
      return;
    }
    const { signal } = this.eventController;
    const labelRegex = new RegExp(`\\b${this.id}\\b`);
    if (newAnchor) {
      const currentLabel = newAnchor.getAttribute("aria-labelledby") || "";
      if (!currentLabel.match(labelRegex)) {
        newAnchor.setAttribute("aria-labelledby", currentLabel + " " + this.id);
      }
      newAnchor.addEventListener("blur", this.handleBlur, { capture: true, signal });
      newAnchor.addEventListener("focus", this.handleFocus, { capture: true, signal });
      newAnchor.addEventListener("click", this.handleClick, { signal });
      newAnchor.addEventListener("mouseover", this.handleMouseOver, { signal });
      newAnchor.addEventListener("mouseout", this.handleMouseOut, { signal });
    }
    if (oldAnchor) {
      const label = oldAnchor.getAttribute("aria-labelledby") || "";
      oldAnchor.setAttribute("aria-labelledby", label.replace(labelRegex, ""));
      oldAnchor.removeEventListener("blur", this.handleBlur, { capture: true });
      oldAnchor.removeEventListener("focus", this.handleFocus, { capture: true });
      oldAnchor.removeEventListener("click", this.handleClick);
      oldAnchor.removeEventListener("mouseover", this.handleMouseOver);
      oldAnchor.removeEventListener("mouseout", this.handleMouseOut);
    }
    this.anchor = newAnchor;
  }
  async handleOptionsChange() {
    if (this.hasUpdated) {
      await this.updateComplete;
      this.popup.reposition();
    }
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }
  /** Shows the tooltip. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "wa-after-show");
  }
  /** Hides the tooltip */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "wa-after-hide");
  }
  render() {
    return x`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${e2({
      tooltip: true,
      "tooltip-open": this.open
    })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `;
  }
};
WaTooltip.css = tooltip_default;
WaTooltip.dependencies = { "wa-popup": WaPopup };
__decorateClass([
  e("slot:not([name])")
], WaTooltip.prototype, "defaultSlot", 2);
__decorateClass([
  e(".body")
], WaTooltip.prototype, "body", 2);
__decorateClass([
  e("wa-popup")
], WaTooltip.prototype, "popup", 2);
__decorateClass([
  n()
], WaTooltip.prototype, "placement", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaTooltip.prototype, "disabled", 2);
__decorateClass([
  n({ type: Number })
], WaTooltip.prototype, "distance", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaTooltip.prototype, "open", 2);
__decorateClass([
  n({ type: Number })
], WaTooltip.prototype, "skidding", 2);
__decorateClass([
  n({ attribute: "show-delay", type: Number })
], WaTooltip.prototype, "showDelay", 2);
__decorateClass([
  n({ attribute: "hide-delay", type: Number })
], WaTooltip.prototype, "hideDelay", 2);
__decorateClass([
  n()
], WaTooltip.prototype, "trigger", 2);
__decorateClass([
  n({ attribute: "without-arrow", type: Boolean, reflect: true })
], WaTooltip.prototype, "withoutArrow", 2);
__decorateClass([
  n()
], WaTooltip.prototype, "for", 2);
__decorateClass([
  r()
], WaTooltip.prototype, "anchor", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], WaTooltip.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("for")
], WaTooltip.prototype, "handleForChange", 1);
__decorateClass([
  watch(["distance", "placement", "skidding"])
], WaTooltip.prototype, "handleOptionsChange", 1);
__decorateClass([
  watch("disabled")
], WaTooltip.prototype, "handleDisabledChange", 1);
WaTooltip = __decorateClass([
  t("wa-tooltip")
], WaTooltip);

export {
  WaTooltip
};
