(function () {
  'use strict';

  const descriptions = {
    'counter-strike-2': {
      en: 'Counter-Strike 2 is a team-based tactical first-person shooter. In its classic competitive mode, two teams face off in short rounds, where accurate aim, smart equipment choices and clear coordination can turn the match.',
      ru: 'Counter-Strike 2 — командный тактический шутер от первого лица. В классическом соревновательном режиме две команды играют раундами: точная стрельба, выбор снаряжения и слаженные действия помогают переломить ход матча.',
      kk: 'Counter-Strike 2 — командалық тактикалық бірінші жақтан атылатын ойын. Классикалық бәсекелі режимде екі команда раундтарда ойнайды: дәл ату, жабдықты дұрыс таңдау және үйлесімді әрекет жеңіске жеткізеді.'
    },
    'grand-theft-auto-v': {
      en: 'Explore Los Santos and Blaine County in an open-world action adventure. The story follows three protagonists whose lives intersect; take on missions, drive across the city and discover the world at your own pace.',
      ru: 'Исследуйте Лос-Сантос и округ Блейн в приключении с открытым миром. История рассказывает о трёх героях, чьи судьбы пересекаются: выполняйте задания, ездите по городу и исследуйте мир в своём темпе.',
      kk: 'Ашық әлемдегі шытырман оқиғада Лос-Сантос пен Блейн округін зерттеңіз. Оқиға жолдары тоғысатын үш кейіпкер туралы: тапсырмаларды орындап, қалада көлік жүргізіп, әлемді өз қарқыныңызбен аралаңыз.'
    },
    'dota-2': {
      en: 'Dota 2 is a free team strategy game in the MOBA genre. Choose a hero, work with your teammates, strengthen your character during the match and push toward the opposing team’s Ancient.',
      ru: 'Dota 2 — бесплатная командная стратегия в жанре MOBA. Выберите героя, действуйте вместе с союзниками, развивайте персонажа по ходу матча и продвигайтесь к Древнему противника.',
      kk: 'Dota 2 — MOBA жанрындағы тегін командалық стратегия. Батырды таңдап, командаңызбен бірге әрекет етіңіз, матч кезінде оны күшейтіп, қарсыластың Ежелгісіне қарай ілгерілеңіз.'
    },
    'cyberpunk-2077': {
      en: 'Play as V, a mercenary navigating Night City in this open-world role-playing game. Take on jobs, explore a dense futuristic city and shape your approach through combat, technology and story choices.',
      ru: 'В этой ролевой игре с открытым миром вы играете за наёмника Ви и исследуете Найт-Сити. Выполняйте задания, изучайте футуристический мегаполис и выбирайте собственный подход к боям и сюжетным ситуациям.',
      kk: 'Бұл ашық әлемдегі рөлдік ойында жалдамалы Ви рөлін сомдап, Түнгі қаланы аралайсыз. Тапсырмаларды орындап, футуристік мегаполисті зерттеңіз және шайқастар мен оқиғаларда өз жолыңызды таңдаңыз.'
    },
    minecraft: {
      en: 'Explore a world made of blocks, gather resources, craft tools and build whatever you can imagine. Creative mode focuses on building, while Survival adds resource gathering and the challenge of staying safe.',
      ru: 'Исследуйте мир из блоков, собирайте ресурсы, создавайте инструменты и стройте всё, что подсказывает воображение. В творческом режиме главное — строительство, а в режиме выживания нужно добывать ресурсы и заботиться о безопасности.',
      kk: 'Блоктардан құралған әлемді зерттеп, ресурстар жинаңыз, құралдар жасап, ойыңызға келгеннің бәрін құрыңыз. Шығармашылық режимде құрылысқа көңіл бөлінеді, ал тірі қалу режимінде ресурс жинап, қауіптен қорғану керек.'
    },
    'red-dead-redemption-2': {
      en: 'Follow outlaw Arthur Morgan and the Van der Linde gang in a story-driven western adventure. Travel through a detailed open world, take on missions and spend time exploring its towns and wilderness.',
      ru: 'Вестерн рассказывает историю преступника Артура Моргана и банды Ван дер Линде. Путешествуйте по детально проработанному открытому миру, выполняйте задания и исследуйте города и дикую природу.',
      kk: 'Бұл вестерн қылмыскер Артур Морган мен Ван дер Линде тобының оқиғасын баяндайды. Егжей-тегжейлі ашық әлемді аралап, тапсырмаларды орындап, қалалар мен жабайы табиғатты зерттеңіз.'
    },
    'elden-ring': {
      en: 'An action role-playing adventure set in the Lands Between. Explore a vast fantasy world, face demanding enemies, develop your character and uncover the story through the places and people you encounter.',
      ru: 'Ролевая игра в жанре экшен, действие которой происходит в Междуземье. Исследуйте огромный фэнтезийный мир, сражайтесь с сильными противниками, развивайте персонажа и раскрывайте историю через встречи и открытия.',
      kk: 'Бұл экшн-рөлдік ойын Аралық жерлерде өтеді. Алып фэнтези әлемін зерттеп, күшті жаулармен шайқасыңыз, кейіпкеріңізді дамытыңыз және кездесулер мен жаңалықтар арқылы оқиғаны ашыңыз.'
    },
    'baldurs-gate-3': {
      en: 'Bring a party of adventurers together in a fantasy role-playing story shaped by your choices. Explore, talk with characters and take part in turn-based battles where positioning and teamwork matter.',
      ru: 'Соберите отряд искателей приключений в фэнтезийной ролевой игре, где история зависит от ваших решений. Исследуйте мир, общайтесь с персонажами и участвуйте в пошаговых боях, где важны позиция и командная работа.',
      kk: 'Шешімдеріңіз оқиғаға әсер ететін фэнтези рөлдік ойынында шытырман іздеушілер тобын жинаңыз. Әлемді зерттеп, кейіпкерлермен сөйлесіп, орын мен командалық әрекет маңызды болатын кезекпен өтетін шайқастарға қатысыңыз.'
    },
    'hogwarts-legacy': {
      en: 'Step into the wizarding world as a student at Hogwarts. Learn spells, attend classes and explore beyond the castle in an open-world adventure built around magic and discovery.',
      ru: 'Станьте учеником Хогвартса в волшебном мире. Изучайте заклинания, посещайте занятия и исследуйте окрестности замка в приключении с открытым миром, где важны магия и открытия.',
      kk: 'Сиқыршылар әлемінде Хогвартс оқушысы болыңыз. Сиқырларды үйреніп, сабақтарға қатысыңыз және сиқыр мен жаңалыққа толы ашық әлемдегі шытырман оқиғада қамал маңын зерттеңіз.'
    }
  };

  const tags = {
    'counter-strike-2': { en: ['Tactical shooter', 'Team-based', 'Competitive'], ru: ['Тактический шутер', 'Командная игра', 'Соревновательная'], kk: ['Тактикалық атыс ойыны', 'Командалық ойын', 'Бәсекелі ойын'] },
    'grand-theft-auto-v': { en: ['Open world', 'Action adventure', 'Story'], ru: ['Открытый мир', 'Экшен-приключение', 'Сюжет'], kk: ['Ашық әлем', 'Экшн-шытырман оқиға', 'Оқиға'] },
    'dota-2': { en: ['MOBA', 'Team strategy', 'Free to play'], ru: ['MOBA', 'Командная стратегия', 'Бесплатная игра'], kk: ['MOBA', 'Командалық стратегия', 'Тегін ойын'] },
    'cyberpunk-2077': { en: ['Open world', 'Role-playing', 'Story choices'], ru: ['Открытый мир', 'Ролевая игра', 'Выбор в сюжете'], kk: ['Ашық әлем', 'Рөлдік ойын', 'Оқиғадағы таңдау'] },
    minecraft: { en: ['Sandbox', 'Building', 'Survival'], ru: ['Песочница', 'Строительство', 'Выживание'], kk: ['Құмсалғыш', 'Құрылыс', 'Тірі қалу'] },
    'red-dead-redemption-2': { en: ['Open world', 'Western', 'Story adventure'], ru: ['Открытый мир', 'Вестерн', 'Сюжетное приключение'], kk: ['Ашық әлем', 'Вестерн', 'Оқиғалы шытырман'] },
    'elden-ring': { en: ['Action RPG', 'Fantasy', 'Exploration'], ru: ['Ролевая игра-экшен', 'Фэнтези', 'Исследование мира'], kk: ['Экшн-рөлдік ойын', 'Фэнтези', 'Әлемді зерттеу'] },
    'baldurs-gate-3': { en: ['Party-based RPG', 'Turn-based combat', 'Choices'], ru: ['Партийная RPG', 'Пошаговые бои', 'Выбор игрока'], kk: ['Топтық RPG', 'Кезекпен өтетін шайқас', 'Ойыншы таңдауы'] },
    'hogwarts-legacy': { en: ['Wizarding world', 'Open world', 'Adventure'], ru: ['Мир волшебства', 'Открытый мир', 'Приключение'], kk: ['Сиқыршылар әлемі', 'Ашық әлем', 'Шытырман оқиға'] }
  };

  const screenshots = {
    'counter-strike-2': ['images/games/counter-strike-2-screenshot.jpg'],
    'cyberpunk-2077': ['images/games/cyberpunk-2077-screenshot.jpg'],
    'elden-ring': ['images/games/elden-ring-screenshot.jpg']
  };

  const localeCopy = {
    en: { about: 'About this game', genre: 'Genre', price: 'Price', type: 'Type', free: 'Free to play', paid: 'Paid game', gallery: 'Screenshots & artwork', screenshot: 'Gameplay screenshot', cover: 'Cover artwork', note: 'Only cover artwork is available in this gallery so far.', missing: 'Game not found', message: 'The requested game is not in this catalogue.', browse: 'Open all games' },
    ru: { about: 'Об игре', genre: 'Жанр', price: 'Цена', type: 'Тип', free: 'Бесплатная игра', paid: 'Платная игра', gallery: 'Скриншоты и изображения', screenshot: 'Скриншот игрового процесса', cover: 'Обложка игры', note: 'Пока в галерее доступна только обложка игры.', missing: 'Игра не найдена', message: 'Такой игры нет в нашем каталоге.', browse: 'Открыть каталог игр' },
    kk: { about: 'Ойын туралы', genre: 'Жанры', price: 'Бағасы', type: 'Түрі', free: 'Тегін ойын', paid: 'Ақылы ойын', gallery: 'Скриншоттар мен суреттер', screenshot: 'Ойын барысының скриншоты', cover: 'Ойын мұқабасы', note: 'Әзірге галереяда ойынның мұқабасы ғана бар.', missing: 'Ойын табылмады', message: 'Бұл ойын каталогымызда жоқ.', browse: 'Ойындар каталогын ашу' }
  };

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const root = document.querySelector('[data-game-content]');
  if (!root) return;

  function render() {
    const id = new URLSearchParams(window.location.search).get('game');
    const game = (window.HUB_GAMES || []).find(entry => entry.id === id);
    const locale = window.HUB_I18N?.language || 'en';
    const copy = localeCopy[locale] || localeCopy.en;

    if (!game) {
      root.innerHTML = `<section class="detail-error"><h1>${escapeHtml(copy.missing)}</h1><p>${escapeHtml(copy.message)}</p><a class="buy-button" href="games.html">${escapeHtml(copy.browse)}</a></section>`;
      return;
    }

    const price = game.cents ? '$' + (game.cents / 100).toFixed(2) : copy.free;
    const genre = window.HUB_I18N?.t(game.genre) || game.genre;
    const gallery = screenshots[id] || [];
    const images = gallery.length ? gallery : [game.image];
    const imageCards = images.map((src, index) => {
      const caption = gallery.length ? `${copy.screenshot} ${gallery.length > 1 ? index + 1 : ''}`.trim() : copy.cover;
      const alt = `${game.title} — ${caption}`;
      return `<figure class="m-0"><a href="${escapeHtml(src)}" target="_blank" rel="noopener noreferrer"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy"></a><figcaption>${escapeHtml(caption)}</figcaption></figure>`;
    }).join('');
    const gameTags = (tags[id]?.[locale] || tags[id]?.en || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join('');

    root.innerHTML = `<section class="detail-hero" aria-labelledby="game-title">
      <div class="detail-art"><img src="${escapeHtml(game.image)}" alt="${escapeHtml(`${game.title} — ${copy.cover}`)}"></div>
      <div class="detail-summary"><p class="eyebrow">${escapeHtml(genre)} · ${escapeHtml(game.cents ? copy.paid : copy.free)}</p>
        <h1 id="game-title">${escapeHtml(game.title)}</h1>
        <p>${escapeHtml(window.HUB_I18N?.t(game.description) || game.description)}</p>
        <div class="detail-tags" aria-label="${escapeHtml(copy.about)}">${gameTags}</div>
        <div class="detail-facts">
          <div class="detail-fact"><span>${escapeHtml(copy.genre)}</span><strong>${escapeHtml(genre)}</strong></div>
          <div class="detail-fact"><span>${escapeHtml(copy.price)}</span><strong>${escapeHtml(price)}</strong></div>
          <div class="detail-fact"><span>${escapeHtml(copy.type)}</span><strong>${escapeHtml(game.cents ? copy.paid : copy.free)}</strong></div>
        </div>
      </div>
    </section>
    <section class="detail-section" aria-labelledby="game-overview-title"><h2 id="game-overview-title">${escapeHtml(copy.about)}</h2>
      <p class="detail-overview">${escapeHtml(descriptions[id]?.[locale] || game.description)}</p>
    </section>
    <section class="detail-section" aria-labelledby="game-gallery-title"><h2 id="game-gallery-title">${escapeHtml(copy.gallery)}</h2>
      ${gallery.length ? '' : `<p class="detail-note">${escapeHtml(copy.note)}</p>`}
      <div class="detail-gallery">${imageCards}</div>
    </section>`;
  }

  document.addEventListener('hub:languagechange', render);
  render();
})();
