// Assignment 5, Section 1: DOM manipulation and styling.

// Select a group of stars, change their classes and update the feedback text.
document.querySelectorAll('[data-game-rating]').forEach((rating) => {
  const inputs = rating.querySelectorAll('input[type="radio"]');
  const stars = rating.querySelectorAll('[data-rating-star]');
  const status = rating.querySelector('[role="status"]');
  const resetButton = rating.querySelector('[data-reset-rating]');

  function updateRating(value) {
    stars.forEach((star) => {
      star.classList.toggle('is-selected', Number(star.dataset.ratingStar) <= value);
    });
    status.textContent = value > 0
      ? `You rated ${rating.dataset.gameRating} ${value} out of 5 stars.`
      : 'Choose a star to rate this game.';
    resetButton.disabled = value === 0;
  }

  inputs.forEach((input) => {
    input.addEventListener('change', () => updateRating(Number(input.value)));
  });

  resetButton.addEventListener('click', () => {
    inputs.forEach((input) => { input.checked = false; });
    updateRating(0);
    inputs[0].focus();
  });

  // Match the UI if the browser restores a previous radio selection on reload.
  const selected = rating.querySelector('input:checked');
  updateRating(selected ? Number(selected.value) : 0);
  rating.hidden = false;
});

// Content remains readable if JavaScript is unavailable.
document.querySelectorAll('[data-read-more]').forEach((button) => {
  const content = document.getElementById(button.getAttribute('aria-controls'));

  function setExpanded(expanded) {
    content.style.display = expanded ? 'block' : 'none';
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Read less' : 'Read more';
  }

  button.addEventListener('click', () => {
    setExpanded(button.getAttribute('aria-expanded') !== 'true');
  });

  setExpanded(false);
  button.hidden = false;
});

// Section 2: arrow keys move focus within each navigation, without following links.
document.querySelectorAll('nav').forEach((navigation) => {
  navigation.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const links = [...navigation.querySelectorAll('a[href]')]
      .filter((link) => link.getClientRects().length > 0);
    const current = links.indexOf(document.activeElement);
    if (current < 0) return;
    let next;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown': next = (current + 1) % links.length; break;
      case 'ArrowLeft':
      case 'ArrowUp': next = (current - 1 + links.length) % links.length; break;
      case 'Home': next = 0; break;
      case 'End': next = links.length - 1; break;
      default: return;
    }
    event.preventDefault();
    links[next].focus();
  });
});

// Sections 2-3: an object with a method, an array, filter callbacks and a for loop.
const catalogueSection = document.querySelector('[data-catalogue]');
if (catalogueSection) {
  const controls = catalogueSection.querySelector('[data-catalogue-controls]');
  const genre = controls.querySelector('[name="genre"]');
  const budget = controls.querySelector('[name="budget"]');
  const search = controls.querySelector('[name="search"]');
  const status = catalogueSection.querySelector('[data-catalogue-status]');
  const empty = catalogueSection.querySelector('[data-catalogue-empty]');
  const grid = catalogueSection.querySelector('.catalogue-cards');

  function matchesBudget(price, selection) {
    switch (selection) {
      case 'free': return price === 0;
      case 'under30': return price > 0 && price < 30;
      case 'premium': return price >= 30;
      default: return true;
    }
  }

  // Read the existing cards once so the catalogue also works without JavaScript.
  const catalogue = {
    games: [...grid.querySelectorAll('.game-card')].map((card) => ({
      title: card.querySelector('h3').textContent.trim(),
      genre: card.querySelector('.game-genre').textContent.trim(),
      price: Number(card.querySelector('.price').textContent.replace(/[^\d.]/g, '')),
      column: card.parentElement,
    })),
    findGames(selectedGenre, selectedBudget, query) {
      return this.games.filter((game) =>
        (selectedGenre === 'all' || game.genre === selectedGenre) &&
        matchesBudget(game.price, selectedBudget) &&
        game.title.toLowerCase().includes(query.trim().toLowerCase())
      );
    },
  };

  function updateCatalogue(animate = true) {
    const matches = catalogue.findGames(genre.value, budget.value, search.value);
    for (const game of catalogue.games) {
      game.column.hidden = !matches.includes(game);
      game.column.classList.remove('catalogue-enter');
    }
    // Restart the entrance animation after each filter change.
    if (animate) {
      void grid.offsetWidth;
      for (const game of matches) game.column.classList.add('catalogue-enter');
    }
    status.textContent = `Showing ${matches.length} of ${catalogue.games.length} games. Prices are sample content.`;
    empty.hidden = matches.length > 0;
  }

  genre.addEventListener('change', () => updateCatalogue());
  budget.addEventListener('change', () => updateCatalogue());
  search.addEventListener('input', () => updateCatalogue());
  controls.querySelector('[data-reset-filters]').addEventListener('click', () => {
    genre.value = 'all';
    budget.value = 'all';
    search.value = '';
    updateCatalogue();
  });
  controls.hidden = false;
  updateCatalogue(false);
}

