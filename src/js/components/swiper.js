import Swiper, { Navigation, Scrollbar } from "swiper";

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper(".team__swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,

  navigation: {
    nextEl: ".team__slider-btn--next",
    prevEl: ".team__slider-btn--prev",
  },
});
