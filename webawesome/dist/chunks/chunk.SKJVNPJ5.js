import {
  parseSpaceDelimitedTokens
} from "./chunk.X7ZOR63Z.js";
import {
  lockBodyScrolling,
  unlockBodyScrolling
} from "./chunk.DEPQQPSN.js";
import {
  WaAfterHideEvent,
  WaAfterShowEvent,
  WaHideEvent,
  WaShowEvent
} from "./chunk.HB3HJLIB.js";
import {
  HasSlotController
} from "./chunk.T4TBHMI6.js";
import {
  animateWithClass
} from "./chunk.XL72D5LO.js";
import {
  e as e2
} from "./chunk.EKCJVOUE.js";
import {
  LocalizeController
} from "./chunk.AOSYTJIV.js";
import {
  watch
} from "./chunk.H7JGFWVW.js";
import {
  WebAwesomeElement,
  e,
  n,
  o,
  t
} from "./chunk.K3NQCJAH.js";
import {
  x
} from "./chunk.IB44PGUJ.js";
import {
  __decorateClass
} from "./chunk.CLOX737Y.js";

// _bundle_/src/components/drawer/drawer.css
var drawer_default = ":host {\n  --size: 25rem;\n  --spacing: var(--wa-space-l);\n  --show-duration: 200ms;\n  --hide-duration: 200ms;\n\n  display: none;\n}\n\n:host([open]) {\n  display: block;\n}\n\n.drawer {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  inset-inline-start: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  background-color: var(--wa-color-surface-raised);\n  border: none;\n  box-shadow: var(--wa-shadow-l);\n  overflow: auto;\n  padding: 0;\n  margin: 0;\n  animation-duration: var(--show-duration);\n  animation-timing-function: ease;\n\n  &.show::backdrop {\n    animation: show-backdrop var(--show-duration, 200ms) ease;\n  }\n\n  &.hide::backdrop {\n    animation: show-backdrop var(--hide-duration, 200ms) ease reverse;\n  }\n\n  &.show.top {\n    animation: show-drawer-from-top var(--show-duration) ease;\n  }\n\n  &.hide.top {\n    animation: show-drawer-from-top var(--hide-duration) ease reverse;\n  }\n\n  &.show.end {\n    animation: show-drawer-from-end var(--show-duration) ease;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-start;\n    }\n  }\n\n  &.hide.end {\n    animation: show-drawer-from-end var(--hide-duration) ease reverse;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-start;\n    }\n  }\n\n  &.show.bottom {\n    animation: show-drawer-from-bottom var(--show-duration) ease;\n  }\n\n  &.hide.bottom {\n    animation: show-drawer-from-bottom var(--hide-duration) ease reverse;\n  }\n\n  &.show.start {\n    animation: show-drawer-from-start var(--show-duration) ease;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-end;\n    }\n  }\n\n  &.hide.start {\n    animation: show-drawer-from-start var(--hide-duration) ease reverse;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-end;\n    }\n  }\n\n  &.pulse {\n    animation: pulse 250ms ease;\n  }\n}\n\n.drawer:focus {\n  outline: none;\n}\n\n.top {\n  top: 0;\n  inset-inline-end: auto;\n  bottom: auto;\n  inset-inline-start: 0;\n  width: 100%;\n  height: var(--size);\n}\n\n.end {\n  top: 0;\n  inset-inline-end: 0;\n  bottom: auto;\n  inset-inline-start: auto;\n  width: var(--size);\n  height: 100%;\n}\n\n.bottom {\n  top: auto;\n  inset-inline-end: auto;\n  bottom: 0;\n  inset-inline-start: 0;\n  width: 100%;\n  height: var(--size);\n}\n\n.start {\n  top: 0;\n  inset-inline-end: auto;\n  bottom: auto;\n  inset-inline-start: 0;\n  width: var(--size);\n  height: 100%;\n}\n\n.header {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-inline-start: var(--spacing);\n  padding-block-end: 0;\n\n  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */\n  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));\n  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));\n}\n\n.title {\n  align-self: center;\n  flex: 1 1 auto;\n  font: inherit;\n  font-size: var(--wa-font-size-l);\n  font-weight: var(--wa-font-weight-heading);\n  line-height: var(--wa-line-height-condensed);\n  margin: 0;\n}\n\n.header-actions {\n  align-self: start;\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: end;\n  gap: var(--wa-space-2xs);\n  padding-inline-start: var(--spacing);\n}\n\n.header-actions wa-button,\n.header-actions ::slotted(wa-button) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n\n.body {\n  flex: 1 1 auto;\n  display: block;\n  padding: var(--spacing);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.footer {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--wa-space-xs);\n  justify-content: end;\n  padding: var(--spacing);\n  padding-block-start: 0;\n}\n\n.footer ::slotted(wa-button:not(:last-of-type)) {\n  margin-inline-end: var(--wa-spacing-xs);\n}\n\n.drawer::backdrop {\n  /*\n      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can\n      remove the fallback values here.\n    */\n  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));\n}\n\n@keyframes pulse {\n  0% {\n    scale: 1;\n  }\n  50% {\n    scale: 1.01;\n  }\n  100% {\n    scale: 1;\n  }\n}\n\n@keyframes show-drawer {\n  from {\n    opacity: 0;\n    scale: 0.8;\n  }\n  to {\n    opacity: 1;\n    scale: 1;\n  }\n}\n\n@keyframes show-drawer-from-top {\n  from {\n    opacity: 0;\n    translate: 0 -100%;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-drawer-from-end {\n  from {\n    opacity: 0;\n    translate: 100%;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-drawer-from-bottom {\n  from {\n    opacity: 0;\n    translate: 0 100%;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-drawer-from-start {\n  from {\n    opacity: 0;\n    translate: -100% 0;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-backdrop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@media (forced-colors: active) {\n  .drawer {\n    border: solid 1px white;\n  }\n}\n";