// Section 2: the state object calls the supplied callback whenever a step changes.
const profileForm = document.querySelector('[data-profile-form]');
if (profileForm) {
  const panels = [...profileForm.querySelectorAll('[data-profile-step]')];
  const name = profileForm.elements.namedItem('player_name');
  const genre = profileForm.elements.namedItem('player_genre');
  const style = profileForm.elements.namedItem('player_style');
  const error = profileForm.querySelector('[data-profile-error]');
  const progress = profileForm.querySelector('[data-profile-progress]');
  const back = profileForm.querySelector('[data-profile-back]');
  const next = profileForm.querySelector('[data-profile-next]');
  const submit = profileForm.querySelector('[type="submit"]');
  const result = profileForm.querySelector('[data-profile-result]');
  const state = {
    step: 0,
    goTo(step, onStepChange) {
      this.step = Math.max(0, Math.min(step, panels.length - 1));
      onStepChange(this.step);
    },
  };

  function validateStep() {
    const fields = [...panels[state.step].querySelectorAll('input, select')];
    let firstInvalid = null;
    for (const field of fields) {
      const valid = field.value.trim() !== '' && field.checkValidity();
      field.classList.toggle('is-invalid', !valid);
      field.setAttribute('aria-invalid', String(!valid));
      if (!valid && !firstInvalid) firstInvalid = field;
    }
    error.textContent = firstInvalid ? 'Please complete the highlighted field before continuing.' : '';
    if (firstInvalid) firstInvalid.focus();
    return firstInvalid === null;
  }

  function showStep(index, moveFocus = true) {
    panels.forEach((panel, panelIndex) => { panel.hidden = panelIndex !== index; });
    progress.textContent = `Step ${index + 1} of ${panels.length}: ${panels[index].dataset.profileStep}`;
    back.hidden = index === 0;
    next.hidden = index === panels.length - 1;
    submit.hidden = index !== panels.length - 1;
    error.textContent = '';
    result.hidden = true;
    result.textContent = '';
    profileForm.querySelector('[data-profile-summary]').textContent =
      `${name.value.trim()} enjoys ${genre.value} games and prefers ${style.value.toLowerCase()} sessions.`;
    if (moveFocus) panels[index].querySelector('h3').focus();
  }

  next.addEventListener('click', () => {
    if (validateStep()) state.goTo(state.step + 1, showStep);
  });
  back.addEventListener('click', () => state.goTo(state.step - 1, showStep));
  profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (state.step < panels.length - 1) {
      next.click();
      return;
    }
    result.textContent = `Player card ready! ${profileForm.querySelector('[data-profile-summary]').textContent} This preview is only on this page; no account was created.`;
    result.hidden = false;
    result.focus();
  });
  profileForm.querySelector('[data-profile-restart]').addEventListener('click', () => {
    profileForm.reset();
    profileForm.querySelectorAll('[aria-invalid]').forEach((field) => {
      field.removeAttribute('aria-invalid');
      field.classList.remove('is-invalid');
    });
    state.goTo(0, showStep);
  });
  profileForm.addEventListener('input', (event) => {
    event.target.removeAttribute('aria-invalid');
    event.target.classList.remove('is-invalid');
    error.textContent = '';
  });
  profileForm.noValidate = true;
  showStep(0, false);
  profileForm.hidden = false;
}

// Section 3: play one local sound at a time, only after a user action.
const soundButton = document.querySelector('[data-play-sound]');
if (soundButton) {
  const audio = document.getElementById('notification-sound');
  const status = document.querySelector('[data-sound-status]');
  const visual = document.querySelector('[data-sound-visual]');
  let playing = false;

  function finishSound(message) {
    playing = false;
    soundButton.disabled = false;
    visual.classList.remove('is-playing');
    status.textContent = message;
  }

  soundButton.addEventListener('click', async () => {
    if (playing) return;
    playing = true;
    soundButton.disabled = true;
    try {
      audio.currentTime = 0;
      await audio.play();
      visual.classList.add('is-playing');
      status.textContent = 'Playing your notification sound.';
    } catch {
      finishSound('Sound could not play. Check your browser audio settings and try again.');
    }
  });
  audio.addEventListener('ended', () => finishSound('Sound finished. You can play it again.'));
  audio.addEventListener('error', () => finishSound('Sound is unavailable. Please reload and try again.'));
  soundButton.hidden = false;
}
