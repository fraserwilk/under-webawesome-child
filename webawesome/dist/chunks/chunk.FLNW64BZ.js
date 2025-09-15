import {
  submitOnEnter
} from "./chunk.QSXLOS25.js";
import {
  form_control_default
} from "./chunk.SHIZWSNB.js";
import {
  DraggableElement
} from "./chunk.2WFAH4SW.js";
import {
  WebAwesomeFormAssociatedElement
} from "./chunk.YIFWDHLO.js";
import {
  HasSlotController
} from "./chunk.T4TBHMI6.js";
import {
  size_default
} from "./chunk.P7OPWQSA.js";
import {
  clamp
} from "./chunk.P4RF2EOP.js";
import {
  e as e2
} from "./chunk.EKCJVOUE.js";
import {
  LocalizeController
} from "./chunk.AOSYTJIV.js";
import {
  e,
  n,
  r,
  r2,
  t
} from "./chunk.K3NQCJAH.js";
import {
  x
} from "./chunk.IB44PGUJ.js";
import {
  __decorateClass
} from "./chunk.CLOX737Y.js";

// _bundle_/src/internal/validators/slider-validator.ts
var SliderValidator = () => {
  const nativeRequiredRange = Object.assign(document.createElement("input"), {
    type: "range",
    required: true
  });
  return {
    observedAttributes: ["required", "min", "max", "step"],
    checkValidity(element) {
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      };
      const createNativeRange = (value, min, max, step) => {
        const input = document.createElement("input");
        input.type = "range";
        input.min = String(min);
        input.max = String(max);
        input.step = String(step);
        input.value = String(value);
        input.checkValidity();
        return input.validationMessage;
      };
      if (element.required && !element.hasInteracted) {
        validity.isValid = false;
        validity.invalidKeys.push("valueMissing");
        validity.message = nativeRequiredRange.validationMessage || "Please fill out this field.";
        return validity;
      }
      if (element.isRange) {
        const minValue = element.minValue;
        const maxValue = element.maxValue;
        if (minValue < element.min) {
          validity.isValid = false;
          validity.invalidKeys.push("rangeUnderflow");
          validity.message = createNativeRange(minValue, element.min, element.max, element.step) || `Value must be greater than or equal to ${element.min}.`;
          return validity;
        }
        if (maxValue > element.max) {
          validity.isValid = false;
          validity.invalidKeys.push("rangeOverflow");
          validity.message = createNativeRange(maxValue, element.min, element.max, element.step) || `Value must be less than or equal to ${element.max}.`;
          return validity;
        }
        if (element.step && element.step !== 1) {
          const minStepMismatch = (minValue - element.min) % element.step !== 0;
          const maxStepMismatch = (maxValue - element.min) % element.step !== 0;
          if (minStepMismatch || maxStepMismatch) {
            validity.isValid = false;
            validity.invalidKeys.push("stepMismatch");
            const testValue = minStepMismatch ? minValue : maxValue;
            validity.message = createNativeRange(testValue, element.min, element.max, element.step) || `Value must be a multiple of ${element.step}.`;
            return validity;
          }
        }
      } else {
        const value = element.value;
        if (value < element.min) {
          validity.isValid = false;
          validity.invalidKeys.push("rangeUnderflow");
          validity.message = createNativeRange(value, element.min, element.max, element.step) || `Value must be greater than or equal to ${element.min}.`;
          return validity;
        }
        if (value > element.max) {
          validity.isValid = false;
          validity.invalidKeys.push("rangeOverflow");
          validity.message = createNativeRange(value, element.min, element.max, element.step) || `Value must be less than or equal to ${element.max}.`;
          return validity;
        }
        if (element.step && element.step !== 1 && (value - element.min) % element.step !== 0) {
          validity.isValid = false;
          validity.invalidKeys.push("stepMismatch");
          validity.message = createNativeRange(value, element.min, element.max, element.step) || `Value must be a multiple of ${element.step}.`;
          return validity;
        }
      }
      return validity;
    }
  };
};

