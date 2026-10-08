// Forms are intentionally local demonstrations, with native validation.
document.querySelectorAll('[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    status.textContent = form.classList.contains('contact-form')
      ? 'Your message is valid. This is a demo form; no message has been sent.'
      : 'Your email is valid. This is a demo form; no subscription has been created.';
  });
});

// No autoplay: users control the carousel. Announce manually selected slides.
document.querySelectorAll('.carousel').forEach((carousel) => {
  const slides = carousel.querySelectorAll('.carousel-item');
  const updateSlides = () => slides.forEach((slide) => {
    slide.setAttribute('aria-hidden', String(!slide.classList.contains('active')));
  });
  updateSlides();
  carousel.addEventListener('slid.bs.carousel', (event) => {
    updateSlides();
    const status = carousel.parentElement.querySelector('.carousel-status');
    status.textContent = `Image ${event.to + 1} of ${slides.length}: ${slides[event.to].querySelector('h3').textContent.trim()}`;
  });
});
