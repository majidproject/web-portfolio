function matchMiniSliderHeight() {
  const mainSlider = document.querySelector(".custom-slider");
  const miniSlider1 = document.querySelector(".mini-slider-1");

  if (mainSlider && miniSlider1) {
      miniSlider1.style.height = `${mainSlider.offsetHeight}px`;
  }
}

window.addEventListener("load", matchMiniSliderHeight);
window.addEventListener("resize", matchMiniSliderHeight);