// _bundle_/src/components/slider/slider.css
var slider_default = ":host {\n  --track-size: 0.5em;\n  --thumb-width: 1.4em;\n  --thumb-height: 1.4em;\n  --marker-width: 0.1875em;\n  --marker-height: 0.1875em;\n}\n\n:host([orientation='vertical']) {\n  width: auto;\n}\n\n#label:has(~ .vertical) {\n  display: block;\n  order: 2;\n  max-width: none;\n  text-align: center;\n}\n\n#description:has(~ .vertical) {\n  order: 3;\n  text-align: center;\n}\n\n/* Add extra space between slider and label, when present */\n#label:has(*:not(:empty)) ~ #slider {\n  &.horizontal {\n    margin-block-start: 0.5em;\n  }\n  &.vertical {\n    margin-block-end: 0.5em;\n  }\n}\n\n#slider {\n  &:focus {\n    outline: none;\n  }\n\n  &:focus-visible:not(.disabled) #thumb,\n  &:focus-visible:not(.disabled) #thumb-min,\n  &:focus-visible:not(.disabled) #thumb-max {\n    outline: var(--wa-focus-ring);\n    /* intentionally no offset due to border */\n  }\n}\n\n#track {\n  position: relative;\n  border-radius: 9999px;\n  background: var(--wa-color-neutral-fill-normal);\n  isolation: isolate;\n}\n\n/* Orientation */\n.horizontal #track {\n  height: var(--track-size);\n}\n\n.vertical #track {\n  order: 1;\n  width: var(--track-size);\n  height: 200px;\n}\n\n/* Disabled */\n.disabled #track {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n/* Indicator */\n#indicator {\n  position: absolute;\n  border-radius: inherit;\n  background-color: var(--wa-form-control-activated-color);\n\n  &:dir(ltr) {\n    right: calc(100% - max(var(--start), var(--end)));\n    left: min(var(--start), var(--end));\n  }\n\n  &:dir(rtl) {\n    right: min(var(--start), var(--end));\n    left: calc(100% - max(var(--start), var(--end)));\n  }\n}\n\n.horizontal #indicator {\n  top: 0;\n  height: 100%;\n}\n\n.vertical #indicator {\n  top: calc(100% - var(--end));\n  bottom: var(--start);\n  left: 0;\n  width: 100%;\n}\n\n/* Thumbs */\n#thumb,\n#thumb-min,\n#thumb-max {\n  z-index: 3;\n  position: absolute;\n  width: var(--thumb-width);\n  height: var(--thumb-height);\n  border: solid 0.125em var(--wa-color-surface-default);\n  border-radius: 50%;\n  background-color: var(--wa-form-control-activated-color);\n  cursor: pointer;\n}\n\n.disabled #thumb,\n.disabled #thumb-min,\n.disabled #thumb-max {\n  cursor: inherit;\n}\n\n.horizontal #thumb,\n.horizontal #thumb-min,\n.horizontal #thumb-max {\n  top: calc(50% - var(--thumb-height) / 2);\n\n  &:dir(ltr) {\n    right: auto;\n    left: calc(var(--position) - var(--thumb-width) / 2);\n  }\n\n  &:dir(rtl) {\n    right: calc(var(--position) - var(--thumb-width) / 2);\n    left: auto;\n  }\n}\n\n.vertical #thumb,\n.vertical #thumb-min,\n.vertical #thumb-max {\n  bottom: calc(var(--position) - var(--thumb-height) / 2);\n  left: calc(50% - var(--thumb-width) / 2);\n}\n\n/* Range-specific thumb styles */\n:host([range]) {\n  #thumb-min:focus-visible,\n  #thumb-max:focus-visible {\n    z-index: 4; /* Ensure focused thumb appears on top */\n    outline: var(--wa-focus-ring);\n    /* intentionally no offset due to border */\n  }\n}\n\n/* Markers */\n#markers {\n  pointer-events: none;\n}\n\n.marker {\n  z-index: 2;\n  position: absolute;\n  width: var(--marker-width);\n  height: var(--marker-height);\n  border-radius: 50%;\n  background-color: var(--wa-color-surface-default);\n}\n\n.marker:first-of-type,\n.marker:last-of-type {\n  display: none;\n}\n\n.horizontal .marker {\n  top: calc(50% - var(--marker-height) / 2);\n  left: calc(var(--position) - var(--marker-width) / 2);\n}\n\n.vertical .marker {\n  top: calc(var(--position) - var(--marker-height) / 2);\n  left: calc(50% - var(--marker-width) / 2);\n}\n\n/* Marker labels */\n#references {\n  position: relative;\n\n  slot {\n    display: flex;\n    justify-content: space-between;\n    height: 100%;\n  }\n\n  ::slotted(*) {\n    color: var(--wa-color-text-quiet);\n    font-size: 0.875em;\n    line-height: 1;\n  }\n}\n\n.horizontal {\n  #references {\n    margin-block-start: 0.5em;\n  }\n}\n\n.vertical {\n  display: flex;\n  margin-inline: auto;\n\n  #track {\n    order: 1;\n  }\n\n  #references {\n    order: 2;\n    width: min-content;\n    margin-inline-start: 0.75em;\n\n    slot {\n      flex-direction: column;\n    }\n  }\n}\n\n.vertical #references slot {\n  flex-direction: column;\n}\n";

