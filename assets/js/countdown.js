const countdownElements = document.querySelectorAll(".countdown");

const pad = n => String(n).padStart(2, "0");

countdownElements.forEach(el => {
  const targetTime = new Date(el.dataset.end).getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      clearInterval(interval);
      el.innerHTML = `<div class="expired-message">پیشنهاد به پایان رسید</div>`;
      const offerBody = el.closest('.col-7').querySelector('.offer-body');
      if (offerBody) {
        offerBody.classList.add('expired');
      }
      const timeLabel = el.closest('.row').querySelector('.text-time-offer');
      if (timeLabel) {
        timeLabel.style.display = "none";
      }
      const offerImage = el.closest('.bg-white').querySelector('.special-offer-image');
      if (offerImage) {
        offerImage.style.opacity = "0.5";
        offerImage.style.filter = "blur(1px)"; 
      }

      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    el.innerHTML = `
      <div class="unit"><div class="value">${pad(days)}</div><div class="label">روز</div></div>
      <div class="unit"><div class="value">${pad(hours)}</div><div class="label">ساعت</div></div>
      <div class="unit"><div class="value">${pad(minutes)}</div><div class="label">دقیقه</div></div>
      <div class="unit"><div class="value">${pad(seconds)}</div><div class="label">ثانیه</div></div>
    `;
  }, 1000);
});