// _bundle_/src/components/drawer/drawer.ts
var WaDrawer = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.hasSlotController = new HasSlotController(this, "footer", "header-actions", "label");
    this.open = false;
    this.label = "";
    this.placement = "end";
    this.withoutHeader = false;
    this.lightDismiss = true;
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape" && this.open) {
        event.preventDefault();
        event.stopPropagation();
        this.requestClose(this.drawer);
      }
    };
  }
  firstUpdated() {
    if (o) {
      return;
    }
    if (this.open) {
      this.addOpenListeners();
      this.drawer.showModal();
      lockBodyScrolling(this);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
    this.removeOpenListeners();
  }
  async requestClose(source) {
    const waHideEvent = new WaHideEvent({ source });
    this.dispatchEvent(waHideEvent);
    if (waHideEvent.defaultPrevented) {
      this.open = true;
      animateWithClass(this.drawer, "pulse");
      return;
    }
    this.removeOpenListeners();
    await animateWithClass(this.drawer, "hide");
    this.open = false;
    this.drawer.close();
    unlockBodyScrolling(this);
    const trigger = this.originalTrigger;
    if (typeof trigger?.focus === "function") {
      setTimeout(() => trigger.focus());
    }
    this.dispatchEvent(new WaAfterHideEvent());
  }
  addOpenListeners() {
    document.addEventListener("keydown", this.handleDocumentKeyDown);
  }
  removeOpenListeners() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  handleDialogCancel(event) {
    event.preventDefault();
    if (!this.drawer.classList.contains("hide")) {
      this.requestClose(this.drawer);
    }
  }
  handleDialogClick(event) {
    const target = event.target;
    const button = target.closest('[data-drawer="close"]');
    if (button) {
      event.stopPropagation();
      this.requestClose(button);
    }
  }
  async handleDialogPointerDown(event) {
    if (event.target === this.drawer) {
      if (this.lightDismiss) {
        this.requestClose(this.drawer);
      } else {
        await animateWithClass(this.drawer, "pulse");
      }
    }
  }
  handleOpenChange() {
    if (this.open && !this.drawer.open) {
      this.show();
    } else if (this.drawer.open) {
      this.open = true;
      this.requestClose(this.drawer);
    }
  }
  /** Shows the drawer. */
  async show() {
    const waShowEvent = new WaShowEvent();
    this.dispatchEvent(waShowEvent);
    if (waShowEvent.defaultPrevented) {
      this.open = false;
      return;
    }
    this.addOpenListeners();
    this.originalTrigger = document.activeElement;
    this.open = true;
    this.drawer.showModal();
    lockBodyScrolling(this);
    requestAnimationFrame(() => {
      const elementToFocus = this.querySelector("[autofocus]");
      if (elementToFocus && typeof elementToFocus.focus === "function") {
        elementToFocus.focus();
      }
    });
    await animateWithClass(this.drawer, "show");
    this.dispatchEvent(new WaAfterShowEvent());
  }
  render() {
    const hasHeader = !this.withoutHeader;
    const hasFooter = this.hasSlotController.test("footer");
    return x`
      <dialog
        part="dialog"
        class=${e2({
      drawer: true,
      open: this.open,
      top: this.placement === "top",
      end: this.placement === "end",
      bottom: this.placement === "bottom",
      start: this.placement === "start"
    })}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${hasHeader ? x`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${(event) => this.requestClose(event.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            ` : ""}

        <div part="body" class="body"><slot></slot></div>

        ${hasFooter ? x`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            ` : ""}
      </dialog>
    `;
  }
};
WaDrawer.css = drawer_default;
__decorateClass([
  e(".drawer")
], WaDrawer.prototype, "drawer", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaDrawer.prototype, "open", 2);
__decorateClass([
  n({ reflect: true })
], WaDrawer.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], WaDrawer.prototype, "placement", 2);
__decorateClass([
  n({ attribute: "without-header", type: Boolean, reflect: true })
], WaDrawer.prototype, "withoutHeader", 2);
__decorateClass([
  n({ attribute: "light-dismiss", type: Boolean })
], WaDrawer.prototype, "lightDismiss", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], WaDrawer.prototype, "handleOpenChange", 1);
WaDrawer = __decorateClass([
  t("wa-drawer")
], WaDrawer);
document.addEventListener("click", (event) => {
  const drawerAttrEl = event.target.closest("[data-drawer]");
  if (drawerAttrEl instanceof Element) {
    const [command, id] = parseSpaceDelimitedTokens(drawerAttrEl.getAttribute("data-drawer") || "");
    if (command === "open" && id?.length) {
      const doc = drawerAttrEl.getRootNode();
      const drawer = doc.getElementById(id);
      if (drawer?.localName === "wa-drawer") {
        drawer.open = true;
      } else {
        console.warn(`A drawer with an ID of "${id}" could not be found in this document.`);
      }
    }
  }
});
if (!o) {
  document.body.addEventListener("pointerdown", () => {
  });
}

export {
  WaDrawer
};
