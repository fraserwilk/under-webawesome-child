import {
  dist_exports
} from "./chunk.NTFMUM5C.js";
import {
  watch
} from "./chunk.H7JGFWVW.js";
import {
  WebAwesomeElement,
  n,
  r3 as r,
  t
} from "./chunk.K3NQCJAH.js";
import {
  x
} from "./chunk.IB44PGUJ.js";
import {
  __decorateClass
} from "./chunk.CLOX737Y.js";

// _bundle_/src/events/cancel.ts
var WaCancelEvent = class extends Event {
  constructor() {
    super("wa-cancel", { bubbles: true, cancelable: false, composed: true });
  }
};

// _bundle_/src/events/finish.ts
var WaFinishEvent = class extends Event {
  constructor() {
    super("wa-finish", { bubbles: true, cancelable: false, composed: true });
  }
};

// _bundle_/src/events/start.ts
var WaStartEvent = class extends Event {
  constructor() {
    super("wa-start", { bubbles: true, cancelable: false, composed: true });
  }
};

// _bundle_/src/components/animation/animation.css
var animation_default = ":host {\n  display: contents;\n}\n";

// _bundle_/src/components/animation/animation.ts
var WaAnimation = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.hasStarted = false;
    this.name = "none";
    this.play = false;
    this.delay = 0;
    this.direction = "normal";
    this.duration = 1e3;
    this.easing = "linear";
    this.endDelay = 0;
    this.fill = "auto";
    this.iterations = Infinity;
    this.iterationStart = 0;
    this.playbackRate = 1;
    this.handleAnimationFinish = () => {
      this.play = false;
      this.hasStarted = false;
      this.dispatchEvent(new WaFinishEvent());
    };
    this.handleAnimationCancel = () => {
      this.play = false;
      this.hasStarted = false;
      this.dispatchEvent(new WaCancelEvent());
    };
  }
  /** Gets and sets the current animation time. */
  get currentTime() {
    return this.animation?.currentTime ?? 0;
  }
  set currentTime(time) {
    if (this.animation) {
      this.animation.currentTime = time;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.createAnimation();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.destroyAnimation();
  }
  handleSlotChange() {
    this.destroyAnimation();
    this.createAnimation();
  }
  async createAnimation() {
    const easing = dist_exports.easings[this.easing] ?? this.easing;
    const keyframes = this.keyframes ?? dist_exports[this.name];
    const slot = await this.defaultSlot;
    const element = slot.assignedElements()[0];
    if (!element || !keyframes) {
      return false;
    }
    this.destroyAnimation();
    this.animation = element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations
    });
    this.animation.playbackRate = this.playbackRate;
    this.animation.addEventListener("cancel", this.handleAnimationCancel);
    this.animation.addEventListener("finish", this.handleAnimationFinish);
    if (this.play) {
      this.hasStarted = true;
      this.dispatchEvent(new WaStartEvent());
    } else {
      this.animation.pause();
    }
    return true;
  }
  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener("cancel", this.handleAnimationCancel);
      this.animation.removeEventListener("finish", this.handleAnimationFinish);
      this.hasStarted = false;
    }
  }
  handleAnimationChange() {
    if (!this.hasUpdated) {
      return;
    }
    this.createAnimation();
  }
  handlePlayChange() {
    if (this.animation) {
      if (this.play && !this.hasStarted) {
        this.hasStarted = true;
        this.dispatchEvent(new WaStartEvent());
      }
      if (this.play) {
        this.animation.play();
      } else {
        this.animation.pause();
      }
      return true;
    }
    return false;
  }
  handlePlaybackRateChange() {
    if (this.animation) {
      this.animation.playbackRate = this.playbackRate;
    }
  }
  /** Clears all keyframe effects caused by this animation and aborts its playback. */
  cancel() {
    this.animation?.cancel();
  }
  /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
  finish() {
    this.animation?.finish();
  }
  render() {
    return x` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
WaAnimation.css = animation_default;
__decorateClass([
  r("slot")
], WaAnimation.prototype, "defaultSlot", 2);
__decorateClass([
  n()
], WaAnimation.prototype, "name", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaAnimation.prototype, "play", 2);
__decorateClass([
  n({ type: Number })
], WaAnimation.prototype, "delay", 2);
__decorateClass([
  n()
], WaAnimation.prototype, "direction", 2);
__decorateClass([
  n({ type: Number })
], WaAnimation.prototype, "duration", 2);
__decorateClass([
  n()
], WaAnimation.prototype, "easing", 2);
__decorateClass([
  n({ attribute: "end-delay", type: Number })
], WaAnimation.prototype, "endDelay", 2);
__decorateClass([
  n()
], WaAnimation.prototype, "fill", 2);
__decorateClass([
  n({ type: Number })
], WaAnimation.prototype, "iterations", 2);
__decorateClass([
  n({ attribute: "iteration-start", type: Number })
], WaAnimation.prototype, "iterationStart", 2);
__decorateClass([
  n({ attribute: false })
], WaAnimation.prototype, "keyframes", 2);
__decorateClass([
  n({ attribute: "playback-rate", type: Number })
], WaAnimation.prototype, "playbackRate", 2);
__decorateClass([
  watch([
    "name",
    "delay",
    "direction",
    "duration",
    "easing",
    "endDelay",
    "fill",
    "iterations",
    "iterationsStart",
    "keyframes"
  ])
], WaAnimation.prototype, "handleAnimationChange", 1);
__decorateClass([
  watch("play")
], WaAnimation.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("playbackRate")
], WaAnimation.prototype, "handlePlaybackRateChange", 1);
WaAnimation = __decorateClass([
  t("wa-animation")
], WaAnimation);

export {
  WaAnimation
};
