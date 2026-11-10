/* Assignment 6. Browser-only jQuery store. No server, authentication or real payments. */
$(document).ready(function () {
  'use strict';
  console.log('jQuery is ready!');
  const games = window.HUB_GAMES;
  const byId = new Map(games.map(game => [game.id, game]));
  const storageKey = 'eggs-game-hub-v6';
  const money = cents => '$' + (cents / 100).toFixed(2);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const escapeHTML = value => $('<span>').text(String(value)).html();
  const newProfile = (name, id) => ({ id, name, balance: 10000, owned: [], ratings: {} });
  const freshState = () => ({ active: 'player-1', profiles: [newProfile('Player 1', 'player-1')] });
  let state = freshState();
  let storageAvailable = true;

  function readState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (!saved || !Array.isArray(saved.profiles)) return freshState();
      const profiles = saved.profiles.filter(p => p && typeof p.id === 'string' && typeof p.name === 'string')
        .slice(0, 20).map(p => ({
          id: p.id, name: p.name.slice(0, 24),
          balance: Number.isSafeInteger(p.balance) && p.balance >= 0 ? p.balance : 10000,
          owned: [...new Set((Array.isArray(p.owned) ? p.owned : []).filter(id => byId.has(id)))],
          ratings: Object.fromEntries(Object.entries(p.ratings || {}).filter(([id, value]) => byId.has(id) && Number.isInteger(value) && value >= 1 && value <= 5)),
        }));
      if (!profiles.length) return freshState();
      return { active: profiles.some(p => p.id === saved.active) ? saved.active : profiles[0].id, profiles };
    } catch {
      storageAvailable = false;
      return state;
    }
  }
  function saveState(next) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      state = next;
      return true;
    } catch {
      storageAvailable = false;
      toast('Browser storage is unavailable. Enable local storage to save profiles and purchases.', true);
      return false;
    }
  }
  state = readState();
  // Only an actual refresh refills wallets. Normal navigation keeps the current balance.
  if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
    state.profiles.forEach(p => { p.balance = 10000; });
    saveState(state);
  }
  const profile = () => state.profiles.find(p => p.id === state.active);

  $('body').append('<div class="scroll-meter" aria-hidden="true"><span></span></div><div class="hub-toasts" role="status" aria-live="polite" aria-atomic="false"></div>');
  function toast(message, error = false) {
    const $toast = $('<div class="hub-toast">').toggleClass('is-error', error).text(message).hide();
    $('.hub-toasts').append($toast);
    $toast.fadeIn(reducedMotion ? 0 : 180).delay(3600).fadeOut(reducedMotion ? 0 : 300, function () { $(this).remove(); });
  }

  // Task 4: a styled progress bar reflects the scrollable part of the document.
  function updateScrollProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    $('.scroll-meter > span').css('width', (max > 0 ? Math.min(100, window.scrollY / max * 100) : 0) + '%');
  }
  $(window).on('scroll resize', updateScrollProgress);
  updateScrollProgress();

  // Enhance the older Featured page cards with the same purchases and ratings.
  $('.game-card:not([data-game])').each(function () {
    const title = $(this).find('h3').first().text().trim();
    const game = games.find(g => g.title === title || g.title.replace('’', "'") === title);
    if (!game) return;
    $(this).attr('data-game', game.id);
    const $body = $(this).find('.card-body');
    $body.find('.price, .rating').remove();
    $body.append($('<div class="game-purchase-row">').append($('<span class="price">').text(game.cents ? money(game.cents) : 'Free'), $('<button type="button" class="buy-button">').attr('data-buy', game.id)));
    $body.append($('<div class="personal-rating">').attr('data-rating-for', game.id));
  });

  function ensureDetailsLinks() {
    $('[data-game]').each(function () {
      const $card = $(this);
      const id = $card.attr('data-game');
      if (!byId.has(id) || $card.find('.detail-button').length) return;
      const $link = $('<a class="detail-button" target="_blank" rel="noopener noreferrer">')
        .attr('href', 'game-details.html?game=' + encodeURIComponent(id))
        .text('More details');
      const $rating = $card.find('.personal-rating').first();
      const $purchase = $card.find('.game-purchase-row').first();
      if ($rating.length) $link.insertBefore($rating);
      else if ($purchase.length) $link.insertAfter($purchase);
      else {
        const $body = $card.find('.game-copy, .card-body').first();
        $link.appendTo($body.length ? $body : $card);
      }
    });
  }
  ensureDetailsLinks();

  let ratingIndex = 0;
  $('[data-rating-for]').each(function () {
    const id = $(this).attr('data-rating-for');
    const game = byId.get(id);
    const group = 'personal-rating-' + ratingIndex++;
    const $fieldset = $('<fieldset>');
    $fieldset.append($('<legend class="rating-legend">').append($('<span>').text('Your rating'), $('<span data-rating-value>')));
    const $options = $('<div class="rating-options">');
    for (let value = 1; value <= 5; value++) {
      const inputId = group + '-' + value;
      $options.append($('<input type="radio" class="visually-hidden">').attr({ id: inputId, name: group, value, 'data-rate-game': id, 'aria-label': `${game.title}: ${value} out of 5 stars` }));
      $options.append($('<label>').attr('for', inputId).html('<span aria-hidden="true">★</span>'));
    }
    $options.append($('<button type="button" data-clear-rating>Clear</button>').attr({ 'data-clear-rating': id, 'aria-label': `Clear your rating for ${game.title}` }));
    $fieldset.append($options);
    $(this).append($fieldset);
  });

  // Persist a personal rating for each game, independently for each profile.
  $(document).on('change', '[data-rate-game]', function () {
    state = readState();
    const id = $(this).attr('data-rate-game');
    profile().ratings[id] = Number(this.value);
    if (saveState(state)) toast(`${byId.get(id).title}: rated ${this.value}/5.`);
    renderState();
  });
  $(document).on('click', '[data-clear-rating]', function () {
    state = readState();
    delete profile().ratings[$(this).attr('data-clear-rating')];
    if (saveState(state)) toast('Your rating has been cleared.');
    renderState();
  });

  const $profiles = $(`<dialog class="hub-dialog" id="profiles-dialog" aria-labelledby="profiles-title"><button class="dialog-close" type="button" data-close-hub-dialog aria-label="Close profiles">×</button><p class="eyebrow">MAKE YOURSELF AT HOME</p><h2 id="profiles-title">Choose your player</h2><p>Each local profile has its own wallet, library and ratings.</p><div class="profile-list" data-profile-list></div><form id="create-profile"><label for="profile-name">Add a player</label><div class="profile-create-row"><input class="form-control" id="profile-name" name="player" placeholder="Player name" required maxlength="24" autocomplete="off"><button type="submit" class="buy-button">Create</button></div><p class="profile-error" role="status"></p></form><p class="profile-note mt-3 mb-0">Frontend demo · Saved in this browser. Every refresh refills all wallets to $100; games and ratings stay saved.</p></dialog>`).appendTo('body');
  const $checkout = $(`<dialog class="hub-dialog" id="checkout-dialog" aria-labelledby="checkout-title"><button class="dialog-close" type="button" data-close-hub-dialog aria-label="Close checkout">×</button><p class="eyebrow" data-checkout-kicker>ADD TO YOUR COLLECTION</p><h2 id="checkout-title">Get this game</h2><img class="purchase-cover" data-checkout-image alt=""><h3 class="h5" data-checkout-name></h3><p data-checkout-note></p><div class="checkout-line"><span data-checkout-cost-label>Game price</span><span data-checkout-cost></span></div><div class="checkout-line"><span>Your balance</span><span data-checkout-balance></span></div><div class="checkout-line"><span>Balance afterwards</span><strong data-checkout-after></strong></div><p class="purchase-error" role="alert" data-checkout-error></p><form id="checkout-form"><div class="dialog-actions"><button type="button" class="text-button" data-close-hub-dialog>Cancel</button><button type="submit" class="buy-button" data-checkout-confirm>Confirm purchase</button></div></form></dialog>`).appendTo('body');
  let dialogTrigger;
  let transaction = null;
  let busy = false;
  function openDialog($dialog, trigger) {
    dialogTrigger = trigger;
    $dialog[0].showModal();
  }
  $(document).on('click', '[data-close-hub-dialog]', function () {
    if (!busy) $(this).closest('dialog')[0].close();
  });
  $('.hub-dialog').on('cancel', function (event) { if (busy) event.preventDefault(); });
  $('.hub-dialog').on('close', function () { if (dialogTrigger?.isConnected) dialogTrigger.focus(); });
  $('[data-open-profiles]').on('click', function () { renderProfiles(); openDialog($profiles, this); });
  function renderProfiles() {
    const $list = $('[data-profile-list]').empty();
    state.profiles.forEach(p => {
      const $button = $('<button class="profile-option" type="button">').attr({ 'data-switch-profile': p.id, 'aria-pressed': String(p.id === state.active) });
      $button.append($('<span class="avatar">').text(p.name.charAt(0).toUpperCase()), $('<span>').text(p.name), $('<small>').text(money(p.balance)));
      $list.append($button);
    });
  }
  $(document).on('click', '[data-switch-profile]', function () {
    state = readState();
    const id = $(this).attr('data-switch-profile');
    if (!state.profiles.some(p => p.id === id)) return;
    state.active = id;
    if (saveState(state)) {
      renderState();
      $profiles[0].close();
      toast(`Welcome, ${profile().name}.`);
    }
  });
  $('#create-profile').on('submit', function (event) {
    event.preventDefault();
    const name = $('#profile-name').val().trim();
    state = readState();
    let error = '';
    if (!name) error = 'Enter a player name.';
    else if (state.profiles.some(p => p.name.toLowerCase() === name.toLowerCase())) error = 'That player already exists. Choose them above or use another name.';
    else if (state.profiles.length >= 20) error = 'This browser already has 20 profiles.';
    $('.profile-error').text(error);
    if (error) return;
    const id = 'player-' + (window.crypto?.randomUUID?.() || Date.now() + '-' + Math.random().toString(16).slice(2));
    state.profiles.push(newProfile(name, id));
    state.active = id;
    if (saveState(state)) {
      this.reset();
      renderState();
      $profiles[0].close();
      toast(`${name}, your $100 demo wallet is ready.`);
    }
  });

  // Community registration: name -> email -> password; create a local player only.
  const $registration = $('[data-registration-form]');
  if ($registration.length) {
    let registrationStep = 0;
    let registrationBusy = false;
    const registrationLabels = ['Your player name', 'Your email address', 'Your demo password'];
    const $panels = $registration.find('[data-registration-step]');
    const $name = $('#register-name');
    const $email = $('#register-email');
    const $password = $('#register-password');
    const $confirm = $('#register-confirm');
    function registrationError($field, message) {
      $field.toggleClass('is-invalid', Boolean(message));
      if (message) $field.attr('aria-invalid', 'true');
      else $field.removeAttr('aria-invalid');
      $('#' + $field.attr('id') + '-error').text(message).prop('hidden', !message);
      return !message;
    }
    function validateRegistrationField(field) {
      const $field = $(field);
      let error = '';
      if (!field.value.trim()) error = 'Please complete this field.';
      else if (field === $name[0]) {
        state = readState();
        if (state.profiles.some(p => p.name.toLowerCase() === field.value.trim().toLowerCase())) error = 'This player name already exists. Choose another name or switch profiles in the header.';
        else if (state.profiles.length >= 20) error = 'This browser already has 20 player profiles.';
      } else if (field === $email[0] && (field.validity.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()))) error = 'Enter a valid email address, such as player@example.com.';
      else if (field === $password[0] && field.value.length < 8) error = 'Use at least 8 characters.';
      else if (field === $confirm[0] && field.value !== $password.val()) error = 'Passwords do not match.';
      return registrationError($field, error);
    }
    function showRegistrationStep(step, moveFocus = true) {
      registrationStep = step;
      $panels.each(function (index) { $(this).prop('hidden', index !== step); });
      $registration.find('[data-registration-progress]').text(`Step ${step + 1} of 3 · ${registrationLabels[step]}`);
      $registration.find('[data-registration-indicator]').each(function (index) {
        $(this).toggleClass('is-complete', index < step);
        if (index === step) $(this).attr('aria-current', 'step');
        else $(this).removeAttr('aria-current');
      });
      $registration.find('[data-registration-back]').prop('hidden', step === 0);
      $registration.find('[data-registration-next]').text(step === 2 ? 'Create player profile' : 'Continue →');
      $registration.find('[data-registration-status]').empty();
      if (moveFocus) $panels.eq(step).find('input').first().trigger('focus');
    }
    function resetRegistration() {
      if (registrationBusy) return;
      $registration[0].reset();
      $registration.find('input').each(function () { registrationError($(this), ''); });
      $registration.find('[data-registration-success]').prop('hidden', true);
      $registration.find('[data-registration-actions], [data-registration-progress]').prop('hidden', false);
      showRegistrationStep(0);
    }
    $registration.on('input', 'input', function () {
      if ($(this).attr('aria-invalid') === 'true') validateRegistrationField(this);
      if (this === $password[0] && $confirm.attr('aria-invalid') === 'true') validateRegistrationField($confirm[0]);
      $registration.find('[data-registration-status]').empty();
    });
    $registration.find('[data-registration-back]').on('click', function () {
      if (!registrationBusy) showRegistrationStep(Math.max(0, registrationStep - 1));
    });
    $registration.find('[data-registration-clear], [data-registration-restart]').on('click', resetRegistration);
    $registration.on('submit', function (event) {
      event.preventDefault();
      if (registrationBusy) return;
      const invalid = $panels.eq(registrationStep).find('input').toArray().filter(field => !validateRegistrationField(field));
      if (invalid.length) { invalid[0].focus(); return; }
      if (registrationStep < 2) { showRegistrationStep(registrationStep + 1); return; }
      // Recheck the name as another tab may have created it while steps were filled.
      if (!validateRegistrationField($name[0])) { showRegistrationStep(0); return; }
      registrationBusy = true;
      const playerName = $name.val().trim();
      const $submit = $registration.find('[data-registration-next]');
      $registration.attr('aria-busy', 'true').find('button, input').prop('disabled', true);
      $submit.html('<span class="spinner" aria-hidden="true"></span>Please wait…');
      setTimeout(function () {
        state = readState();
        let saved = false;
        const duplicate = state.profiles.some(p => p.name.toLowerCase() === playerName.toLowerCase());
        if (!duplicate && state.profiles.length < 20) {
          const id = 'player-' + (window.crypto?.randomUUID?.() || Date.now() + '-' + Math.random().toString(16).slice(2));
          state.profiles.push(newProfile(playerName, id));
          state.active = id;
          saved = saveState(state);
        }
        registrationBusy = false;
        $registration.removeAttr('aria-busy').find('button, input').prop('disabled', false);
        $submit.text('Create player profile');
        if (!saved) {
          state = readState();
          showRegistrationStep(0);
          registrationError($name, duplicate ? 'This player name was just taken. Choose another name.' : 'Could not create the profile. Check browser storage or choose an existing player.');
          return;
        }
        // Only the public name is saved. Email and passwords never enter localStorage.
        $registration[0].reset();
        $panels.prop('hidden', true);
        $registration.find('[data-registration-actions], [data-registration-progress]').prop('hidden', true);
        $registration.find('[data-registration-indicator]').removeAttr('aria-current').addClass('is-complete');
        $registration.find('[data-registration-welcome]').text(`Welcome, ${playerName}! Your local player profile and $100 demo wallet are ready.`);
        $registration.find('[data-registration-success]').prop('hidden', false).trigger('focus');
        renderState();
        toast(`Welcome, ${playerName}. Your $100 wallet is ready.`);
      }, 700);
    });
    showRegistrationStep(0, false);
  }

  function startTransaction(id, kind, trigger) {
    state = readState();
    const game = byId.get(id);
    if (!game) return;
    const p = profile();
    const owned = p.owned.includes(id);
    if (kind === 'buy' && owned) { toast('Already in your library.'); return; }
    if (kind === 'refund' && !owned) { toast('This game is no longer in your library.', true); return; }
    transaction = { id, kind, profileId: p.id };
    const refund = kind === 'refund';
    $('[data-checkout-kicker]').text(refund ? 'BACK TO YOUR WALLET' : 'ADD TO YOUR COLLECTION');
    $('#checkout-title').text(refund ? 'Return this game?' : game.cents ? 'Make it yours' : 'A new adventure, for free');
    $('[data-checkout-name]').text(game.title);
    $('[data-checkout-image]').attr({ src: game.image, alt: game.title + ' cover artwork' });
    $('[data-checkout-note]').text(refund ? 'The game will leave your library. Your full virtual purchase price will return to your wallet.' : 'A virtual purchase for ' + p.name + '. Your wallet refills to $100 on refresh. Your collection stays saved.');
    $('[data-checkout-cost-label]').text(refund ? 'Refund amount' : 'Game price');
    $('[data-checkout-cost]').text(money(game.cents));
    $('[data-checkout-balance]').text(money(p.balance));
    const after = p.balance + (refund ? game.cents : -game.cents);
    $('[data-checkout-after]').text(money(after));
    $('[data-checkout-error]').text(after < 0 ? 'Not enough demo funds. Pick a cheaper game, return one, or refresh to refill your wallet.' : '');
    $('[data-checkout-confirm]').prop('disabled', after < 0).text(refund ? 'Confirm return' : game.cents ? 'Confirm purchase' : 'Add to library');
    openDialog($checkout, trigger);
  }
  $(document).on('click', '[data-buy]', function () { startTransaction($(this).attr('data-buy'), 'buy', this); });
  $(document).on('click', '[data-refund]', function () { startTransaction($(this).attr('data-refund'), 'refund', this); });

  // Tasks 6-7: disabled submit + spinner during the simulated call, followed by a toast.
  $('#checkout-form').on('submit', function (event) {
    event.preventDefault();
    if (busy || !transaction) return;
    busy = true;
    const pending = { ...transaction };
    const $confirm = $('[data-checkout-confirm]');
    $confirm.prop('disabled', true).html('<span class="spinner" aria-hidden="true"></span>Please wait…');
    $checkout.attr('aria-busy', 'true').find('[data-close-hub-dialog]').prop('disabled', true);
    setTimeout(function () {
      state = readState();
      const p = state.profiles.find(p => p.id === pending.profileId);
      const game = byId.get(pending.id);
      let error = '';
      if (!p || state.active !== pending.profileId) error = 'The active player changed. Please try again.';
      else if (pending.kind === 'buy') {
        if (p.owned.includes(game.id)) error = 'This game is already in your library.';
        else if (p.balance < game.cents) error = 'Your balance changed. There are not enough funds.';
        else { p.balance -= game.cents; p.owned.push(game.id); }
      } else {
        if (!p.owned.includes(game.id)) error = 'This game has already been returned.';
        else { p.balance += game.cents; p.owned = p.owned.filter(id => id !== game.id); }
      }
      let saved = false;
      if (!error) saved = saveState(state);
      if (!saved && !error) error = 'Could not save the purchase. Check your browser storage and try again.';
      busy = false;
      $checkout.removeAttr('aria-busy').find('[data-close-hub-dialog]').prop('disabled', false);
      $confirm.prop('disabled', false).text(pending.kind === 'buy' ? 'Confirm purchase' : 'Confirm return');
      if (error) {
        state = readState();
        $('[data-checkout-error]').text(error);
      } else {
        $checkout[0].close();
        toast(pending.kind === 'buy' ? game.title + ' added to your library.' : game.title + ' returned. ' + money(game.cents) + ' refunded.');
      }
      renderState();
    }, 700);
  });

  function renderState() {
    const p = profile();
    $('[data-profile-name]').text(p.name);
    $('.profile-button .avatar').text(p.name.charAt(0).toUpperCase());
    $('[data-wallet]').text(money(p.balance));
    $('[data-owned-count]').text(p.owned.length);
    $('[data-buy]').each(function () {
      const game = byId.get($(this).attr('data-buy'));
      if (!game) return;
      const owned = p.owned.includes(game.id);
      $(this).prop('disabled', owned).toggleClass('is-owned', owned).text(owned ? '✓ In library' : game.cents ? 'Buy game' : 'Add to library');
    });
    $('[data-rating-for]').each(function () {
      const id = $(this).attr('data-rating-for');
      const value = p.ratings[id] || 0;
      $(this).find('[data-rating-value]').text(value ? value + '/5' : 'Not rated');
      $(this).find('input').each(function () {
        $(this).prop('checked', Number(this.value) === value);
        $(this).next('label').toggleClass('is-selected', Number(this.value) <= value);
      });
      $(this).find('[data-clear-rating]').prop('disabled', !value);
    });
    $('[data-library] [data-game]').each(function () {
      const id = $(this).attr('data-game');
      let $button = $(this).find('[data-refund]');
      if (!$button.length) {
        $button = $('<button type="button" class="refund-button">').attr('data-refund', id).appendTo($(this).find('.game-copy'));
      }
      $button.text(byId.get(id).cents ? 'Return game · ' + money(byId.get(id).cents) + ' refund' : 'Remove from library');
    });
    updateCatalogue();
    renderProfiles();
  }

  // Tasks 1-3: jQuery filtering, autocomplete and safe text highlighting.
  const $catalogue = $('[data-store-catalogue]');
  const $search = $('#store-search');
  const $suggestions = $('#search-suggestions');
  let selectedSuggestion = -1;
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q') || '';
  $search.val(initialQuery);
  $('#game-search').val(initialQuery);
  if (params.get('price') === 'free') $('#game-budget').val('free');

  function highlighted(text, query) {
    if (!query) return escapeHTML(text);
    // Escape regex metacharacters. User input is never inserted as raw HTML.
    const pattern = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp('(' + pattern + ')', 'gi'));
    return parts.map((part, index) => index % 2 ? '<mark>' + escapeHTML(part) + '</mark>' : escapeHTML(part)).join('');
  }
  function matchesPrice(game, budget) {
    switch (budget) {
      case 'free': return game.cents === 0;
      case 'under30': return game.cents > 0 && game.cents < 3000;
      case 'premium': return game.cents >= 3000;
      case 'affordable': return game.cents <= profile().balance;
      default: return true;
    }
  }
  function updateCatalogue() {
    if (!$catalogue.length) return;
    const query = String($('#game-search').val() || '').trim();
    const genre = $('#game-genre').val();
    const budget = $('#game-budget').val();
    const isLibrary = $catalogue.is('[data-library]');
    const $cards = $catalogue.find('[data-game]');
    const $matches = $cards.filter(function () {
      const game = byId.get($(this).attr('data-game'));
      return (!isLibrary || profile().owned.includes(game.id)) &&
        (genre === 'all' || genre === game.genre) && matchesPrice(game, budget) &&
        (game.title + ' ' + game.genre + ' ' + (window.HUB_I18N?.t(game.genre) || game.genre)).toLowerCase().includes(query.toLowerCase());
    });
    $cards.prop('hidden', true);
    $matches.prop('hidden', false);
    $cards.each(function () {
      const game = byId.get($(this).attr('data-game'));
      $(this).find('h3').html(highlighted(game.title, query));
      $(this).find('.game-genre').html(highlighted(game.genre, query));
      $(this).find('.game-description').html(highlighted(game.description, query));
    });
    const total = isLibrary ? profile().owned.length : games.length;
    $('[data-catalogue-status]').text(`Showing ${$matches.length} of ${total} games`);
    $('[data-catalogue-empty]').prop('hidden', $matches.length > 0);
    $('[data-empty-message]').text(isLibrary && !total ? 'Your collection starts here. Visit the store and find your first game.' : 'Try a different search, genre or price, or reset your filters.');
    loadVisibleImages();
  }
  $('#game-search').on('input', function () { $search.val(this.value); updateCatalogue(); });
  $('#game-genre, #game-budget').on('change', updateCatalogue);
  $('[data-reset-filters]').on('click', function () {
    $('#game-genre, #game-budget').val('all');
    $('#game-search, #store-search').val('');
    closeSuggestions();
    updateCatalogue();
  });
  function closeSuggestions() {
    $suggestions.prop('hidden', true);
    $search.attr('aria-expanded', 'false').removeAttr('aria-activedescendant');
    selectedSuggestion = -1;
  }
  function showSuggestions() {
    const query = String($search.val()).trim();
    $suggestions.empty();
    selectedSuggestion = -1;
    $search.removeAttr('aria-activedescendant');
    if (!query) { closeSuggestions(); return; }
    const matches = games.filter(g => (g.title + ' ' + g.genre + ' ' + (window.HUB_I18N?.t(g.genre) || g.genre)).toLowerCase().includes(query.toLowerCase())).slice(0, 5);
    matches.forEach((game, index) => {
      const $option = $('<button type="button" role="option" aria-selected="false">').attr({ id: 'suggestion-' + index, 'data-suggest': game.id, tabindex: '-1' });
      $option.append($('<img alt="">').attr('src', game.image), $('<span>').html(highlighted(game.title, query)), $('<small>').text(game.cents ? money(game.cents) : 'Free'));
      $suggestions.append($('<li role="presentation">').append($option));
    });
    if (!matches.length) $suggestions.append('<li class="suggestion-empty" role="presentation">No games found. Try another name or genre.</li>');
    $suggestions.prop('hidden', false);
    $search.attr('aria-expanded', 'true');
  }
  function chooseSuggestion(id) {
    const game = byId.get(id);
    if ($catalogue.length) {
      $('#game-search, #store-search').val(game.title);
      $('#game-genre, #game-budget').val('all');
      updateCatalogue();
      closeSuggestions();
      document.getElementById('catalogue').scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
    } else window.location.href = 'games.html?q=' + encodeURIComponent(game.title);
  }
  $search.on('input', function () {
    if ($catalogue.length) { $('#game-search').val(this.value); updateCatalogue(); }
    showSuggestions();
  }).on('focus', showSuggestions).on('keydown', function (event) {
    const $options = $suggestions.find('[data-suggest]');
    if (event.key === 'Escape') { closeSuggestions(); return; }
    if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && $options.length) {
      event.preventDefault();
      $suggestions.prop('hidden', false);
      $search.attr('aria-expanded', 'true');
      selectedSuggestion = (selectedSuggestion + (event.key === 'ArrowDown' ? 1 : -1) + $options.length) % $options.length;
      $options.attr('aria-selected', 'false').eq(selectedSuggestion).attr('aria-selected', 'true');
      $search.attr('aria-activedescendant', $options.eq(selectedSuggestion).attr('id'));
    } else if (event.key === 'Enter' && !$suggestions.prop('hidden') && selectedSuggestion >= 0) {
      event.preventDefault();
      chooseSuggestion($options.eq(selectedSuggestion).attr('data-suggest'));
    }
  });
  $suggestions.on('pointerdown', function (event) { event.preventDefault(); });
  $suggestions.on('click', '[data-suggest]', function () { chooseSuggestion($(this).attr('data-suggest')); });
  $(document).on('pointerdown', function (event) { if (!$(event.target).closest('.store-search').length) closeSuggestions(); });
  $search.on('blur', closeSuggestions);
  $('.store-search').on('submit', function (event) { if ($catalogue.length) { event.preventDefault(); closeSuggestions(); updateCatalogue(); } });

  // Task 9: swap data-src only when an image enters the viewport, using jQuery.
  $('img[loading="lazy"]:not([data-src])').each(function () {
    $(this).attr('data-src', $(this).attr('src')).removeAttr('src');
  });
  function loadVisibleImages() {
    const bottom = window.scrollY + window.innerHeight + 120;
    $('img[data-src]').each(function () {
      if (this.getClientRects().length && $(this).offset().top < bottom) {
        $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
      }
    });
  }
  $(window).on('scroll resize', loadVisibleImages);
  // Task 5: animate counters once, when their section becomes visible.
  function animateCounters() {
    $('[data-counter]:not([data-counted])').each(function () {
      if (this.getBoundingClientRect().top >= window.innerHeight) return;
      const $element = $(this).attr('data-counted', 'true');
      const target = Number($element.attr('data-counter'));
      const prefix = $element.attr('data-counter-prefix') || '';
      $({ count: 0 }).animate({ count: target }, {
        duration: reducedMotion ? 0 : 1100,
        step(value) { $element.text(prefix + Math.floor(value)); },
        complete() { $element.text(prefix + target); },
      });
    });
  }
  $(window).on('scroll resize', animateCounters);
  animateCounters();

  // Task 8: copy a share link, switch to a checkmark and show a tooltip/status.
  $('[data-copy-link]').on('click', async function () {
    const $button = $(this);
    const text = $('[data-share-url]').text();
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else {
        const $input = $('<textarea readonly>').val(text).css({ position: 'fixed', left: '-9999px' }).appendTo('body');
        $input[0].select();
        const copied = document.execCommand('copy');
        $input.remove();
        $button.trigger('focus');
        if (!copied) throw new Error('Copy unavailable');
      }
      $button.text('✓ Copied').attr('title', 'Copied to clipboard!');
      $('[data-copy-status]').text('Copied to clipboard!');
      toast('Hub link copied to clipboard.');
      clearTimeout($button.data('copy-timeout'));
      $button.data('copy-timeout', setTimeout(function () { $button.text('Copy link').removeAttr('title'); $('[data-copy-status]').empty(); }, 2500));
    } catch { $('[data-copy-status]').text('Copy unavailable. Select the link to copy it manually.'); }
  });

  const featured = [
    { id: 'dota-2', image: 'images/about-gallery/dota2.jpg', tagline: 'One battlefield. Infinite possibilities.', tags: ['MOBA', 'Multiplayer', 'Strategy'] },
    { id: 'cyberpunk-2077', image: 'images/games/cyberpunk-2077-screenshot.jpg', tagline: 'Night City is waiting for your story.', tags: ['RPG', 'Open world', 'Sci-fi'] },
    { id: 'elden-ring', image: 'images/games/elden-ring-screenshot.jpg', tagline: 'A world of wonder. A journey of your own.', tags: ['RPG', 'Exploration', 'Fantasy'] },
  ];
  let featureIndex = 0;
  function showFeature(index) {
    featureIndex = (index + featured.length) % featured.length;
    const slide = featured[featureIndex];
    const game = byId.get(slide.id);
    $('[data-feature-image], [data-feature-preview]').attr({ src: slide.image, alt: game.title + ' featured artwork' });
    $('[data-feature-title], [data-feature-name]').text(game.title);
    $('[data-feature-tagline]').text(slide.tagline);
    $('[data-feature-kicker]').text((game.cents ? 'FEATURED' : 'FREE TO PLAY') + ' · ' + game.genre);
    $('[data-feature-description]').text(game.description);
    $('[data-feature-price]').text(game.cents ? money(game.cents) : 'Free');
    $('[data-feature-tags]').empty().append(slide.tags.map(tag => $('<span>').text(tag)[0]));
    $('[data-feature-buy]').attr('data-buy', slide.id);
    $('[data-feature-details]').attr('href', 'game-details.html?game=' + encodeURIComponent(slide.id));
    $('[data-feature-index]').each(function () { $(this).attr('aria-pressed', String(Number($(this).attr('data-feature-index')) === featureIndex)); });
    renderState();
  }
  $('[data-feature-step]').on('click', function () { showFeature(featureIndex + Number($(this).attr('data-feature-step'))); });
  $('[data-feature-index]').on('click', function () { showFeature(Number($(this).attr('data-feature-index'))); });

  // Add submission feedback to the existing validated contact and newsletter forms.
  $('[data-demo-form]').on('submit', function () {
    const $form = $(this);
    if ($form.find('[aria-invalid="true"]').length || $form.data('submitting')) return;
    const $button = $form.find('[type="submit"]');
    const original = $button.html();
    $form.data('submitting', true).attr('aria-busy', 'true');
    $button.prop('disabled', true).html('<span class="spinner" aria-hidden="true"></span>Please wait…');
    $form.find('.form-status').text('Please wait…');
    setTimeout(function () {
      $button.prop('disabled', false).html(original);
      $form.removeAttr('aria-busy').data('submitting', false);
      $form.find('.form-status').text('Submitted successfully in this demo. No data was sent to a server.');
      toast('Form submitted successfully in this demo.');
    }, 800);
  });
  $(window).on('storage pageshow', function () { state = readState(); renderState(); });
  renderState();
  loadVisibleImages();
  if (!storageAvailable) toast('Local storage is unavailable. Enable it to save purchases and ratings.', true);
});
