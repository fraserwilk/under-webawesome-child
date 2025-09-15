import {
  registerTranslation
} from "../chunks/chunk.KT4NGSPG.js";
import "../chunks/chunk.CLOX737Y.js";

// _bundle_/src/translations/cs.ts
var translation = {
  $code: "cs",
  $name: "\u010Ce\u0161tina",
  $dir: "ltr",
  carousel: "Karusel",
  clearEntry: "Smazat polo\u017Eku",
  close: "Zav\u0159\xEDt",
  copied: "Zkop\xEDrov\xE1no",
  copy: "Kop\xEDrovat",
  currentValue: "Sou\u010Dasn\xE1 hodnota",
  error: "Chyba",
  goToSlide: (slide, count) => `P\u0159ej\xEDt na slide ${slide} z ${count}`,
  hidePassword: "Skr\xFDt heslo",
  loading: "Nahr\xE1v\xE1 se",
  nextSlide: "Dal\u0161\xED slide",
  numOptionsSelected: (num) => {
    if (num === 0) return "Nejsou vybr\xE1ny \u017E\xE1dn\xE9 mo\u017Enosti";
    if (num === 1) return "Je vybr\xE1na jedna mo\u017Enost";
    return `Po\u010Det vybran\xFDch mo\u017Enost\xED: ${num}`;
  },
  pauseAnimation: "Pozastavit animaci",
  playAnimation: "P\u0159ehr\xE1t animaci",
  previousSlide: "P\u0159edchoz\xED slide",
  progress: "Pr\u016Fb\u011Bh",
  remove: "Odstranit",
  resize: "Zm\u011Bnit velikost",
  scrollableRegion: "Posunovateln\xE1 oblast",
  scrollToEnd: "Scrollovat na konec",
  scrollToStart: "Scrollovat na za\u010D\xE1tek",
  selectAColorFromTheScreen: "Vybrat barvu z obrazovky",
  showPassword: "Zobrazit heslo",
  slideNum: (slide) => `Slide ${slide}`,
  toggleColorFormat: "P\u0159epnout form\xE1t barvy",
  zoomIn: "P\u0159ibl\xED\u017Eit",
  zoomOut: "Odd\xE1lit"
};
registerTranslation(translation);
var cs_default = translation;
export {
  cs_default as default
};
