// _bundle_/src/events/clear.ts
var WaClearEvent = class extends Event {
  constructor() {
    super("wa-clear", { bubbles: true, cancelable: false, composed: true });
  }
};

export {
  WaClearEvent
};
