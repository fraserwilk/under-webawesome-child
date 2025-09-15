import {
  parseSpaceDelimitedTokens
} from "./chunk.X7ZOR63Z.js";
import {
  o
} from "./chunk.JPMWQ76C.js";
import {
  LocalizeController
} from "./chunk.AOSYTJIV.js";
import {
  WebAwesomeElement,
  e,
  n,
  t
} from "./chunk.K3NQCJAH.js";
import {
  x
} from "./chunk.IB44PGUJ.js";
import {
  __decorateClass
} from "./chunk.CLOX737Y.js";

// _bundle_/src/components/zoomable-frame/zoomable-frame.css
var zoomable_frame_default = ":host {\n  display: block;\n  position: relative;\n  aspect-ratio: 16 / 9;\n  width: 100%;\n  overflow: hidden;\n  border-radius: var(--wa-border-radius-m);\n}\n\n#frame-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(100% / var(--zoom));\n  height: calc(100% / var(--zoom));\n  transform: scale(var(--zoom));\n  transform-origin: 0 0;\n}\n\n#iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-radius: inherit;\n  /* Prevent the iframe from being selected, e.g. by a double click. Doesn't affect selection withing the iframe. */\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n#controls {\n  display: flex;\n  position: absolute;\n  bottom: 0.5em;\n  align-items: center;\n  font-weight: var(--wa-font-weight-semibold);\n  padding: 0.25em 0.5em;\n  gap: 0.5em;\n  border-radius: var(--wa-border-radius-s);\n  background: #000b;\n  color: white;\n  font-size: min(12px, 0.75em);\n  user-select: none;\n  -webkit-user-select: none;\n\n  &:dir(ltr) {\n    right: 0.5em;\n  }\n\n  &:dir(rtl) {\n    left: 0.5em;\n  }\n\n  button {\n    display: flex;\n    align-items: center;\n    padding: 0.25em;\n    border: none;\n    background: none;\n    color: inherit;\n    cursor: pointer;\n\n    &:focus {\n      outline: none;\n    }\n\n    &:focus-visible {\n      outline: var(--wa-focus-ring);\n      outline-offset: var(--wa-focus-ring-offset);\n    }\n\n    &:disabled {\n      cursor: not-allowed;\n      opacity: 0.5;\n    }\n  }\n\n  span {\n    min-width: 4.5ch; /* extra space so numbers don't shift */\n    font-variant-numeric: tabular-nums;\n    text-align: center;\n  }\n}\n";

