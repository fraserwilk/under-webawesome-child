import {
  HasSlotController
} from "./chunk.T4TBHMI6.js";
import {
  animateWithClass
} from "./chunk.XL72D5LO.js";
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

// _bundle_/src/components/dropdown-item/dropdown-item.css
var dropdown_item_default = ":host {\n  display: flex;\n  position: relative;\n  align-items: center;\n  padding: 0.5em 1em;\n  border-radius: var(--wa-border-radius-s);\n  isolation: isolate;\n  color: var(--wa-color-text-normal);\n  line-height: var(--wa-line-height-condensed);\n  cursor: pointer;\n  transition:\n    100ms background-color ease,\n    100ms color ease;\n}\n\n@media (hover: hover) {\n  :host(:hover:not(:state(disabled))) {\n    background-color: var(--wa-color-neutral-fill-normal);\n  }\n}\n\n:host(:focus-visible) {\n  z-index: 1;\n  outline: var(--wa-focus-ring);\n  background-color: var(--wa-color-neutral-fill-normal);\n}\n\n:host(:state(disabled)) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* Danger variant */\n:host([variant='danger']),\n:host([variant='danger']) #details {\n  color: var(--wa-color-danger-on-quiet);\n}\n\n@media (hover: hover) {\n  :host([variant='danger']:hover) {\n    background-color: var(--wa-color-danger-fill-normal);\n    color: var(--wa-color-danger-on-normal);\n  }\n}\n\n:host([variant='danger']:focus-visible) {\n  background-color: var(--wa-color-danger-fill-normal);\n  color: var(--wa-color-danger-on-normal);\n}\n\n:host([checkbox-adjacent]) {\n  padding-inline-start: 2em;\n}\n\n/* Only add padding when item actually has a submenu */\n:host([submenu-adjacent]:not(:state(has-submenu))) #details {\n  padding-inline-end: 0;\n}\n\n:host(:state(has-submenu)[submenu-adjacent]) #details {\n  padding-inline-end: 1.75em;\n}\n\n#check {\n  visibility: hidden;\n  margin-inline-start: -1.5em;\n  margin-inline-end: 0.5em;\n  font-size: var(--wa-font-size-smaller);\n}\n\n:host(:state(checked)) #check {\n  visibility: visible;\n}\n\n#icon ::slotted(*) {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  margin-inline-end: 0.75em !important;\n  font-size: var(--wa-font-size-smaller);\n}\n\n#label {\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#details {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: end;\n  color: var(--wa-color-text-quiet);\n  font-size: var(--wa-font-size-smaller) !important;\n}\n\n#details ::slotted(*) {\n  margin-inline-start: 2em !important;\n}\n\n/* Submenu indicator icon */\n#submenu-indicator {\n  position: absolute;\n  inset-inline-end: 1em;\n  color: var(--wa-color-neutral-on-quiet);\n  font-size: var(--wa-font-size-smaller);\n}\n\n/* Flip chevron icon when RTL */\n:host(:dir(rtl)) #submenu-indicator {\n  transform: scaleX(-1);\n}\n\n/* Submenu styles */\n#submenu {\n  display: flex;\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  width: max-content;\n  margin: 0;\n  padding: 0.25em;\n  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);\n  border-radius: var(--wa-border-radius-m);\n  background-color: var(--wa-color-surface-raised);\n  box-shadow: var(--wa-shadow-m);\n  color: var(--wa-color-text-normal);\n  text-align: start;\n  user-select: none;\n\n  /* Override default popover styles */\n  &[popover] {\n    margin: 0;\n    inset: auto;\n    padding: 0.25em;\n    overflow: visible;\n    border-radius: var(--wa-border-radius-m);\n  }\n\n  &.show {\n    animation: submenu-show var(--show-duration, 50ms) ease;\n  }\n\n  &.hide {\n    animation: submenu-show var(--show-duration, 50ms) ease reverse;\n  }\n\n  /* Submenu placement transform origins */\n  &[data-placement^='top'] {\n    transform-origin: bottom;\n  }\n\n  &[data-placement^='bottom'] {\n    transform-origin: top;\n  }\n\n  &[data-placement^='left'] {\n    transform-origin: right;\n  }\n\n  &[data-placement^='right'] {\n    transform-origin: left;\n  }\n\n  &[data-placement='left-start'] {\n    transform-origin: right top;\n  }\n\n  &[data-placement='left-end'] {\n    transform-origin: right bottom;\n  }\n\n  &[data-placement='right-start'] {\n    transform-origin: left top;\n  }\n\n  &[data-placement='right-end'] {\n    transform-origin: left bottom;\n  }\n\n  /* Safe triangle styling */\n  &::before {\n    display: none;\n    z-index: 9;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: transparent;\n    content: '';\n    clip-path: polygon(\n      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),\n      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),\n      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)\n    );\n    pointer-events: auto; /* Enable mouse events on the triangle */\n  }\n\n  &[data-visible]::before {\n    display: block;\n  }\n}\n\n::slotted(wa-dropdown-item) {\n  font-size: inherit;\n}\n\n::slotted(wa-divider) {\n  --spacing: 0.25em;\n}\n\n@keyframes submenu-show {\n  from {\n    scale: 0.9;\n    opacity: 0;\n  }\n  to {\n    scale: 1;\n    opacity: 1;\n  }\n}\n";

