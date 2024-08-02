const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.getElementById("swiperjs").style.zIndex = "-999";

function blablabla() {
  document.getElementById("blablabla").style.zIndex = "-999";
}
