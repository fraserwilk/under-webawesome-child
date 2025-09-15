import "../chunks/chunk.AOSYTJIV.js";
import "../chunks/chunk.7LHJGBZ7.js";
import {
  registerTranslation
} from "../chunks/chunk.KT4NGSPG.js";
import "../chunks/chunk.CLOX737Y.js";

// _bundle_/src/translations/sv.ts
var translation = {
  $code: "sv",
  $name: "Svenska",
  $dir: "ltr",
  carousel: "Karusell",
  clearEntry: "\xC5terst\xE4ll val",
  close: "St\xE4ng",
  copied: "Kopierade",
  copy: "Kopiera",
  currentValue: "Nuvarande v\xE4rde",
  error: "Fel",
  goToSlide: (slide, count) => `G\xE5 till bild ${slide} av ${count}`,
  hidePassword: "D\xF6lj l\xF6senord",
  loading: "L\xE4ser in",
  nextSlide: "N\xE4sta bild",
  numOptionsSelected: (num) => {
    if (num === 0) return "Inga alternativ har valts";
    if (num === 1) return "1 alternativ valt";
    return `${num} alternativ valda`;
  },
  pauseAnimation: "Pausa animation",
  playAnimation: "Spela upp animation",
  previousSlide: "F\xF6reg\xE5ende bild",
  progress: "Framsteg",
  remove: "Ta bort",
  resize: "\xC4ndra storlek",
  scrollableRegion: "Scrollbart omr\xE5de",
  scrollToEnd: "Skrolla till slutet",
  scrollToStart: "Skrolla till b\xF6rjan",
  selectAColorFromTheScreen: "V\xE4lj en f\xE4rg fr\xE5n sk\xE4rmen",
  showPassword: "Visa l\xF6senord",
  slideNum: (slide) => `Bild ${slide}`,
  toggleColorFormat: "V\xE4xla f\xE4rgformat",
  zoomIn: "Zooma in",
  zoomOut: "Zooma ut"
};
registerTranslation(translation);
var sv_default = translation;
export {
  sv_default as default
};