// _bundle_/src/components/zoomable-frame/zoomable-frame.ts
var WaZoomableFrame = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.availableZoomLevels = [];
    this.allowfullscreen = false;
    this.loading = "eager";
    this.zoom = 1;
    this.zoomLevels = "25% 50% 75% 100% 125% 150% 175% 200%";
    this.withoutControls = false;
    this.withoutInteraction = false;
  }
  /** Returns the internal iframe's `window` object. (Readonly property) */
  get contentWindow() {
    return this.iframe?.contentWindow || null;
  }
  /** Returns the internal iframe's `document` object. (Readonly property) */
  get contentDocument() {
    return this.iframe?.contentDocument || null;
  }
  parseZoomLevels(zoomLevelsString) {
    const tokens = parseSpaceDelimitedTokens(zoomLevelsString);
    const levels = [];
    for (const token of tokens) {
      let value;
      if (token.endsWith("%")) {
        const percentage = parseFloat(token.slice(0, -1));
        if (!isNaN(percentage)) {
          value = Math.max(0, percentage / 100);
        } else {
          continue;
        }
      } else {
        value = parseFloat(token);
        if (!isNaN(value)) {
          value = Math.max(0, value);
        } else {
          continue;
        }
      }
      levels.push(value);
    }
    return [...new Set(levels)].sort((a, b) => a - b);
  }
  getCurrentZoomIndex() {
    if (this.availableZoomLevels.length === 0) return -1;
    let closestIndex = 0;
    let closestDiff = Math.abs(this.availableZoomLevels[0] - this.zoom);
    for (let i = 1; i < this.availableZoomLevels.length; i++) {
      const diff = Math.abs(this.availableZoomLevels[i] - this.zoom);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestIndex = i;
      }
    }
    return closestIndex;
  }
  isZoomInDisabled() {
    if (this.availableZoomLevels.length === 0) return false;
    const currentIndex = this.getCurrentZoomIndex();
    return currentIndex >= this.availableZoomLevels.length - 1;
  }
  isZoomOutDisabled() {
    if (this.availableZoomLevels.length === 0) return false;
    const currentIndex = this.getCurrentZoomIndex();
    return currentIndex <= 0;
  }
  updated(changedProperties) {
    if (changedProperties.has("zoom")) {
      this.style.setProperty("--zoom", `${this.zoom}`);
    }
    if (changedProperties.has("zoomLevels")) {
      this.availableZoomLevels = this.parseZoomLevels(this.zoomLevels);
      if (this.availableZoomLevels.length > 0) {
        const currentIndex = this.getCurrentZoomIndex();
        if (Math.abs(this.availableZoomLevels[currentIndex] - this.zoom) > 1e-3) {
          this.zoom = this.availableZoomLevels[currentIndex];
        }
      }
    }
  }
  /** Zooms in to the next available zoom level. */
  zoomIn() {
    if (this.availableZoomLevels.length === 0) {
      this.zoom = Math.min(this.zoom + 0.05, 2);
      return;
    }
    const currentIndex = this.getCurrentZoomIndex();
    if (currentIndex < this.availableZoomLevels.length - 1) {
      this.zoom = this.availableZoomLevels[currentIndex + 1];
    }
  }
  /** Zooms out to the previous available zoom level. */
  zoomOut() {
    if (this.availableZoomLevels.length === 0) {
      this.zoom = Math.max(this.zoom - 0.05, 0);
      return;
    }
    const currentIndex = this.getCurrentZoomIndex();
    if (currentIndex > 0) {
      this.zoom = this.availableZoomLevels[currentIndex - 1];
    }
  }
  handleLoad() {
    this.dispatchEvent(new Event("load", { bubbles: false, cancelable: false, composed: true }));
  }
  handleError() {
    this.dispatchEvent(new Event("error", { bubbles: false, cancelable: false, composed: true }));
  }
  render() {
    return x`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${o(this.sandbox ?? void 0)}
          src=${o(this.src ?? void 0)}
          srcdoc=${o(this.srcdoc ?? void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${!this.withoutControls ? x`
            <div id="controls" part="controls">
              <button
                part="zoom-out-button"
                aria-label=${this.localize.term("zoomOut")}
                @click=${this.zoomOut}
                ?disabled=${this.isZoomOutDisabled()}
              >
                <slot name="zoom-out-icon">
                  <wa-icon name="minus" label="Zoom out"></wa-icon>
                </slot>
              </button>
              <span>${this.localize.number(this.zoom, { style: "percent", maximumFractionDigits: 1 })}</span>
              <button
                part="zoom-in-button"
                aria-label=${this.localize.term("zoomIn")}
                @click=${this.zoomIn}
                ?disabled=${this.isZoomInDisabled()}
              >
                <slot name="zoom-in-icon">
                  <wa-icon name="plus" label="Zoom in"></wa-icon>
                </slot>
              </button>
            </div>
          ` : ""}
    `;
  }
};
WaZoomableFrame.css = zoomable_frame_default;
__decorateClass([
  e("#iframe")
], WaZoomableFrame.prototype, "iframe", 2);
__decorateClass([
  n()
], WaZoomableFrame.prototype, "src", 2);
__decorateClass([
  n()
], WaZoomableFrame.prototype, "srcdoc", 2);
__decorateClass([
  n({ type: Boolean })
], WaZoomableFrame.prototype, "allowfullscreen", 2);
__decorateClass([
  n()
], WaZoomableFrame.prototype, "loading", 2);
__decorateClass([
  n()
], WaZoomableFrame.prototype, "referrerpolicy", 2);
__decorateClass([
  n()
], WaZoomableFrame.prototype, "sandbox", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], WaZoomableFrame.prototype, "zoom", 2);
__decorateClass([
  n({ attribute: "zoom-levels" })
], WaZoomableFrame.prototype, "zoomLevels", 2);
__decorateClass([
  n({ type: Boolean, attribute: "without-controls", reflect: true })
], WaZoomableFrame.prototype, "withoutControls", 2);
__decorateClass([
  n({ type: Boolean, attribute: "without-interaction", reflect: true })
], WaZoomableFrame.prototype, "withoutInteraction", 2);
WaZoomableFrame = __decorateClass([
  t("wa-zoomable-frame")
], WaZoomableFrame);

export {
  WaZoomableFrame
};
