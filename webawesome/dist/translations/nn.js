import "../chunks/chunk.AOSYTJIV.js";
import "../chunks/chunk.7LHJGBZ7.js";
import {
  registerTranslation
} from "../chunks/chunk.KT4NGSPG.js";
import "../chunks/chunk.CLOX737Y.js";

// _bundle_/src/translations/nn.ts
var translation = {
  $code: "nn",
  $name: "Norwegian Nynorsk",
  $dir: "ltr",
  carousel: "Karusell",
  clearEntry: "T\xF8m felt",
  close: "Lukk",
  copied: "Kopiert",
  copy: "Kopier",
  currentValue: "N\xE5verande verdi",
  error: "Feil",
  goToSlide: (slide, count) => `G\xE5 til visning ${slide} av ${count}`,
  hidePassword: "G\xF8ym passord",
  loading: "Lastar",
  nextSlide: "Neste visning",
  numOptionsSelected: (num) => {
    if (num === 0) return "Ingen alternativ valt";
    if (num === 1) return "Eitt alternativ valt";
    return `${num} alternativ valt`;
  },
  pauseAnimation: "Set animasjon p\xE5 pause",
  playAnimation: "Spel av animasjon",
  previousSlide: "F\xF8rre visning",
  progress: "Framdrift",
  remove: "Fjern",
  resize: "Endre storleik",
  scrollableRegion: "Rullbar region",
  scrollToEnd: "Rull til slutten",
  scrollToStart: "Rull til starten",
  selectAColorFromTheScreen: "Vel ein farge fr\xE5 skjermen",
  showPassword: "Vis passord",
  slideNum: (slide) => `Visning ${slide}`,
  toggleColorFormat: "Byt fargeformat",
  zoomIn: "Zoom inn",
  zoomOut: "Zoom ut"
};
registerTranslation(translation);
var nn_default = translation;
export {
  nn_default as default
};
