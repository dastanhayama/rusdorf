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

document.getElementById("blablabla").style.display = "none";

function blablabla() {
  if (document.getElementById("blablabla").style.display == "none") {
    document.getElementById("blablabla").style.display = "flex";
  } else {
    document.getElementById("blablabla").style.display = "none";
  }
}

document.getElementById("swiperjs").style.zIndex = "-999";

function swiperjsZindex() {
  document.getElementById("blablabla").style.zIndex = "-999";
}