// _bundle_/src/components/slider/slider.ts
var WaSlider = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.draggableThumbMin = null;
    this.draggableThumbMax = null;
    this.hasSlotController = new HasSlotController(this, "hint", "label");
    this.localize = new LocalizeController(this);
    this.activeThumb = null;
    this.lastTrackPosition = null;
    this.label = "";
    this.hint = "";
    this.minValue = 0;
    this.maxValue = 50;
    this.defaultValue = this.getAttribute("value") == null ? this.minValue : Number(this.getAttribute("value"));
    this._value = this.defaultValue;
    this.range = false;
    this.disabled = false;
    this.readonly = false;
    this.orientation = "horizontal";
    this.size = "medium";
    this.form = null;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.required = false;
    this.tooltipDistance = 8;
    this.tooltipPlacement = "top";
    this.withMarkers = false;
    this.withTooltip = false;
  }
  static get validators() {
    return [...super.validators, SliderValidator()];
  }
  // Track last position for direction detection
  get focusableAnchor() {
    return this.isRange ? this.thumbMin || this.slider : this.slider;
  }
  /** Override validation target to point to the focusable element */
  get validationTarget() {
    return this.focusableAnchor;
  }
  /** The current value of the slider, submitted as a name/value pair with form data. */
  get value() {
    if (this.valueHasChanged) {
      return this._value;
    }
    return this._value ?? this.defaultValue;
  }
  set value(val) {
    val = Number(val) ?? this.minValue;
    if (this._value === val) {
      return;
    }
    this.valueHasChanged = true;
    this._value = val;
  }
  /** Get if this is a range slider */
  get isRange() {
    return this.range;
  }
  firstUpdated() {
    if (this.isRange) {
      this.draggableThumbMin = new DraggableElement(this.thumbMin, {
        start: () => {
          this.activeThumb = "min";
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          this.valueWhenDraggingStarted = this.minValue;
          this.customStates.set("dragging", true);
          this.showRangeTooltips();
        },
        move: (x2, y) => {
          this.setThumbValueFromCoordinates(x2, y, "min");
        },
        stop: () => {
          if (this.minValue !== this.valueWhenDraggingStarted) {
            this.updateComplete.then(() => {
              this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
            });
            this.hasInteracted = true;
          }
          this.hideRangeTooltips();
          this.customStates.set("dragging", false);
          this.valueWhenDraggingStarted = void 0;
          this.activeThumb = null;
        }
      });
      this.draggableThumbMax = new DraggableElement(this.thumbMax, {
        start: () => {
          this.activeThumb = "max";
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          this.valueWhenDraggingStarted = this.maxValue;
          this.customStates.set("dragging", true);
          this.showRangeTooltips();
        },
        move: (x2, y) => {
          this.setThumbValueFromCoordinates(x2, y, "max");
        },
        stop: () => {
          if (this.maxValue !== this.valueWhenDraggingStarted) {
            this.updateComplete.then(() => {
              this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
            });
            this.hasInteracted = true;
          }
          this.hideRangeTooltips();
          this.customStates.set("dragging", false);
          this.valueWhenDraggingStarted = void 0;
          this.activeThumb = null;
        }
      });
      this.draggableTrack = new DraggableElement(this.track, {
        start: (x2, y) => {
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          if (this.activeThumb) {
            this.valueWhenDraggingStarted = this.activeThumb === "min" ? this.minValue : this.maxValue;
          } else {
            const value = this.getValueFromCoordinates(x2, y);
            const minDistance = Math.abs(value - this.minValue);
            const maxDistance = Math.abs(value - this.maxValue);
            if (minDistance === maxDistance) {
              if (value > this.maxValue) {
                this.activeThumb = "max";
              } else if (value < this.minValue) {
                this.activeThumb = "min";
              } else {
                const isRtl = this.localize.dir() === "rtl";
                const isVertical = this.orientation === "vertical";
                const position = isVertical ? y : x2;
                const previousPosition = this.lastTrackPosition || position;
                this.lastTrackPosition = position;
                const movingForward = position > previousPosition !== isRtl && !isVertical || position < previousPosition && isVertical;
                this.activeThumb = movingForward ? "max" : "min";
              }
            } else {
              this.activeThumb = minDistance <= maxDistance ? "min" : "max";
            }
            this.valueWhenDraggingStarted = this.activeThumb === "min" ? this.minValue : this.maxValue;
          }
          this.customStates.set("dragging", true);
          this.setThumbValueFromCoordinates(x2, y, this.activeThumb);
          this.showRangeTooltips();
        },
        move: (x2, y) => {
          if (this.activeThumb) {
            this.setThumbValueFromCoordinates(x2, y, this.activeThumb);
          }
        },
        stop: () => {
          if (this.activeThumb) {
            const currentValue = this.activeThumb === "min" ? this.minValue : this.maxValue;
            if (currentValue !== this.valueWhenDraggingStarted) {
              this.updateComplete.then(() => {
                this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
              });
              this.hasInteracted = true;
            }
          }
          this.hideRangeTooltips();
          this.customStates.set("dragging", false);
          this.valueWhenDraggingStarted = void 0;
          this.activeThumb = null;
        }
      });
    } else {
      this.draggableTrack = new DraggableElement(this.slider, {
        start: (x2, y) => {
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          this.valueWhenDraggingStarted = this.value;
          this.customStates.set("dragging", true);
          this.setValueFromCoordinates(x2, y);
          this.showTooltip();
        },
        move: (x2, y) => {
          this.setValueFromCoordinates(x2, y);
        },
        stop: () => {
          if (this.value !== this.valueWhenDraggingStarted) {
            this.updateComplete.then(() => {
              this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
            });
            this.hasInteracted = true;
          }
          this.hideTooltip();
          this.customStates.set("dragging", false);
          this.valueWhenDraggingStarted = void 0;
        }
      });
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("range")) {
      this.requestUpdate();
    }
    if (this.isRange) {
      if (changedProperties.has("minValue") || changedProperties.has("maxValue")) {
        this.minValue = clamp(this.minValue, this.min, this.maxValue);
        this.maxValue = clamp(this.maxValue, this.minValue, this.max);
        this.updateFormValue();
      }
    } else {
      if (changedProperties.has("value")) {
        this.value = clamp(this.value, this.min, this.max);
        this.setValue(String(this.value));
      }
    }
    if (changedProperties.has("min") || changedProperties.has("max")) {
      if (this.isRange) {
        this.minValue = clamp(this.minValue, this.min, this.max);
        this.maxValue = clamp(this.maxValue, this.min, this.max);
      } else {
        this.value = clamp(this.value, this.min, this.max);
      }
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("disabled") || changedProperties.has("readonly")) {
      const enabled = !(this.disabled || this.readonly);
      if (this.isRange) {
        if (this.draggableThumbMin) this.draggableThumbMin.toggle(enabled);
        if (this.draggableThumbMax) this.draggableThumbMax.toggle(enabled);
      }
      if (this.draggableTrack) {
        this.draggableTrack.toggle(enabled);
      }
    }
    super.updated(changedProperties);
  }
  /** @internal Called when a containing fieldset is disabled. */
  formDisabledCallback(isDisabled) {
    this.disabled = isDisabled;
  }
  /** @internal Called when the form is reset. */
  formResetCallback() {
    if (this.isRange) {
      this.minValue = parseFloat(this.getAttribute("min-value") ?? String(this.min));
      this.maxValue = parseFloat(this.getAttribute("max-value") ?? String(this.max));
    } else {
      this.value = parseFloat(this.getAttribute("value") ?? String(this.min));
    }
    this.hasInteracted = false;
    super.formResetCallback();
  }
  /** Clamps a number to min/max while ensuring it's a valid step interval. */
  clampAndRoundToStep(value) {
    const stepPrecision = (String(this.step).split(".")[1] || "").replace(/0+$/g, "").length;
    value = Math.round(value / this.step) * this.step;
    value = clamp(value, this.min, this.max);
    return parseFloat(value.toFixed(stepPrecision));
  }
  /** Given a value, returns its percentage within a range of min/max. */
  getPercentageFromValue(value) {
    return (value - this.min) / (this.max - this.min) * 100;
  }
  /** Converts coordinates to slider value */
  getValueFromCoordinates(x2, y) {
    const isRtl = this.localize.dir() === "rtl";
    const isVertical = this.orientation === "vertical";
    const { top, right, bottom, left, height, width } = this.trackBoundingClientRect;
    const pointerPosition = isVertical ? y : x2;
    const sliderCoords = isVertical ? { start: top, end: bottom, size: height } : { start: left, end: right, size: width };
    const relativePosition = isVertical ? sliderCoords.end - pointerPosition : isRtl ? sliderCoords.end - pointerPosition : pointerPosition - sliderCoords.start;
    const percentage = relativePosition / sliderCoords.size;
    return this.clampAndRoundToStep(this.min + (this.max - this.min) * percentage);
  }
  handleBlur() {
    if (this.isRange) {
      requestAnimationFrame(() => {
        const focusedElement = this.shadowRoot?.activeElement;
        const thumbHasFocus = focusedElement === this.thumbMin || focusedElement === this.thumbMax;
        if (!thumbHasFocus) {
          this.hideRangeTooltips();
        }
      });
    } else {
      this.hideTooltip();
    }
    this.customStates.set("focused", false);
    this.dispatchEvent(new FocusEvent("blur", { bubbles: true, composed: true }));
  }
  handleFocus(event) {
    const target = event.target;
    if (this.isRange) {
      if (target === this.thumbMin) {
        this.activeThumb = "min";
      } else if (target === this.thumbMax) {
        this.activeThumb = "max";
      }
      this.showRangeTooltips();
    } else {
      this.showTooltip();
    }
    this.customStates.set("focused", true);
    this.dispatchEvent(new FocusEvent("focus", { bubbles: true, composed: true }));
  }
  handleKeyDown(event) {
    const isRtl = this.localize.dir() === "rtl";
    const target = event.target;
    if (this.disabled || this.readonly) return;
    if (this.isRange) {
      if (target === this.thumbMin) {
        this.activeThumb = "min";
      } else if (target === this.thumbMax) {
        this.activeThumb = "max";
      }
      if (!this.activeThumb) return;
    }
    const current = this.isRange ? this.activeThumb === "min" ? this.minValue : this.maxValue : this.value;
    let newValue = current;
    switch (event.key) {
      // Increase
      case "ArrowUp":
      case (isRtl ? "ArrowLeft" : "ArrowRight"):
        event.preventDefault();
        newValue = this.clampAndRoundToStep(current + this.step);
        break;
      // Decrease
      case "ArrowDown":
      case (isRtl ? "ArrowRight" : "ArrowLeft"):
        event.preventDefault();
        newValue = this.clampAndRoundToStep(current - this.step);
        break;
      // Minimum value
      case "Home":
        event.preventDefault();
        newValue = this.isRange && this.activeThumb === "min" ? this.min : this.isRange ? this.minValue : this.min;
        break;
      // Maximum value
      case "End":
        event.preventDefault();
        newValue = this.isRange && this.activeThumb === "max" ? this.max : this.isRange ? this.maxValue : this.max;
        break;
      // Move up 10%
      case "PageUp":
        event.preventDefault();
        const stepUp = Math.max(
          current + (this.max - this.min) / 10,
          current + this.step
          // make sure we at least move up to the next step
        );
        newValue = this.clampAndRoundToStep(stepUp);
        break;
      // Move down 10%
      case "PageDown":
        event.preventDefault();
        const stepDown = Math.min(
          current - (this.max - this.min) / 10,
          current - this.step
          // make sure we at least move down to the previous step
        );
        newValue = this.clampAndRoundToStep(stepDown);
        break;
      // Handle form submission on Enter
      case "Enter":
        submitOnEnter(event, this);
        return;
    }
    if (newValue === current) return;
    if (this.isRange) {
      if (this.activeThumb === "min") {
        if (newValue > this.maxValue) {
          this.maxValue = newValue;
          this.minValue = newValue;
        } else {
          this.minValue = Math.max(this.min, newValue);
        }
      } else {
        if (newValue < this.minValue) {
          this.minValue = newValue;
          this.maxValue = newValue;
        } else {
          this.maxValue = Math.min(this.max, newValue);
        }
      }
      this.updateFormValue();
    } else {
      this.value = clamp(newValue, this.min, this.max);
    }
    this.updateComplete.then(() => {
      this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    });
    this.hasInteracted = true;
  }
  handleLabelPointerDown(event) {
    event.preventDefault();
    if (!this.disabled) {
      if (this.isRange) {
        this.thumbMin?.focus();
      } else {
        this.slider.focus();
      }
    }
  }
  setValueFromCoordinates(x2, y) {
    const oldValue = this.value;
    this.value = this.getValueFromCoordinates(x2, y);
    if (this.value !== oldValue) {
      this.updateComplete.then(() => {
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
      });
    }
  }
  setThumbValueFromCoordinates(x2, y, thumb) {
    const value = this.getValueFromCoordinates(x2, y);
    const oldValue = thumb === "min" ? this.minValue : this.maxValue;
    if (thumb === "min") {
      if (value > this.maxValue) {
        this.maxValue = value;
        this.minValue = value;
      } else {
        this.minValue = Math.max(this.min, value);
      }
    } else {
      if (value < this.minValue) {
        this.minValue = value;
        this.maxValue = value;
      } else {
        this.maxValue = Math.min(this.max, value);
      }
    }
    if (oldValue !== (thumb === "min" ? this.minValue : this.maxValue)) {
      this.updateFormValue();
      this.updateComplete.then(() => {
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
      });
    }
  }
  showTooltip() {
    if (this.withTooltip && this.tooltip) {
      this.tooltip.open = true;
    }
  }
  hideTooltip() {
    if (this.withTooltip && this.tooltip) {
      this.tooltip.open = false;
    }
  }
  showRangeTooltips() {
    if (this.withTooltip) {
      this.tooltips.forEach((tooltip) => {
        tooltip.open = true;
      });
    }
  }
  hideRangeTooltips() {
    if (this.withTooltip) {
      this.tooltips.forEach((tooltip) => {
        tooltip.open = false;
      });
    }
  }
  /** Updates the form value submission for range sliders */
  updateFormValue() {
    if (this.isRange) {
      const formData = new FormData();
      formData.append(this.name || "", String(this.minValue));
      formData.append(this.name || "", String(this.maxValue));
      this.setValue(formData);
    }
  }
  /** Sets focus to the slider. */
  focus() {
    if (this.isRange) {
      this.thumbMin?.focus();
    } else {
      this.slider.focus();
    }
  }
  /** Removes focus from the slider. */
  blur() {
    if (this.isRange) {
      if (document.activeElement === this.thumbMin) {
        this.thumbMin.blur();
      } else if (document.activeElement === this.thumbMax) {
        this.thumbMax.blur();
      }
    } else {
      this.slider.blur();
    }
  }
  /**
   * Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   */
  stepDown() {
    if (this.isRange) {
      const newValue = this.clampAndRoundToStep(this.minValue - this.step);
      this.minValue = clamp(newValue, this.min, this.maxValue);
      this.updateFormValue();
    } else {
      const newValue = this.clampAndRoundToStep(this.value - this.step);
      this.value = newValue;
    }
  }
  /**
   * Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   */
  stepUp() {
    if (this.isRange) {
      const newValue = this.clampAndRoundToStep(this.maxValue + this.step);
      this.maxValue = clamp(newValue, this.minValue, this.max);
      this.updateFormValue();
    } else {
      const newValue = this.clampAndRoundToStep(this.value + this.step);
      this.value = newValue;
    }
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHintSlot = this.hasSlotController.test("hint");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHint = this.hint ? true : !!hasHintSlot;
    const hasReference = this.hasSlotController.test("reference");
    const sliderClasses = e2({
      small: this.size === "small",
      medium: this.size === "medium",
      large: this.size === "large",
      horizontal: this.orientation === "horizontal",
      vertical: this.orientation === "vertical",
      disabled: this.disabled
    });
    const markers = [];
    if (this.withMarkers) {
      for (let i = this.min; i <= this.max; i += this.step) {
        markers.push(this.getPercentageFromValue(i));
      }
    }
    const label = x`
      <label
        id="label"
        part="label"
        for=${this.isRange ? "thumb-min" : "text-box"}
        class=${e2({ vh: !hasLabel })}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `;
    const hint = x`
      <div
        id="hint"
        part="hint"
        class=${e2({
      "has-slotted": hasHint
    })}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `;
    const markersTemplate = this.withMarkers ? x`
          <div id="markers" part="markers">
            ${markers.map((marker) => x`<span part="marker" class="marker" style="--position: ${marker}%"></span>`)}
          </div>
        ` : "";
    const referencesTemplate = hasReference ? x`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        ` : "";
    const createTooltip = (thumbId, value) => this.withTooltip ? x`
            <wa-tooltip
              id=${`tooltip${thumbId !== "thumb" ? "-" + thumbId : ""}`}
              part="tooltip"
              exportparts="
                tooltip:tooltip__tooltip,
                content:tooltip__content,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${thumbId}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter === "function" ? this.valueFormatter(value) : this.localize.number(value)}
              </span>
            </wa-tooltip>
          ` : "";
    if (this.isRange) {
      const minThumbPosition = clamp(this.getPercentageFromValue(this.minValue), 0, 100);
      const maxThumbPosition = clamp(this.getPercentageFromValue(this.maxValue), 0, 100);
      return x`
        ${label}

        <div id="slider" part="slider" class=${sliderClasses}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${Math.min(minThumbPosition, maxThumbPosition)}%; --end: ${Math.max(
        minThumbPosition,
        maxThumbPosition
      )}%"
            ></div>

            ${markersTemplate}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style="--position: ${minThumbPosition}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter === "function" ? this.valueFormatter(this.minValue) : this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label ? `${this.label} (minimum value)` : "Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled ? "true" : "false"}
              aria-readonly=${this.readonly ? "true" : "false"}
              tabindex=${this.disabled ? -1 : 0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style="--position: ${maxThumbPosition}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter === "function" ? this.valueFormatter(this.maxValue) : this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label ? `${this.label} (maximum value)` : "Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled ? "true" : "false"}
              aria-readonly=${this.readonly ? "true" : "false"}
              tabindex=${this.disabled ? -1 : 0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${referencesTemplate} ${hint}
        </div>

        ${createTooltip("thumb-min", this.minValue)} ${createTooltip("thumb-max", this.maxValue)}
      `;
    } else {
      const thumbPosition = clamp(this.getPercentageFromValue(this.value), 0, 100);
      const indicatorOffsetPosition = clamp(
        this.getPercentageFromValue(typeof this.indicatorOffset === "number" ? this.indicatorOffset : this.min),
        0,
        100
      );
      return x`
        ${label}

        <div
          id="slider"
          part="slider"
          class=${sliderClasses}
          role="slider"
          aria-disabled=${this.disabled ? "true" : "false"}
          aria-readonly=${this.disabled ? "true" : "false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter === "function" ? this.valueFormatter(this.value) : this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled ? -1 : 0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${indicatorOffsetPosition}%; --end: ${thumbPosition}%"
            ></div>

            ${markersTemplate}
            <span id="thumb" part="thumb" style="--position: ${thumbPosition}%"></span>
          </div>

          ${referencesTemplate} ${hint}
        </div>

        ${createTooltip("thumb", this.value)}
      `;
    }
  }
};
WaSlider.formAssociated = true;
WaSlider.observeSlots = true;
WaSlider.css = [size_default, form_control_default, slider_default];
__decorateClass([
  e("#slider")
], WaSlider.prototype, "slider", 2);
__decorateClass([
  e("#thumb")
], WaSlider.prototype, "thumb", 2);
__decorateClass([
  e("#thumb-min")
], WaSlider.prototype, "thumbMin", 2);
__decorateClass([
  e("#thumb-max")
], WaSlider.prototype, "thumbMax", 2);
__decorateClass([
  e("#track")
], WaSlider.prototype, "track", 2);
__decorateClass([
  e("#tooltip")
], WaSlider.prototype, "tooltip", 2);
__decorateClass([
  r2("wa-tooltip")
], WaSlider.prototype, "tooltips", 2);
__decorateClass([
  n()
], WaSlider.prototype, "label", 2);
__decorateClass([
  n({ attribute: "hint" })
], WaSlider.prototype, "hint", 2);
__decorateClass([
  n({ reflect: true })
], WaSlider.prototype, "name", 2);
__decorateClass([
  n({ type: Number, attribute: "min-value" })
], WaSlider.prototype, "minValue", 2);
__decorateClass([
  n({ type: Number, attribute: "max-value" })
], WaSlider.prototype, "maxValue", 2);
__decorateClass([
  n({ attribute: "value", reflect: true, type: Number })
], WaSlider.prototype, "defaultValue", 2);
__decorateClass([
  r()
], WaSlider.prototype, "value", 1);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaSlider.prototype, "range", 2);
__decorateClass([
  n({ type: Boolean })
], WaSlider.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaSlider.prototype, "readonly", 2);
__decorateClass([
  n({ reflect: true })
], WaSlider.prototype, "orientation", 2);
__decorateClass([
  n({ reflect: true })
], WaSlider.prototype, "size", 2);
__decorateClass([
  n({ attribute: "indicator-offset", type: Number })
], WaSlider.prototype, "indicatorOffset", 2);
__decorateClass([
  n({ reflect: true })
], WaSlider.prototype, "form", 2);
__decorateClass([
  n({ type: Number })
], WaSlider.prototype, "min", 2);
__decorateClass([
  n({ type: Number })
], WaSlider.prototype, "max", 2);
__decorateClass([
  n({ type: Number })
], WaSlider.prototype, "step", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaSlider.prototype, "required", 2);
__decorateClass([
  n({ type: Boolean })
], WaSlider.prototype, "autofocus", 2);
__decorateClass([
  n({ attribute: "tooltip-distance", type: Number })
], WaSlider.prototype, "tooltipDistance", 2);
__decorateClass([
  n({ attribute: "tooltip-placement", reflect: true })
], WaSlider.prototype, "tooltipPlacement", 2);
__decorateClass([
  n({ attribute: "with-markers", type: Boolean })
], WaSlider.prototype, "withMarkers", 2);
__decorateClass([
  n({ attribute: "with-tooltip", type: Boolean })
], WaSlider.prototype, "withTooltip", 2);
__decorateClass([
  n({ attribute: false })
], WaSlider.prototype, "valueFormatter", 2);
WaSlider = __decorateClass([
  t("wa-slider")
], WaSlider);

export {
  WaSlider
};
