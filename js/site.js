// Assignment 4, Task 1: validate every demo form without sending or storing data.
document.querySelectorAll('[data-demo-form]').forEach((form) => {
  const fields = [...form.querySelectorAll('input, select, textarea')]
    .filter((field) => field.required || field.type === 'email' || field.dataset.matches);
  const status = form.querySelector('.form-status');
  let submitted = false;

  // Keep native validation as a fallback when JavaScript is unavailable.
  form.noValidate = true;
  fields.forEach((field) => {
    const error = document.createElement('p');
    error.id = `${field.id}-error`;
    error.className = 'field-error small mt-2 mb-0';
    error.hidden = true;
    const group = field.closest('.input-group, .form-check') || field;
    group.insertAdjacentElement('afterend', error);
    field.setAttribute('aria-describedby', [field.getAttribute('aria-describedby'), error.id]
      .filter(Boolean).join(' '));
  });

  const validate = (field) => {
    const label = field.labels[0]?.textContent.trim() || 'This field';
    let message = '';
    if (field.required && (field.type === 'checkbox' ? !field.checked : !field.value.trim())) {
      message = field.type === 'checkbox' ? 'Please check this box to continue.' : `${label} is required.`;
    } else if (field.type === 'email' && field.value &&
      (field.validity.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()))) {
      message = 'Enter a valid email address, such as player@example.com.';
    } else if (field.minLength > 0 && field.value.length < field.minLength) {
      message = `${label} must contain at least ${field.minLength} characters.`;
    } else if (field.dataset.matches && field.value !== form.elements.namedItem(field.dataset.matches).value) {
      message = 'Passwords do not match.';
    }
    const error = document.getElementById(`${field.id}-error`);
    error.textContent = message;
    error.hidden = !message;
    field.classList.toggle('is-invalid', Boolean(message));
    if (message) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    return !message;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitted = true;
    const invalidFields = fields.filter((field) => !validate(field));
    status.dataset.state = invalidFields.length ? 'error' : 'success';
    if (invalidFields.length) {
      status.textContent = `Please correct ${invalidFields.length} ${invalidFields.length === 1 ? 'field' : 'fields'} and try again.`;
      invalidFields[0].focus();
      return;
    }
    status.textContent = form.dataset.successMessage || (form.classList.contains('contact-form')
      ? 'Your message is valid. This is a demo form; no message has been sent.'
      : 'Your email is valid. This is a demo form; no subscription has been created.');
  });

  const updateField = (event) => {
    status.textContent = '';
    if (!submitted) return;
    if (fields.includes(event.target)) validate(event.target);
    // Editing the original password must also re-check its confirmation.
    fields.filter((field) => field.dataset.matches === event.target.name).forEach(validate);
  };
  form.addEventListener('input', updateField);
  form.addEventListener('change', updateField);
  form.addEventListener('reset', () => {
    submitted = false;
    status.textContent = '';
    delete status.dataset.state;
    fields.forEach((field) => {
      field.classList.remove('is-invalid');
      field.removeAttribute('aria-invalid');
      const error = document.getElementById(`${field.id}-error`);
      error.textContent = '';
      error.hidden = true;
    });
  });
});

// Task 2: accessible buttons toggle the answers; CSS animates their height.
document.querySelectorAll('[data-accordion-button]').forEach((button) => {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    panel.classList.toggle('is-open', expanded);
    panel.inert = !expanded;
  });
});

// Task 3: native dialog makes the page inert and supports Escape-to-close.
document.querySelectorAll('[data-open-dialog]').forEach((button) => {
  const dialog = document.getElementById(button.dataset.openDialog);
  button.addEventListener('click', () => {
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelectorAll('[data-subscription-dialog]').forEach((dialog) => {
  // Keep Tab and Shift+Tab cycling through the popup's controls.
  dialog.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const controls = [...dialog.querySelectorAll('button, input, select, textarea, a[href], [tabindex]')]
      .filter((element) => !element.disabled && element.tabIndex >= 0 && element.getClientRects().length);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  const outsideDialog = (event) => {
    const bounds = dialog.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
  };
  let startedOutside = false;
  dialog.addEventListener('pointerdown', (event) => {
    startedOutside = outsideDialog(event);
  });
  dialog.addEventListener('click', (event) => {
    if (startedOutside && outsideDialog(event)) dialog.close();
  });
  dialog.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
});

// Task 4: cycle through a readable dark palette by changing the body's CSS.
const backgroundButton = document.querySelector('[data-change-background]');
if (backgroundButton) {
  const backgrounds = [
    { name: 'Midnight', color: '#101820' },
    { name: 'Ocean', color: '#17283b' },
    { name: 'Plum', color: '#261d38' },
    { name: 'Forest', color: '#16342e' },
  ];
  let currentBackground = 0;
  backgroundButton.addEventListener('click', () => {
    currentBackground = (currentBackground + 1) % backgrounds.length;
    const background = backgrounds[currentBackground];
    document.body.style.backgroundColor = background.color;
    document.querySelector('[data-background-name]').textContent = background.name;
    backgroundButton.querySelector('.background-swatch').style.backgroundColor = background.color;
  });
}

// Task 5: show local time immediately, then refresh it once per second.
const clocks = document.querySelectorAll('[data-live-clock]');
if (clocks.length) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: '2-digit', second: '2-digit', timeZoneName: 'short',
  });
  const updateClock = () => {
    const now = new Date();
    clocks.forEach((clock) => {
      clock.dateTime = now.toISOString();
      clock.textContent = formatter.format(now);
    });
  };
  updateClock();
  setInterval(updateClock, 1000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateClock();
  });
}

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