// _bundle_/src/components/dropdown-item/dropdown-item.ts
var WaDropdownItem = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "[default]", "start", "end");
    this.active = false;
    this.variant = "default";
    this.size = "medium";
    this.checkboxAdjacent = false;
    this.submenuAdjacent = false;
    this.type = "normal";
    this.checked = false;
    this.disabled = false;
    this.submenuOpen = false;
    this.hasSubmenu = false;
    this.handleSlotChange = () => {
      this.hasSubmenu = this.hasSlotController.test("submenu");
      this.updateHasSubmenuState();
      if (this.hasSubmenu) {
        this.setAttribute("aria-haspopup", "menu");
        this.setAttribute("aria-expanded", this.submenuOpen ? "true" : "false");
      } else {
        this.removeAttribute("aria-haspopup");
        this.removeAttribute("aria-expanded");
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("mouseenter", this.handleMouseEnter.bind(this));
    this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.closeSubmenu();
    this.removeEventListener("mouseenter", this.handleMouseEnter);
    this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
  firstUpdated() {
    this.setAttribute("tabindex", "-1");
    this.hasSubmenu = this.hasSlotController.test("submenu");
    this.updateHasSubmenuState();
  }
  updated(changedProperties) {
    if (changedProperties.has("active")) {
      this.setAttribute("tabindex", this.active ? "0" : "-1");
      this.customStates.set("active", this.active);
    }
    if (changedProperties.has("checked")) {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
      this.customStates.set("checked", this.checked);
    }
    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("type")) {
      if (this.type === "checkbox") {
        this.setAttribute("role", "menuitemcheckbox");
      } else {
        this.setAttribute("role", "menuitem");
      }
    }
    if (changedProperties.has("submenuOpen")) {
      this.customStates.set("submenu-open", this.submenuOpen);
      if (this.submenuOpen) {
        this.openSubmenu();
      } else {
        this.closeSubmenu();
      }
    }
  }
  /** Update the has-submenu custom state */
  updateHasSubmenuState() {
    this.customStates.set("has-submenu", this.hasSubmenu);
  }
  /** Opens the submenu. */
  async openSubmenu() {
    if (!this.hasSubmenu || !this.submenuElement) return;
    this.notifyParentOfOpening();
    this.submenuElement.showPopover();
    this.submenuElement.hidden = false;
    this.submenuElement.setAttribute("data-visible", "");
    this.submenuOpen = true;
    this.setAttribute("aria-expanded", "true");
    await animateWithClass(this.submenuElement, "show");
    setTimeout(() => {
      const items = this.getSubmenuItems();
      if (items.length > 0) {
        items.forEach((item, index) => item.active = index === 0);
        items[0].focus();
      }
    }, 0);
  }
  /** Notifies the parent dropdown that this item is opening its submenu */
  notifyParentOfOpening() {
    const event = new CustomEvent("submenu-opening", {
      bubbles: true,
      composed: true,
      detail: { item: this }
    });
    this.dispatchEvent(event);
    const parent = this.parentElement;
    if (parent) {
      const siblings = [...parent.children].filter(
        (el) => el !== this && el.localName === "wa-dropdown-item" && el.getAttribute("slot") === this.getAttribute("slot") && el.submenuOpen
      );
      siblings.forEach((sibling) => {
        sibling.submenuOpen = false;
      });
    }
  }
  /** Closes the submenu. */
  async closeSubmenu() {
    if (!this.hasSubmenu || !this.submenuElement) return;
    this.submenuOpen = false;
    this.setAttribute("aria-expanded", "false");
    if (!this.submenuElement.hidden) {
      await animateWithClass(this.submenuElement, "hide");
      this.submenuElement.hidden = true;
      this.submenuElement.removeAttribute("data-visible");
      this.submenuElement.hidePopover();
    }
  }
  /** Gets all dropdown items in the submenu. */
  getSubmenuItems() {
    return [...this.children].filter(
      (el) => el.localName === "wa-dropdown-item" && el.getAttribute("slot") === "submenu" && !el.hasAttribute("disabled")
    );
  }
  /** Handles mouse enter to open the submenu */
  handleMouseEnter() {
    if (this.hasSubmenu && !this.disabled) {
      this.notifyParentOfOpening();
      this.submenuOpen = true;
    }
  }
  render() {
    return x`
      ${this.type === "checkbox" ? x`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          ` : ""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu ? x`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          ` : ""}
      ${this.hasSubmenu ? x`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          ` : ""}
    `;
  }
};
WaDropdownItem.css = dropdown_item_default;
__decorateClass([
  e("#submenu")
], WaDropdownItem.prototype, "submenuElement", 2);
__decorateClass([
  n({ type: Boolean })
], WaDropdownItem.prototype, "active", 2);
__decorateClass([
  n({ reflect: true })
], WaDropdownItem.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], WaDropdownItem.prototype, "size", 2);
__decorateClass([
  n({ attribute: "checkbox-adjacent", type: Boolean, reflect: true })
], WaDropdownItem.prototype, "checkboxAdjacent", 2);
__decorateClass([
  n({ attribute: "submenu-adjacent", type: Boolean, reflect: true })
], WaDropdownItem.prototype, "submenuAdjacent", 2);
__decorateClass([
  n()
], WaDropdownItem.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], WaDropdownItem.prototype, "type", 2);
__decorateClass([
  n({ type: Boolean })
], WaDropdownItem.prototype, "checked", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaDropdownItem.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaDropdownItem.prototype, "submenuOpen", 2);
__decorateClass([
  r()
], WaDropdownItem.prototype, "hasSubmenu", 2);
WaDropdownItem = __decorateClass([
  t("wa-dropdown-item")
], WaDropdownItem);

export {
  WaDropdownItem
};
