function syncMiniSlidersHeight() {
  const mainSlider = document.querySelector('.custom-slider');
  const mini2 = document.querySelector('.mini-slider-2');
  const mini3 = document.querySelector('.mini-slider-3');

  if (mainSlider && mini2 && mini3) {
  const totalHeight = mainSlider.offsetHeight;
  const spacing = 2; // فاصله بین دو اسلایدر (وسط)
  const marginTop = 8; // مقدار mt-2 بالای کل بلوک
  const eachHeight = (totalHeight - spacing - marginTop) / 2;

  mini2.style.height = `${eachHeight}px`;
  mini3.style.height = `${eachHeight}px`;
  }
}

window.addEventListener('load', syncMiniSlidersHeight);
window.addEventListener('resize', syncMiniSlidersHeight);
