import {
  registerTranslation
} from "../chunks/chunk.KT4NGSPG.js";
import "../chunks/chunk.CLOX737Y.js";

// _bundle_/src/translations/id.ts
var translation = {
  $code: "id",
  $name: "Bahasa Indonesia",
  $dir: "ltr",
  carousel: "Karousel",
  clearEntry: "Hapus entri",
  close: "Tutup",
  copied: "Disalin",
  copy: "Salin",
  currentValue: "Nilai saat ini",
  error: "Kesalahan",
  goToSlide: (slide, count) => `Pergi ke slide ${slide} dari ${count}`,
  hidePassword: "Sembunyikan sandi",
  loading: "Memuat",
  nextSlide: "Slide berikutnya",
  numOptionsSelected: (num) => {
    if (num === 0) return "Tidak ada opsi yang dipilih";
    if (num === 1) return "1 opsi yang dipilih";
    return `${num} opsi yang dipilih`;
  },
  pauseAnimation: "Jeda animasi",
  playAnimation: "Putar animasi",
  previousSlide: "Slide sebelumnya",
  progress: "Kemajuan",
  remove: "Hapus",
  resize: "Ubah ukuran",
  scrollableRegion: "Area yang dapat digulir",
  scrollToEnd: "Gulir ke akhir",
  scrollToStart: "Gulir ke awal",
  selectAColorFromTheScreen: "Pilih warna dari layar",
  showPassword: "Tampilkan sandi",
  slideNum: (slide) => `Slide ${slide}`,
  toggleColorFormat: "Beralih format warna",
  zoomIn: "Perbesar",
  zoomOut: "Perkecil"
};
registerTranslation(translation);
var id_default = translation;
export {
  id_default as default
};
