/* Localized interface for the complete static site. No external translation service is used. */
(function () {
  'use strict';

  const translations = {
    ru: {
      'Language': 'Язык', 'Choose language': 'Выберите язык', 'Main navigation': 'Главная навигация',
      'Search the store': 'Поиск в магазине', 'Store collections': 'Разделы магазина', 'Page sections': 'Разделы страницы',
      'Search games': 'Искать игры', 'Choose featured game': 'Выбрать игру из подборки', 'The hub in numbers': 'Сайт в цифрах',
      'Previous featured game': 'Предыдущая игра в подборке', 'Next featured game': 'Следующая игра в подборке', 'Registration steps': 'Этапы регистрации',
      'Carousel': 'Карусель', 'Browse games': 'Все игры', 'Browse the game catalogue': 'Открыть каталог игр',
      'Player name': 'Имя игрока', 'Your nickname': 'Ваш псевдоним', 'Search games in your library': 'Поиск игр в библиотеке',
      'Enter your name': 'Введите имя', 'Enter your email': 'Введите адрес электронной почты', 'Write your message here...': 'Напишите сообщение...',
      'Enter a valid email address, such as player@example.com.': 'Введите корректный адрес электронной почты, например player@example.com.',
      'Please check this box to continue.': 'Установите этот флажок, чтобы продолжить.',
      'Your message is valid. This is a demo form; no message has been sent.': 'Сообщение заполнено правильно. Это демонстрационная форма: сообщение не отправлено.',
      'Your email is valid. This is a demo form; no subscription has been created.': 'Адрес заполнен правильно. Это демонстрационная форма: подписка не оформлена.',
      'Use at least 8 characters.': 'Используйте не менее 8 символов.', 'No games found. Try another name or genre.': 'Игры не найдены. Попробуйте другое название или жанр.',
      'Game gallery': 'Галерея игр', 'Choose a star to rate this game.': 'Выберите звезду, чтобы оценить игру.',
      'Steam Game Hub - About Us': 'Steam Game Hub — О проекте', 'Steam Game Hub - Categories': 'Steam Game Hub — Категории',
      'Steam Game Hub - Community': 'Steam Game Hub — Сообщество', 'Steam Game Hub - Contact': 'Steam Game Hub — Поддержка',
      'Steam Game Hub - Featured Games': 'Steam Game Hub — Избранные игры', 'Steam Game Hub - Gaming News': 'Steam Game Hub — Игровые новости',
      'Steam Game Hub - Responsive Showcase': 'Steam Game Hub — Адаптивная витрина', 'Steam Game Hub — All games': 'Steam Game Hub — Все игры',
      'Steam Game Hub — Store': 'Steam Game Hub — Магазин', 'Steam Game Hub — Library': 'Steam Game Hub — Библиотека',
      'Skip to main content': 'Перейти к основному содержимому', 'Skip to content': 'Перейти к содержимому', 'Registration steps': 'Этапы регистрации',
      'Team Eggs': 'Команда Eggs', 'Web Technologies I': 'Веб-технологии I', 'Main navigation': 'Главная навигация',
      'Store': 'Магазин', 'Library': 'Библиотека', 'All games': 'Все игры', 'Featured': 'Избранное', 'Featured games': 'Избранные игры',
      'Community': 'Сообщество', 'News': 'Новости', 'About': 'О проекте', 'Support': 'Поддержка', 'Player 1': 'Игрок 1',
      'DEMO WALLET': 'ДЕМО-КОШЕЛЁК', 'Browse games': 'Все игры', 'Categories': 'Категории', 'Free to play': 'Бесплатные игры',
      'Search the store': 'Поиск в магазине', 'Search games': 'Поиск игр', 'Your library': 'Ваша библиотека',
      'Search games in your library': 'Поиск игр в библиотеке', 'Toggle navigation': 'Открыть или закрыть меню', 'Search games': 'Искать игры',
      'Store collections': 'Разделы магазина', 'Page sections': 'Разделы страницы', 'Explore the hub': 'Разделы сайта',
      'Find your genre': 'Найдите свой жанр', 'Explore genres': 'Жанры игр', 'Choosing a genre': 'Как выбрать жанр',
      'Discover the gallery': 'Галерея игр', 'Responsive showcase': 'Адаптивная витрина', 'Get in touch': 'Связаться с нами',
      'Contact information': 'Контактная информация', 'Message form': 'Форма обратной связи', 'Frequently asked questions': 'Частые вопросы',
      'Meet our team': 'Наша команда', 'Community snapshot': 'О сообществе', 'Discussions': 'Обсуждения', 'Game gallery': 'Галерея игр', 'Get involved': 'Присоединяйтесь',
      'About the hub': 'О проекте', 'Our project': 'Наш проект', 'Our team': 'Наша команда', 'Contact us': 'Связаться с нами',
      'Your next great adventure': 'Ваше следующее большое приключение', 'YOUR NEXT GREAT ADVENTURE': 'ВАШЕ СЛЕДУЮЩЕЕ БОЛЬШОЕ ПРИКЛЮЧЕНИЕ',
      'Featured & Recommended': 'Рекомендуем', 'Handpicked for you': 'Мы выбрали это для вас', 'IN THE SPOTLIGHT': 'В ЦЕНТРЕ ВНИМАНИЯ',
      'Very Positive': 'Очень положительные', 'Community favourite': 'Выбор сообщества', 'Worth your': 'Стоит вашего', 'next session.': 'следующего вечера.',
      'Choose your hero. Find your team. Every match is a new story.': 'Выберите героя, найдите команду — каждый матч станет новой историей.',
      'MOBA': 'MOBA', 'Multiplayer': 'Многопользовательская игра', 'Strategy': 'Стратегия', 'JUMP INTO SOMETHING GREAT': 'ВЫБЕРИТЕ СЛЕДУЮЩУЮ ИГРУ',
      'Add to library': 'Добавить в библиотеку', 'GOOD GAMES. GREAT TIMES.': 'ХОРОШИЕ ИГРЫ — ЯРКИЕ ВПЕЧАТЛЕНИЯ',
      'Discover something you’ll love': 'Найдите игру по душе', 'Browse all games': 'Смотреть все игры', 'RPG': 'Ролевая игра', 'Shooter': 'Шутер',
      'Action': 'Экшен', 'Sandbox': 'Песочница', 'Adventure': 'Приключение', 'Choose your adventure': 'Выберите приключение',
      'Cyberpunk 2077': 'Cyberpunk 2077', 'Counter-Strike 2': 'Counter-Strike 2', 'Red Dead Redemption 2': 'Red Dead Redemption 2',
      'Elden Ring': 'Elden Ring', 'Become an urban mercenary in the neon-lit streets of Night City.': 'Станьте наёмником и покорите залитые неоном улицы Найт-Сити.',
      'Precision. Teamwork. One more round. The definitive competitive tactical shooter.': 'Точность и командная работа. Ещё один раунд — в главном тактическом шутере для соревнований.',
      'An epic tale of life, loyalty and survival in the American frontier.': 'Эпическая история о жизни, верности и борьбе за выживание на американском Диком Западе.',
      'Rise, Tarnished. Explore the Lands Between and forge your own path.': 'Восстань, Погасший. Исследуй Междуземье и проложи собственный путь.',
      'Three lives collide in Los Santos. Make the city your playground.': 'Три судьбы переплетаются в Лос-Сантосе. Превратите город в свою игровую площадку.',
      'A world of possibilities, built one block at a time.': 'Мир безграничных возможностей — создавайте его по одному блоку за раз.',
      'Gather your party for a story shaped by your choices.': 'Соберите отряд и отправьтесь в приключение, исход которого зависит от ваших решений.',
      'Discover an open-world adventure in the wizarding world.': 'Отправьтесь в приключение по открытому миру волшебников.',
      'Your playground, your collection': 'Ваш мир — ваша коллекция', 'YOUR PLAYGROUND, YOUR COLLECTION': 'ВАШ МИР — ВАША КОЛЛЕКЦИЯ',
      'Your next game starts with $100.': 'Начните знакомство с играми с демо-баланса $100.',
      'Every profile gets a virtual wallet. Try a game, leave a rating, make it yours.': 'У каждого профиля свой виртуальный кошелёк. Попробуйте игру, поставьте оценку и добавьте её в коллекцию.',
      'Your balance refills to $100 when you refresh. Your collection stays.': 'После обновления страницы баланс снова станет $100, а коллекция сохранится.',
      'Explore the store →': 'Перейти в магазин →', 'games to discover': 'игр для знакомства', 'starting demo balance': 'начальный демо-баланс',
      'free-to-play favourites': 'бесплатных игр', 'genres to explore': 'жанров для изучения', 'Better games. Better together.': 'Вместе играть интереснее.',
      'Share the hub with your party.': 'Поделитесь сайтом с друзьями.', 'Copy link': 'Скопировать ссылку', 'Copied': 'Скопировано',
      'Copied to clipboard!': 'Ссылка скопирована.', 'Copy unavailable. Select the link to copy it manually.': 'Не удалось скопировать. Выделите ссылку и скопируйте её вручную.',
      'More hub tools · Clock, themes & sound': 'Дополнительные функции · часы, темы и звук', 'Make yourself at home': 'Настройте сайт под себя',
      'Your local date and time': 'Местные дата и время', 'Enable JavaScript to see the current time.': 'Включите JavaScript, чтобы увидеть текущее время.',
      'Change background': 'Сменить фон', 'Current background:': 'Текущий фон:', 'Midnight': 'Полночь', 'Ocean': 'Океан', 'Plum': 'Слива', 'Forest': 'Лес',
      'Filter games': 'Фильтр игр', 'Build your player card': 'Создать карточку игрока', 'Join the community': 'Присоединиться к сообществу',
      'Try our newsletter': 'Подписка на новости', 'A little sound for your hub': 'Добавьте немного звука', 'Play notification': 'Воспроизвести звук',
      'Play a short chime when you want to hear it.': 'Нажмите, чтобы услышать короткий сигнал.',
      'THE GAME COLLECTION': 'КОЛЛЕКЦИЯ ИГР', 'Find your next favourite': 'Найдите игру по душе', 'A new world, a familiar favourite, or one more round. Find your kind of game.': 'Новый мир, любимая игра или ещё один раунд — выберите то, что вам по душе.',
      'Genre': 'Жанр', 'All genres': 'Все жанры', 'Price': 'Цена', 'All prices': 'Любая цена', 'Under $30 (paid)': 'До $30 (платные)', '$30 and above': 'От $30', 'Within my balance': 'В пределах баланса',
      'Reset filters ↺': 'Сбросить фильтры ↺', 'Virtual wallet · $100 on refresh': 'Демо-кошелёк · $100 после обновления', 'Buy game': 'Купить игру',
      'No games here yet': 'Здесь пока нет игр', 'Try a different search or reset your filters.': 'Измените запрос или сбросьте фильтры.',
      'Explore all games →': 'Смотреть все игры →', 'YOUR PERSONAL LIBRARY': 'ВАША БИБЛИОТЕКА', 'Your collection': 'Ваша коллекция',
      'All your adventures, in one place. Rate your games or return one to your wallet.': 'Все ваши приключения в одном месте. Оценивайте игры или возвращайте их стоимость в кошелёк.',
      'Featured games': 'Избранные игры', 'Popular games': 'Популярные игры', 'Popular genres': 'Популярные жанры', 'EXPLORE OUR COLLECTION': 'ИЗУЧИТЕ НАШУ КОЛЛЕКЦИЮ',
      'Check out some of the games selected by Steam Game Hub.': 'Посмотрите игры, которые мы выбрали для Steam Game Hub.', 'Popular Games': 'Популярные игры',
      'View catalogue': 'Открыть каталог', 'Genres': 'Жанры', 'Popular Genres': 'Популярные жанры', 'Free': 'Бесплатно',
      'Precision. Teamwork. One more round. The definitive competitive tactical shooter.': 'Точность и командная работа. Ещё один раунд — в главном тактическом шутере для соревнований.',
      'A competitive tactical shooter based on teamwork and strategy.': 'Соревновательный тактический шутер, где важны командная работа и стратегия.',
      'An open-world action game with missions and exploration.': 'Экшен с открытым миром, заданиями и исследованиями.',
      'A multiplayer strategy game featuring team-based battles.': 'Многопользовательская стратегическая игра с командными сражениями.',
      'A futuristic open-world RPG set in Night City.': 'Ролевая игра с открытым миром в футуристическом Найт-Сити.',
      'Explore a vast fantasy world, defeat enemies, and discover secrets.': 'Исследуйте огромный мир фэнтези, побеждайте врагов и раскрывайте тайны.',
      'Experience an open-world western adventure with a detailed story.': 'Окунитесь в вестерн с открытым миром и захватывающим сюжетом.',
      'Explore a magical world and experience life as a student wizard.': 'Исследуйте волшебный мир и проживите жизнь ученика школы магии.',
      'Build your character and explore an adventure-driven fantasy world.': 'Создайте персонажа и исследуйте фэнтезийный мир, полный приключений.',
      'THE GAME COLLECTION': 'КОЛЛЕКЦИЯ ИГР',
      'About the hub': 'О проекте', 'Our project': 'Наш проект', 'Our team': 'Наша команда', 'Game gallery': 'Галерея игр',
      'TEAM EGGS': 'КОМАНДА EGGS', 'GET TO KNOW US': 'ПОЗНАКОМЬТЕСЬ С НАМИ', 'About Steam Game Hub': 'О Steam Game Hub',
      'Learn more about our project and the team behind it.': 'Узнайте больше о проекте и нашей команде.', 'About Our Project': 'О проекте',
      'Steam Game Hub is a student web project created for the Web Technologies I course.': 'Steam Game Hub — учебный веб-проект, созданный в рамках курса «Веб-технологии I».',
      'Our website brings together information about popular games, genres, gaming news, and community experiences. It is a visual academic project and does not include a real store, user accounts, or a backend.': 'На сайте собраны сведения о популярных играх и жанрах, игровые новости и материалы о сообществе. Это учебный демонстрационный проект: здесь нет настоящего магазина, учётных записей или серверной части.',
      'Our Team': 'Наша команда', 'Developer 1': 'Разработчик 1', 'Developer 2': 'Разработчик 2', 'Developer 3': 'Разработчик 3', 'Developer 4': 'Разработчик 4',
      'OUR GAMING PICKS': 'НАШ ВЫБОР ИГР', 'Games That Inspire Us': 'Игры, которые нас вдохновляют',
      'From familiar favourites to unusual simulators, these games show the variety of worlds we enjoy exploring.': 'От знакомых хитов до необычных симуляторов — эти игры показывают, насколько разнообразны миры, которые нам нравится исследовать.',
      'Fishing Simulator': 'Fishing Simulator', 'I Am Bear': 'I Am Bear', 'Librarian Simulator': 'Librarian Simulator',
      'Previous image': 'Предыдущее изображение', 'Next image': 'Следующее изображение',
      'Use the arrows, indicators or your keyboard to explore all nine images. Slides advance only when you choose.': 'Переключайте изображения стрелками, индикаторами или клавиатурой. Слайды меняются только по вашему выбору.',
      'A little discovery. A new favourite. Your next adventure.': 'Новая находка. Новая любимая игра. Следующее приключение.',
      'Student project · Virtual purchases only ·': 'Учебный проект · Только виртуальные покупки ·',
      'Find your play style': 'Найдите свой стиль игры', 'Build a quick player card in three steps. Your details stay on this page.': 'Создайте карточку игрока за три шага. Введённые данные останутся на этой странице.',
      'Enable JavaScript to try the player card builder.': 'Включите JavaScript, чтобы создать карточку игрока.', 'What should we call you?': 'Как к вам обращаться?', 'Player name': 'Имя игрока',
      'Choose your favourites': 'Выберите предпочтения', 'Favourite genre': 'Любимый жанр', 'Choose a genre': 'Выберите жанр', 'Play style': 'Стиль игры',
      'Choose a play style': 'Выберите стиль игры', 'Solo': 'В одиночку', 'Co-op': 'Кооператив', 'Competitive': 'Соревновательный',
      'Review your player card': 'Проверьте карточку игрока', 'Use Back to change your preferences before creating the preview.': 'Нажмите «Назад», чтобы изменить предпочтения перед просмотром карточки.',
      'Back': 'Назад', 'Next': 'Далее', 'Create player card': 'Создать карточку игрока', 'Start over': 'Начать заново',
      'FIND YOUR PEOPLE': 'НАЙДИТЕ ЕДИНОМЫШЛЕННИКОВ', 'Join the gaming community': 'Присоединяйтесь к игровому сообществу',
      'Meet players who share your favourite worlds, genres and adventures.': 'Знакомьтесь с игроками, которым нравятся те же миры, жанры и приключения.',
      'Three small steps to your local player profile and a $100 demo wallet. Your email and sample password are checked here, then discarded. Use a demo password.': 'Создайте локальный профиль игрока и получите демо-баланс $100 за три шага. Мы проверим адрес электронной почты и тестовый пароль, но не будем их сохранять или отправлять. Используйте только тестовый пароль.',
      'Have a question? Contact us': 'Остались вопросы? Свяжитесь с нами', 'Name': 'Имя', 'Email': 'Электронная почта', 'Password': 'Пароль',
      'Your player name': 'Имя игрока', 'Your email address': 'Ваш адрес электронной почты', 'One more step towards your next adventure.': 'Ещё один шаг навстречу приключению.',
      'Email address': 'Адрес электронной почты', 'Finish your player profile': 'Завершите создание профиля', 'Use a sample password for this frontend demo.': 'Для этой демонстрации используйте тестовый пароль.',
      'At least 8 characters. Not saved or sent anywhere.': 'Не менее 8 символов. Пароль не сохраняется и никуда не отправляется.', 'Confirm password': 'Подтвердите пароль',
      '← Back': '← Назад', 'Continue →': 'Продолжить →', '✓': '✓', 'Explore the store →': 'Перейти в магазин →', 'Add another player': 'Добавить ещё одного игрока',
      'Community Game Gallery': 'Игровая галерея сообщества',
      'CONNECT • SHARE • DISCUSS': 'ОБЩАЙТЕСЬ • ДЕЛИТЕСЬ • ОБСУЖДАЙТЕ', 'Steam Game Hub Community': 'Сообщество Steam Game Hub',
      'Exchange tactical guides, discuss upcoming releases, and team up for multiplayer battles.': 'Делитесь тактическими советами, обсуждайте будущие релизы и собирайте команды для сетевых сражений.',
      'A student community concept with illustrative discussions and statistics.': 'Учебная концепция сообщества с примерами обсуждений и статистики.',
      'Players Online': 'игроков в сети', 'Active Discussions': 'активных обсуждений', 'Community Guides': 'руководств сообщества', 'Verified Clans': 'проверенных кланов',
      'Trending Discussions': 'Популярные обсуждения', 'Participate in active conversations with community members and game developers.': 'Обсуждайте игры с участниками сообщества и разработчиками.',
      'Pinned': 'Закреплено', 'Announcement': 'Объявление', 'Official Guidelines & Forum Code of Conduct': 'Официальные правила сообщества и поведения на форуме',
      'Started by': 'Автор:', '• 2 hours ago in': '• 2 часа назад ·', 'Platform News': 'Новости платформы', 'Replies': 'ответов', 'Hot': 'Популярное',
      'Best RPG game of 2026: What are your top three picks?': 'Лучшая ролевая игра 2026 года: ваша тройка фаворитов?', 'Role-Playing Games': 'Ролевые игры',
      'Guide': 'Руководство', 'CS2 Smoke & Flash Utility Placement for Competitive Season 3': 'Дымовые гранаты и флешки в CS2: руководство к соревновательному сезону 3',
      'Competitive Guides': 'Советы для соревнований', 'Hardware': 'Оборудование', 'Steam Deck vs Gaming Laptop for University Dorm Life': 'Steam Deck или игровой ноутбук для жизни в общежитии',
      'Hardware & Tech': 'Техника и оборудование', 'Which autumn game release are you most excited to play?': 'Какую осеннюю новинку вы ждёте больше всего?',
      'General Gaming': 'Игры', 'Community Rules': 'Правила сообщества', 'Be Respectful:': 'Уважайте друг друга:', 'Toxic conduct is not tolerated.': 'Оскорбления и травля недопустимы.',
      'No Spam:': 'Без спама:', 'Keep links helpful and avoid advertising.': 'Делитесь полезными ссылками и не размещайте рекламу.',
      'Stay on Topic:': 'Пишите по теме:', 'Use the correct category and tags.': 'Выбирайте подходящую категорию и теги.', 'Security First:': 'Безопасность прежде всего:',
      'Never share passwords or API keys.': 'Не сообщайте никому пароли и ключи API.', 'Report Violations:': 'Сообщайте о нарушениях:',
      'Help keep the community welcoming.': 'Помогайте сохранять дружелюбную атмосферу.', 'Community Channels': 'Наши площадки', '→ Official Discord Community': '→ Официальное сообщество Discord',
      '→ Steam Community Group': '→ Группа Steam Community', '→ Reddit r/SteamGameHub': '→ Reddit r/SteamGameHub', '→ Workshop & Guides': '→ Мастерская и руководства', '→ Weekend Tournaments': '→ Турниры выходного дня',
      'YOUR PLAYER CARD': 'ВАША КАРТОЧКА ИГРОКА',
      'GET IN TOUCH': 'СВЯЖИТЕСЬ С НАМИ', 'Contact Steam Game Hub': 'Связаться со Steam Game Hub', 'Have a question or want to share your favourite game? Leave a message.': 'Есть вопрос или хотите рассказать о любимой игре? Напишите нам.',
      'Contact Us': 'Напишите нам', 'Fill out the form and tell us what you think about Steam Game Hub.': 'Заполните форму и поделитесь впечатлениями о Steam Game Hub.',
      'We would also like to know which game genres you enjoy most.': 'Расскажите также, какие игровые жанры вам нравятся больше всего.',
      'This demonstration checks your input locally. No information is sent or stored.': 'Форма проверяет введённые данные прямо в браузере. Данные не отправляются и не сохраняются.',
      'Enter your name': 'Введите имя', 'Enter your email': 'Введите адрес электронной почты', '@': '@', 'Favourite Genre': 'Любимый жанр',
      'Message': 'Сообщение', 'Write your message here...': 'Напишите сообщение...', 'Preferred platform': 'Предпочитаемая платформа', 'PC': 'Компьютер', 'Console': 'Консоль',
      'I understand this is a local demonstration.': 'Я понимаю, что это локальная демонстрация.', 'Preview message': 'Предварительный просмотр сообщения',
      'GOOD TO KNOW': 'ПОЛЕЗНАЯ ИНФОРМАЦИЯ', 'Is Steam Game Hub an official Steam website?': 'Steam Game Hub — официальный сайт Steam?',
      'No. This is an independent student project by Team Eggs for Web Technologies I. Game listings, prices and news are sample content, and this site does not sell games.': 'Нет. Это независимый учебный проект команды Eggs для курса «Веб-технологии I». Игры, цены и новости приведены в качестве примеров. Сайт не продаёт игры.',
      'Can I create an account or subscribe?': 'Можно ли создать учётную запись или подписаться на рассылку?', 'You can try the': 'Вы можете попробовать', 'registration form': 'форму регистрации',
      'and the': 'и', 'newsletter popup': 'окно подписки на новости', '. Both validate your input locally. They do not create accounts, send emails or save personal information.': '. Обе формы проверяют данные в браузере. Они не создают учётных записей, не отправляют письма и не сохраняют личную информацию.',
      'Where can I discover games by genre?': 'Где найти игры определённого жанра?', 'Explore our': 'Посмотрите', 'categories': 'категории', 'for action, RPG, strategy and more, or visit': 'с экшеном, ролевыми играми, стратегиями и другими жанрами или откройте',
      'featured games': 'избранные игры', 'to see our picks.': ', чтобы посмотреть нашу подборку.', 'Can I change the background, and which time is shown?': 'Можно ли сменить фон и какое время показывают часы?',
      'Use Change background on the': 'Нажмите «Сменить фон» на', 'home page': 'главной странице', 'to cycle through four colours. The clock shows your device\'s local date and time and updates every second.': 'и выберите один из четырёх цветов. Часы показывают местные дату и время на вашем устройстве и обновляются каждую секунду.',
      'FIND YOUR PLAY STYLE': 'НАЙДИТЕ СВОЙ ИГРОВОЙ СТИЛЬ', 'Game Categories': 'Категории игр', 'Every genre offers a different kind of challenge, story, and shared experience.': 'Каждый жанр предлагает свои испытания, истории и возможности играть вместе.',
      'Explore by Genre': 'Выберите жанр', 'Fast movement, memorable set pieces, and challenges that keep players on their toes.': 'Динамичные сражения, яркие сцены и испытания, которые не дадут заскучать.',
      'View action games →': 'Игры в жанре экшен →', 'Build a character, make choices, and explore worlds shaped by stories and quests.': 'Создайте персонажа, принимайте решения и исследуйте миры, полные историй и заданий.',
      'View RPG games →': 'Ролевые игры →', 'Test accuracy, teamwork, tactical thinking, and lightning-fast reactions.': 'Проверьте меткость, умение работать в команде, тактическое мышление и скорость реакции.',
      'View shooter games →': 'Шутеры →', 'Plan ahead, manage resources, and win through clever decisions rather than speed alone.': 'Продумывайте ходы, управляйте ресурсами и побеждайте благодаря умным решениям.',
      'View strategy games →': 'Стратегии →', 'Travel through new settings, solve problems, and follow a compelling journey.': 'Исследуйте новые места, решайте задачи и отправляйтесь в захватывающее путешествие.',
      'View adventure games →': 'Приключенческие игры →', 'Experience realistic systems, detailed worlds, and goals that unfold at your own pace.': 'Исследуйте реалистичные системы и детальные миры в своём темпе.',
      'View simulation games →': 'Симуляторы →', 'How to Choose a Genre': 'Как выбрать жанр', 'Decide whether you prefer solo stories or playing with friends.': 'Решите, что вам ближе: одиночные истории или игра с друзьями.',
      'Choose a pace: relaxed exploration, thoughtful planning, or fast competition.': 'Выберите темп: спокойное исследование, продуманная стратегия или быстрые соревнования.',
      'Try a game with a setting that interests you.': 'Попробуйте игру с интересным для вас миром.', 'Read the description and rating before adding it to your list.': 'Перед добавлением в список прочитайте описание и отзывы.',
      'LATEST UPDATES & ANNOUNCEMENTS': 'ПОСЛЕДНИЕ ОБНОВЛЕНИЯ И АНОНСЫ', 'Gaming News Hub': 'Игровые новости',
      'Stay ahead of the game with updates, patch notes, esports coverage, and previews.': 'Следите за обновлениями и заметками к патчам, киберспортом и анонсами.',
      'Sample editorial content for our student project.': 'Примеры редакционных материалов для учебного проекта.', 'Major Update': 'Крупное обновление',
      'September 15, 2026': '15 сентября 2026 года', 'Counter-Strike 2: Tactical Overhaul & Fall Competitive Season': 'Counter-Strike 2: тактические изменения и осенний соревновательный сезон',
      'Valve has rolled out its biggest seasonal update yet, with redesigned tournament maps, responsive smoke physics, calibrated sub-tick netcode, and updated Premier ratings.': 'Valve выпустила крупнейшее сезонное обновление: переработаны карты для турниров, улучшена физика дыма, настроена сетевая система sub-tick и обновлён рейтинг Premier.',
      '“Our focus for this season was uncompromising hit registration, smooth performance, and rewarding tactical team play.”': '«В этом сезоне мы сосредоточились на точной регистрации попаданий, стабильной работе и тактической командной игре».',
      '— Counter-Strike 2 Development Team': '— Команда разработчиков Counter-Strike 2', 'Discuss the Update': 'Обсудить обновление',
      'Recent Stories & Industry Highlights': 'Свежие новости и события игровой индустрии', 'Browse the latest articles, tournament recaps, and event announcements.': 'Читайте последние статьи, итоги турниров и анонсы событий.',
      'September 14, 2026': '14 сентября 2026 года', 'Cyberpunk Lore Expansion: New Night City Chapters Revealed': 'Расширение истории Cyberpunk: новые главы о Найт-Сити',
      'A fresh narrative update introduces unexplored districts, cyberware mechanics, and ray-tracing optimizations.': 'Обновление сюжета добавляет неизведанные районы и механику киберимплантов, а также улучшает трассировку лучей.',
      'Explore RPG games →': 'Ролевые игры →', 'Esports': 'Киберспорт', 'September 12, 2026': '12 сентября 2026 года',
      'The International 2026: Qualifier Schedule Finalized': 'The International 2026: опубликовано расписание отборочных матчей',
      'Sixteen rosters prepare to compete. Follow the group stages and share your predictions with the community.': 'К соревнованиям готовятся шестнадцать команд. Следите за групповым этапом и делитесь прогнозами с сообществом.',
      'Join the discussion →': 'Присоединиться к обсуждению →', 'Seasonal Sale': 'Сезонная распродажа', 'September 10, 2026': '10 сентября 2026 года',
      'Steam Autumn Sale: Discounts on Thousands of Titles': 'Осенняя распродажа Steam: скидки на тысячи игр',
      'Build a wishlist of AAA blockbusters and indie games from every major category.': 'Добавляйте в список желаемого крупные игры и инди-проекты из разных жанров.',
      'See featured games →': 'Смотреть избранные игры →', 'September 8, 2026': '8 сентября 2026 года', 'Steam Deck Ecosystem: More Games Now Verified': 'Экосистема Steam Deck: ещё больше игр получили статус совместимых',
      'Hundreds of classic and modern titles have gained better portable-PC support.': 'Сотни классических и современных игр получили улучшенную поддержку портативных ПК.',
      'Browse the catalogue →': 'Открыть каталог →', 'Tech': 'Технологии', 'September 5, 2026': '5 сентября 2026 года',
      'Next-Gen Game Physics: Shaping Open Worlds': 'Физика нового поколения меняет открытые миры',
      'Developers discuss how atmospheric simulation and lighting improve modern game worlds.': 'Разработчики рассказывают, как моделирование атмосферы и освещения меняет современные игровые миры.',
      'Explore genres →': 'Выбрать жанр →', 'September 2, 2026': '2 сентября 2026 года', 'Community Creations: Top Steam Workshop Mods': 'Работы сообщества: лучшие модификации из Мастерской Steam',
      'Discover fan-created multiplayer maps, interface redesigns, and more.': 'Откройте созданные игроками карты для сетевой игры, новые интерфейсы и многое другое.', 'Visit community →': 'Перейти в сообщество →',
      'Never Miss a Gaming Update': 'Не пропускайте игровые новости', 'Try our newsletter subscription demo. Enter an email to preview the signup; no subscription is created.': 'Попробуйте демонстрацию подписки на новости. Введите адрес, чтобы увидеть форму; подписка не оформляется.',
      'Subscribe to updates': 'Подписка на новости', 'Gaming updates, in your inbox': 'Игровые новости — в вашей почте',
      'Preview a newsletter signup. This demo checks your email locally and does not send or store it.': 'Предварительный просмотр подписки. Форма проверяет адрес в браузере и не отправляет и не сохраняет его.',
      'Email address': 'Адрес электронной почты', 'Try subscription': 'Проверить подписку',
      'THREE WORLDS. YOUR NEXT ADVENTURE.': 'ТРИ МИРА. ВАШЕ СЛЕДУЮЩЕЕ ПРИКЛЮЧЕНИЕ.', 'Great games.': 'Отличные игры.', 'Any screen.': 'На любом экране.',
      'Whether you play at your desk or discover new games on the go, there\'s a world here for you. Explore three of our favourites.': 'Играете ли вы за компьютером или ищете новинки в дороге — здесь найдётся мир для вас. Познакомьтесь с тремя нашими любимыми играми.',
      'Handpicked by Team Eggs': 'Выбор команды Eggs', 'FANTASY / RPG': 'ФЭНТЕЗИ / RPG',
      'Journey through the Lands Between, uncover hidden paths and take on unforgettable challenges.': 'Путешествуйте по Междуземью, находите скрытые тропы и проходите незабываемые испытания.',
      'Explore Elden Ring': 'Исследовать Elden Ring', 'OPEN WORLD / RPG': 'ОТКРЫТЫЙ МИР / RPG',
      'Make your own way through Night City, a futuristic world of neon streets and unexpected stories.': 'Прокладывайте собственный путь по Найт-Сити — футуристическому миру неоновых улиц и неожиданных историй.',
      'Explore Cyberpunk 2077': 'Исследовать Cyberpunk 2077', 'ADVENTURE / OPEN WORLD': 'ПРИКЛЮЧЕНИЕ / ОТКРЫТЫЙ МИР',
      'Ride across vast landscapes and follow a memorable story set at the end of the American frontier.': 'Путешествуйте по огромным просторам и проживите запоминающуюся историю на закате эпохи Дикого Запада.',
      'Explore Red Dead Redemption 2': 'Исследовать Red Dead Redemption 2', 'Steam Game Hub · Web Technologies I': 'Steam Game Hub · Веб-технологии I',
      'Team Eggs | SE-2507': 'Команда Eggs | SE-2507',
      'Enter your name': 'Введите имя', 'Your nickname': 'Ваш псевдоним', 'Your player name': 'Имя игрока', 'player@example.com': 'player@example.com',
      'Name or genre…': 'Название или жанр…', 'Not rated': 'Нет оценки', 'Your rating': 'Ваша оценка', 'Clear': 'Очистить',
      'Read more': 'Читать далее', 'Read less': 'Свернуть', 'Choose a star to rate this game.': 'Выберите звезду, чтобы оценить игру.',
      'Please complete the highlighted field before continuing.': 'Заполните выделенное поле, чтобы продолжить.',
      'Playing your notification sound.': 'Воспроизводится звук уведомления.', 'Sound could not play. Check your browser audio settings and try again.': 'Не удалось воспроизвести звук. Проверьте настройки звука в браузере и попробуйте ещё раз.',
      'Sound finished. You can play it again.': 'Звук завершён. Его можно воспроизвести ещё раз.', 'Sound is unavailable. Please reload and try again.': 'Звук недоступен. Обновите страницу и попробуйте ещё раз.',
      'MAKE YOURSELF AT HOME': 'НАСТРОЙТЕ САЙТ ПОД СЕБЯ', 'Choose your player': 'Выберите игрока', 'Each local profile has its own wallet, library and ratings.': 'У каждого локального профиля свои кошелёк, библиотека и оценки.',
      'Add a player': 'Добавить игрока', 'Player name': 'Имя игрока', 'Create': 'Создать',
      'Frontend demo · Saved in this browser. Every refresh refills all wallets to $100; games and ratings stay saved.': 'Демонстрация интерфейса · Данные хранятся в этом браузере. При обновлении баланс кошельков снова станет $100; игры и оценки сохранятся.',
      'Close profiles': 'Закрыть список профилей', 'Close checkout': 'Закрыть оформление', 'ADD TO YOUR COLLECTION': 'ДОБАВИТЬ В КОЛЛЕКЦИЮ',
      'Get this game': 'Добавить эту игру', 'Game price': 'Цена игры', 'Your balance': 'Ваш баланс', 'Balance afterwards': 'Баланс после покупки', 'Cancel': 'Отмена', 'Confirm purchase': 'Подтвердить покупку', 'Confirm return': 'Подтвердить возврат',
      'Please wait…': 'Подождите…', 'Create player profile': 'Создать профиль игрока', 'Your rating has been cleared.': 'Ваша оценка удалена.',
      'Browser storage is unavailable. Enable local storage to save profiles and purchases.': 'Хранилище браузера недоступно. Включите локальное хранилище, чтобы сохранять профили и покупки.',
      'Local storage is unavailable. Enable it to save purchases and ratings.': 'Локальное хранилище недоступно. Включите его, чтобы сохранять покупки и оценки.',
      'Enter a player name.': 'Введите имя игрока.', 'That player already exists. Choose them above or use another name.': 'Такой игрок уже есть. Выберите его выше или укажите другое имя.',
      'This browser already has 20 profiles.': 'В этом браузере уже создано 20 профилей.', 'Please complete this field.': 'Заполните это поле.',
      'This player name already exists. Choose another name or switch profiles in the header.': 'Такое имя игрока уже занято. Выберите другое имя или переключите профиль в шапке сайта.',
      'This browser already has 20 player profiles.': 'В этом браузере уже создано 20 профилей игроков.', 'Enter a valid email address, such as player@example.com.': 'Введите корректный адрес электронной почты, например player@example.com.',
      'Use at least 8 characters.': 'Используйте не менее 8 символов.', 'Passwords do not match.': 'Пароли не совпадают.',
      'This player name was just taken. Choose another name.': 'Это имя игрока только что заняли. Выберите другое.',
      'Could not create the profile. Check browser storage or choose an existing player.': 'Не удалось создать профиль. Проверьте хранилище браузера или выберите существующего игрока.',
      'Already in your library.': 'Эта игра уже есть в вашей библиотеке.', 'This game is no longer in your library.': 'Этой игры больше нет в вашей библиотеке.',
      'BACK TO YOUR WALLET': 'ВОЗВРАТ В КОШЕЛЁК', 'ADD TO YOUR COLLECTION': 'ДОБАВИТЬ В КОЛЛЕКЦИЮ', 'Return this game?': 'Вернуть эту игру?',
      'Make it yours': 'Добавить в коллекцию', 'A new adventure, for free': 'Новое приключение — бесплатно', 'Refund amount': 'Сумма возврата',
      'The game will leave your library. Your full virtual purchase price will return to your wallet.': 'Игра будет удалена из библиотеки, а её полная виртуальная стоимость вернётся в кошелёк.',
      'Not enough demo funds. Pick a cheaper game, return one, or refresh to refill your wallet.': 'Недостаточно демо-средств. Выберите игру подешевле, верните другую или обновите страницу, чтобы пополнить кошелёк.',
      'The active player changed. Please try again.': 'Активный игрок изменился. Попробуйте ещё раз.', 'This game is already in your library.': 'Эта игра уже есть в вашей библиотеке.',
      'Your balance changed. There are not enough funds.': 'Баланс изменился, средств недостаточно.', 'This game has already been returned.': 'Эта игра уже возвращена.',
      'Could not save the purchase. Check your browser storage and try again.': 'Не удалось сохранить покупку. Проверьте хранилище браузера и попробуйте ещё раз.',
      '✓ In library': '✓ В библиотеке', 'Remove from library': 'Удалить из библиотеки', 'No games found. Try another name or genre.': 'Игры не найдены. Попробуйте другое название или жанр.',
      'Your collection starts here. Visit the store and find your first game.': 'Ваша коллекция начинается здесь. Перейдите в магазин и найдите первую игру.',
      'Try a different search, genre or price, or reset your filters.': 'Измените запрос, жанр или цену либо сбросьте фильтры.', '✓ Copied': '✓ Скопировано',
      'Hub link copied to clipboard.': 'Ссылка на сайт скопирована.', 'Submitted successfully in this demo. No data was sent to a server.': 'Форма отправлена в демонстрационном режиме. Данные не передавались на сервер.',
      'Form submitted successfully in this demo.': 'Форма успешно отправлена в демонстрационном режиме.', 'Local storage is unavailable. Enable it to save purchases and ratings.': 'Локальное хранилище недоступно. Включите его, чтобы сохранять покупки и оценки.',
      'One battlefield. Infinite possibilities.': 'Одно поле боя. Бесконечные возможности.', 'Night City is waiting for your story.': 'Найт-Сити ждёт вашу историю.',
      'A world of wonder. A journey of your own.': 'Мир чудес. Ваш собственный путь.', 'Open world': 'Открытый мир', 'Sci-fi': 'Научная фантастика',
      'Exploration': 'Исследование', 'Fantasy': 'Фэнтези', 'FEATURED': 'ИЗБРАННОЕ', 'FREE TO PLAY': 'БЕСПЛАТНО',
      'Previous featured game': 'Предыдущая избранная игра', 'Next featured game': 'Следующая избранная игра', 'Choose featured game': 'Выберите избранную игру',
      'The hub in numbers': 'Сайт в цифрах', 'Browse the game catalogue after': 'Открыть каталог после игры', 'Game collections': 'Подборки игр', 'Close subscription form': 'Закрыть форму подписки',
      'Enter your name': 'Введите имя', 'Write your message here...': 'Напишите сообщение...',
      'Team Members: Ташкенбаев Нурсултан · Бигали Абулхаир · Султанкулов Шынгыс · Лопаткин Артем': 'Участники команды: Нурсултан Ташкенбаев · Абулхаир Бигали · Шынгыс Султанкулов · Артём Лопаткин',
      'Team Members: Ташкенбаев Нурсултан, Бигали Абулхаир, Султанкулов Шынгыс, Лопаткин Артем': 'Участники команды: Нурсултан Ташкенбаев, Абулхаир Бигали, Шынгыс Султанкулов, Артём Лопаткин',
      'Clear your rating for': 'Сбросить оценку игры', 'Make yourself at home': 'Настройте сайт под себя'
      ,'Top story': 'Главная новость', 'Recent stories': 'Последние новости', 'Newsletter': 'Рассылка', 'Gaming news': 'Игровые новости',
      'Your demo password': 'Ваш тестовый пароль', 'Read more': 'Читать далее', 'Read less': 'Свернуть', 'Create': 'Создать',
      'Enter your name': 'Введите имя', 'Enter your email': 'Введите адрес электронной почты', 'Write your message here...': 'Напишите сообщение...',
      'Your nickname': 'Ваш псевдоним', 'registration steps': 'Этапы регистрации', 'Close subscription form': 'Закрыть форму подписки',
      'Slide 1: Minecraft': 'Слайд 1: Minecraft', 'Slide 2: Dota 2': 'Слайд 2: Dota 2', 'Slide 3: Roblox': 'Слайд 3: Roblox',
      'Slide 4: Brawl Stars': 'Слайд 4: Brawl Stars', 'Slide 5: Angry Birds': 'Слайд 5: Angry Birds', 'Slide 6: Rust': 'Слайд 6: Rust',
      'Slide 7: Fishing Simulator': 'Слайд 7: Fishing Simulator', 'Slide 8: I Am Bear': 'Слайд 8: I Am Bear', 'Slide 9: Librarian Simulator': 'Слайд 9: Librarian Simulator',
      'Colourful Minecraft logo': 'Яркий логотип Minecraft', 'Red and black Dota 2 character artwork': 'Иллюстрация персонажа Dota 2 в красных и чёрных тонах',
      'Roblox character beside a car at night': 'Персонаж Roblox рядом с автомобилем ночью', 'Brawl Stars character comparison': 'Сравнение персонажей Brawl Stars',
      'Red Angry Birds character with a bow': 'Красная птица из Angry Birds с луком', 'Cartoon character in a Rust landscape': 'Мультяшный персонаж на фоне Rust',
      'Fishing gameplay showing a caught fish': 'Игровой процесс Fishing Simulator: пойманная рыба', 'I Am Bear cover artwork': 'Обложка игры I Am Bear',
      'First-person view of books in a library': 'Книги в библиотеке от первого лица', 'Browse the game catalogue after Counter-Strike 2': 'Открыть каталог после Counter-Strike 2',
      'Browse the game catalogue after Grand Theft Auto V': 'Открыть каталог после Grand Theft Auto V', 'Browse the game catalogue after Dota 2': 'Открыть каталог после Dota 2',
      'Browse the game catalogue after Cyberpunk 2077': 'Открыть каталог после Cyberpunk 2077', 'Browse the game catalogue after Elden Ring': 'Открыть каталог после Elden Ring',
      'Browse the game catalogue after Red Dead Redemption 2': 'Открыть каталог после Red Dead Redemption 2', 'Browse the game catalogue after Hogwarts Legacy': 'Открыть каталог после Hogwarts Legacy',
      "Browse the game catalogue after Baldur's Gate 3": "Открыть каталог после Baldur's Gate 3", 'Close subscription form': 'Закрыть форму подписки',
      'Make yourself at home': 'Настройте сайт под себя'
    },
    kk: {
      'Language': 'Тіл', 'Choose language': 'Тілді таңдаңыз', 'Main navigation': 'Негізгі навигация',
      'Search the store': 'Дүкеннен іздеу', 'Store collections': 'Дүкен бөлімдері', 'Page sections': 'Бет бөлімдері',
      'Search games': 'Ойындарды іздеу', 'Choose featured game': 'Таңдаулы ойынды таңдау', 'The hub in numbers': 'Сайт сандармен',
      'Previous featured game': 'Алдыңғы таңдаулы ойын', 'Next featured game': 'Келесі таңдаулы ойын', 'Registration steps': 'Тіркелу қадамдары',
      'Carousel': 'Карусель', 'Browse games': 'Ойындарды шолу', 'Browse the game catalogue': 'Ойындар каталогын ашу',
      'Player name': 'Ойыншы аты', 'Your nickname': 'Бүркеншік атыңыз', 'Search games in your library': 'Кітапханаңыздан ойын іздеу',
      'Enter your name': 'Атыңызды енгізіңіз', 'Enter your email': 'Электрондық поштаңызды енгізіңіз', 'Write your message here...': 'Хабарламаңызды жазыңыз...',
      'Please check this box to continue.': 'Жалғастыру үшін осы құсбелгіні қойыңыз.',
      'Your message is valid. This is a demo form; no message has been sent.': 'Хабарлама дұрыс толтырылды. Бұл демонстрациялық форма, хабарлама жіберілген жоқ.',
      'Your email is valid. This is a demo form; no subscription has been created.': 'Электрондық пошта дұрыс. Бұл демонстрациялық форма, жазылым жасалған жоқ.',
      'Game gallery': 'Ойындар галереясы',
      'Steam Game Hub - About Us': 'Steam Game Hub — Жоба туралы', 'Steam Game Hub - Categories': 'Steam Game Hub — Санаттар',
      'Steam Game Hub - Community': 'Steam Game Hub — Қауымдастық', 'Steam Game Hub - Contact': 'Steam Game Hub — Қолдау',
      'Steam Game Hub - Featured Games': 'Steam Game Hub — Таңдаулы ойындар', 'Steam Game Hub - Gaming News': 'Steam Game Hub — Ойын жаңалықтары',
      'Steam Game Hub - Responsive Showcase': 'Steam Game Hub — Бейімделетін витрина', 'Steam Game Hub — All games': 'Steam Game Hub — Барлық ойындар',
      'Steam Game Hub — Store': 'Steam Game Hub — Дүкен', 'Steam Game Hub — Library': 'Steam Game Hub — Кітапхана',
      'Skip to main content': 'Негізгі мазмұнға өту', 'Skip to content': 'Мазмұнға өту', 'Team Eggs': 'Eggs командасы',
      'Web Technologies I': 'Веб-технологиялар I', 'Main navigation': 'Негізгі навигация', 'Store': 'Дүкен', 'Library': 'Кітапхана',
      'All games': 'Барлық ойындар', 'Featured': 'Таңдаулы', 'Featured games': 'Таңдаулы ойындар', 'Community': 'Қауымдастық', 'News': 'Жаңалықтар',
      'About': 'Жоба туралы', 'Support': 'Қолдау', 'Player 1': '1-ойыншы', 'DEMO WALLET': 'ДЕМО ӘМІЯН', 'Browse games': 'Ойындарды шолу',
      'Categories': 'Санаттар', 'Free to play': 'Тегін ойындар', 'Search the store': 'Дүкеннен іздеу', 'Search games': 'Ойындарды іздеу',
      'Your library': 'Кітапханаңыз', 'Toggle navigation': 'Мәзірді ашу немесе жабу', 'Search games': 'Ойындарды іздеу',
      'Store collections': 'Дүкен бөлімдері', 'Page sections': 'Бет бөлімдері', 'Explore the hub': 'Сайт бөлімдері',
      'Find your genre': 'Өз жанрыңызды табыңыз', 'Explore genres': 'Ойын жанрлары', 'Choosing a genre': 'Жанрды таңдау',
      'Discover the gallery': 'Ойындар галереясы', 'Responsive showcase': 'Бейімделетін витрина', 'Get in touch': 'Бізбен байланысу',
      'Contact information': 'Байланыс ақпараты', 'Message form': 'Хабарлама формасы', 'Frequently asked questions': 'Жиі қойылатын сұрақтар',
      'Meet our team': 'Біздің команда', 'Community snapshot': 'Қауымдастық туралы', 'Discussions': 'Талқылаулар', 'Game gallery': 'Ойындар галереясы', 'Get involved': 'Қосылыңыз',
      'About the hub': 'Жоба туралы', 'Our project': 'Біздің жоба', 'Our team': 'Біздің команда', 'Contact us': 'Бізбен байланысу',
      'YOUR NEXT GREAT ADVENTURE': 'КЕЛЕСІ ҮЛКЕН ШЫТЫРМАН ОҚИҒАҢЫЗ', 'Featured & Recommended': 'Таңдаулы және ұсынылған', 'Handpicked for you': 'Сіз үшін таңдалған',
      'IN THE SPOTLIGHT': 'НАЗАРДА', 'Very Positive': 'Өте жақсы', 'Community favourite': 'Қауымдастық таңдауы', 'Worth your': 'Келесі ойын', 'next session.': 'уақытыңызға тұрарлық.',
      'Choose your hero. Find your team. Every match is a new story.': 'Кейіпкеріңізді таңдаңыз, командаңызды табыңыз. Әр матч — жаңа оқиға.',
      'MOBA': 'MOBA', 'Multiplayer': 'Көп ойыншылы', 'Strategy': 'Стратегия', 'JUMP INTO SOMETHING GREAT': 'КЕРЕМЕТ ОЙЫНҒА ҚОСЫЛЫҢЫЗ',
      'Add to library': 'Кітапханаға қосу', 'GOOD GAMES. GREAT TIMES.': 'ЖАҚСЫ ОЙЫН. КЕРЕМЕТ ӘСЕР.', 'Discover something you’ll love': 'Өзіңізге ұнайтын ойынды табыңыз',
      'Browse all games': 'Барлық ойынды көру', 'RPG': 'Рөлдік ойын', 'Shooter': 'Атыс ойыны', 'Action': 'Экшн', 'Sandbox': 'Құмсалғыш', 'Adventure': 'Шытырман оқиға',
      'Choose your adventure': 'Шытырман оқиғаны таңдаңыз', 'Cyberpunk 2077': 'Cyberpunk 2077', 'Counter-Strike 2': 'Counter-Strike 2',
      'Red Dead Redemption 2': 'Red Dead Redemption 2', 'Elden Ring': 'Elden Ring',
      'Become an urban mercenary in the neon-lit streets of Night City.': 'Түнгі қаланың неон шамдары жарқыраған көшелерінде жалдамалы жауынгер болыңыз.',
      'Precision. Teamwork. One more round. The definitive competitive tactical shooter.': 'Дәлдік пен командалық жұмыс. Тағы бір раунд! Бұл — бәсекелі тактикалық атыс ойынының үздігі.',
      'An epic tale of life, loyalty and survival in the American frontier.': 'Американың жабайы батысындағы өмір, адалдық және аман қалу туралы эпикалық хикая.',
      'Rise, Tarnished. Explore the Lands Between and forge your own path.': 'Тұр, Сөнген. Аралық жерлерді зерттеп, өз жолыңды сал.',
      'Three lives collide in Los Santos. Make the city your playground.': 'Лос-Сантоста үш тағдыр тоғысады. Қаланы өз алаңыңызға айналдырыңыз.',
      'A world of possibilities, built one block at a time.': 'Мүмкіндіктерге толы әлемді әр блоктан құрастырыңыз.',
      'Gather your party for a story shaped by your choices.': 'Шешімдеріңізге қарай өрбитін оқиғаға серіктеріңізді жинаңыз.',
      'Discover an open-world adventure in the wizarding world.': 'Сиқыршылар әлеміндегі ашық әлем шытырман оқиғасын бастаңыз.',
      'YOUR PLAYGROUND, YOUR COLLECTION': 'СІЗДІҢ ӘЛЕМІҢІЗ — СІЗДІҢ ЖИНАҒЫҢЫЗ', 'Your next game starts with $100.': 'Келесі ойыныңызды $100 демо-баланстан бастаңыз.',
      'Every profile gets a virtual wallet. Try a game, leave a rating, make it yours.': 'Әр профильге виртуалды әмиян беріледі. Ойынды байқап, бағалап, жинағыңызға қосыңыз.',
      'Your balance refills to $100 when you refresh. Your collection stays.': 'Бетті жаңартқанда баланс $100-ге толады, ал ойындар жинағы сақталады.',
      'Explore the store →': 'Дүкенге өту →', 'games to discover': 'танысуға болатын ойын', 'starting demo balance': 'бастапқы демо-баланс',
      'free-to-play favourites': 'тегін ойын', 'genres to explore': 'зерттейтін жанр', 'Better games. Better together.': 'Бірге ойнау қызығырақ.',
      'Share the hub with your party.': 'Сайтты достарыңызбен бөлісіңіз.', 'Copy link': 'Сілтемені көшіру', 'Copied': 'Көшірілді',
      'Copied to clipboard!': 'Сілтеме көшірілді.', 'Copy unavailable. Select the link to copy it manually.': 'Көшіру мүмкін болмады. Сілтемені белгілеп, қолмен көшіріңіз.',
      'More hub tools · Clock, themes & sound': 'Қосымша мүмкіндіктер · сағат, тақырыптар және дыбыс', 'Make yourself at home': 'Сайтты өзіңізге ыңғайлаңыз',
      'Your local date and time': 'Жергілікті күн мен уақыт', 'Enable JavaScript to see the current time.': 'Ағымдағы уақытты көру үшін JavaScript-ті қосыңыз.',
      'Change background': 'Фонды өзгерту', 'Current background:': 'Ағымдағы фон:', 'Midnight': 'Түн ортасы', 'Ocean': 'Мұхит', 'Plum': 'Алқызыл', 'Forest': 'Орман',
      'Filter games': 'Ойындарды сүзу', 'Build your player card': 'Ойыншы картасын жасау', 'Join the community': 'Қауымдастыққа қосылу',
      'Try our newsletter': 'Жаңалықтарға жазылу', 'A little sound for your hub': 'Сайтқа шағын дыбыс қосыңыз', 'Play notification': 'Дыбысты ойнату',
      'Play a short chime when you want to hear it.': 'Қысқа дыбысты есту үшін басыңыз.',
      'THE GAME COLLECTION': 'ОЙЫНДАР ЖИНАҒЫ', 'Find your next favourite': 'Өзіңізге ұнайтын ойынды табыңыз',
      'A new world, a familiar favourite, or one more round. Find your kind of game.': 'Жаңа әлем, таныс сүйікті ойын немесе тағы бір раунд. Өзіңізге лайық ойынды табыңыз.',
      'Genre': 'Жанр', 'All genres': 'Барлық жанр', 'Price': 'Бағасы', 'All prices': 'Барлық баға', 'Under $30 (paid)': '$30-ға дейін (ақылы)',
      '$30 and above': '$30 және одан жоғары', 'Within my balance': 'Балансым шегінде', 'Reset filters ↺': 'Сүзгілерді тазалау ↺',
      'Virtual wallet · $100 on refresh': 'Демо-әмиян · жаңартқанда $100', 'Buy game': 'Ойынды сатып алу', 'No games here yet': 'Әзірге ойын жоқ',
      'Try a different search or reset your filters.': 'Басқа сөзбен іздеңіз немесе сүзгілерді тазалаңыз.', 'Explore all games →': 'Барлық ойынды көру →',
      'YOUR PERSONAL LIBRARY': 'ЖЕКЕ КІТАПХАНАҢЫЗ', 'Your collection': 'Жинағыңыз', 'All your adventures, in one place. Rate your games or return one to your wallet.': 'Барлық шытырман оқиғаңыз бір жерде. Ойындарды бағалаңыз немесе ақшасын әмиянға қайтарыңыз.',
      'Popular games': 'Танымал ойындар', 'Popular genres': 'Танымал жанрлар', 'EXPLORE OUR COLLECTION': 'ЖИНАҒЫМЫЗДЫ ШОЛЫҢЫЗ',
      'Check out some of the games selected by Steam Game Hub.': 'Steam Game Hub таңдаған ойындарды көріңіз.', 'Popular Games': 'Танымал ойындар',
      'View catalogue': 'Каталогты ашу', 'Genres': 'Жанрлар', 'Popular Genres': 'Танымал жанрлар', 'Free': 'Тегін',
      'A competitive tactical shooter based on teamwork and strategy.': 'Командалық жұмыс пен стратегияға негізделген бәсекелі тактикалық атыс ойыны.',
      'An open-world action game with missions and exploration.': 'Тапсырмалар мен зерттеуге толы ашық әлемдегі экшн ойыны.',
      'A multiplayer strategy game featuring team-based battles.': 'Командалық шайқастары бар көп ойыншылы стратегиялық ойын.',
      'A futuristic open-world RPG set in Night City.': 'Түнгі қалада өтетін футуристік ашық әлем рөлдік ойыны.',
      'Explore a vast fantasy world, defeat enemies, and discover secrets.': 'Алып фэнтези әлемін зерттеп, жауларды жеңіп, құпияларды ашыңыз.',
      'Experience an open-world western adventure with a detailed story.': 'Мазмұнды оқиғасы бар ашық әлемдегі вестерн шытырманын бастан өткізіңіз.',
      'Explore a magical world and experience life as a student wizard.': 'Сиқырлы әлемді зерттеп, сиқыр мектебінің оқушысы болыңыз.',
      'Build your character and explore an adventure-driven fantasy world.': 'Кейіпкеріңізді жасап, шытырман оқиғаларға толы фэнтези әлемін зерттеңіз.',
      'About the hub': 'Жоба туралы', 'Our project': 'Біздің жоба', 'Our team': 'Біздің команда', 'Game gallery': 'Ойындар галереясы',
      'TEAM EGGS': 'EGGS КОМАНДАСЫ', 'GET TO KNOW US': 'БІЗБЕН ТАНЫСЫҢЫЗ', 'About Steam Game Hub': 'Steam Game Hub туралы',
      'Learn more about our project and the team behind it.': 'Жобамыз бен оны жасаған команда туралы көбірек біліңіз.', 'About Our Project': 'Жобамыз туралы',
      'Steam Game Hub is a student web project created for the Web Technologies I course.': 'Steam Game Hub — «Веб-технологиялар I» пәні аясында жасалған студенттік веб-жоба.',
      'Our website brings together information about popular games, genres, gaming news, and community experiences. It is a visual academic project and does not include a real store, user accounts, or a backend.': 'Сайтта танымал ойындар, жанрлар, ойын жаңалықтары және қауымдастық туралы ақпарат жинақталған. Бұл — оқу мақсатындағы таныстырылым жоба; мұнда нақты дүкен, пайдаланушы тіркелгілері немесе серверлік бөлік жоқ.',
      'Our Team': 'Біздің команда', 'Developer 1': '1-әзірлеуші', 'Developer 2': '2-әзірлеуші', 'Developer 3': '3-әзірлеуші', 'Developer 4': '4-әзірлеуші',
      'OUR GAMING PICKS': 'БІЗ ТАҢДАҒАН ОЙЫНДАР', 'Games That Inspire Us': 'Бізге шабыт беретін ойындар',
      'From familiar favourites to unusual simulators, these games show the variety of worlds we enjoy exploring.': 'Таныс сүйікті ойындардан ерекше симуляторларға дейін — бұл ойындар біз зерттегенді ұнататын әлемдердің алуан түрлілігін көрсетеді.',
      'Previous image': 'Алдыңғы сурет', 'Next image': 'Келесі сурет',
      'Use the arrows, indicators or your keyboard to explore all nine images. Slides advance only when you choose.': 'Тоғыз суреттің бәрін көрсеткілермен, индикаторлармен немесе пернетақтамен шолыңыз. Слайд тек өзіңіз таңдағанда ауысады.',
      'A little discovery. A new favourite. Your next adventure.': 'Жаңа жаңалық. Жаңа сүйікті ойын. Келесі шытырман оқиға.', 'Student project · Virtual purchases only ·': 'Студенттік жоба · Тек виртуалды сатып алулар ·',
      'Find your play style': 'Ойын мәнеріңізді табыңыз', 'Build a quick player card in three steps. Your details stay on this page.': 'Ойыншы картасын үш қадамда жасаңыз. Мәліметтеріңіз осы бетте қалады.',
      'Enable JavaScript to try the player card builder.': 'Ойыншы картасын жасау үшін JavaScript-ті қосыңыз.', 'What should we call you?': 'Сізді қалай атаймыз?', 'Player name': 'Ойыншы аты',
      'Choose your favourites': 'Ұнататындарыңызды таңдаңыз', 'Favourite genre': 'Сүйікті жанр', 'Choose a genre': 'Жанрды таңдаңыз', 'Play style': 'Ойын мәнері',
      'Choose a play style': 'Ойын мәнерін таңдаңыз', 'Solo': 'Жеке', 'Co-op': 'Бірлескен ойын', 'Competitive': 'Бәсекелі',
      'Review your player card': 'Ойыншы картасын тексеріңіз', 'Use Back to change your preferences before creating the preview.': 'Алдын ала көріністі жасамай тұрып, қалауларыңызды өзгерту үшін «Артқа» басыңыз.',
      'Back': 'Артқа', 'Next': 'Келесі', 'Create player card': 'Ойыншы картасын жасау', 'Start over': 'Қайта бастау',
      'FIND YOUR PEOPLE': 'ӨЗ ОРТАҢЫЗДЫ ТАБЫҢЫЗ', 'Join the gaming community': 'Ойын қауымдастығына қосылыңыз',
      'Meet players who share your favourite worlds, genres and adventures.': 'Сізбен бірдей әлемдер мен жанрларды ұнататын ойыншылармен танысыңыз.',
      'Three small steps to your local player profile and a $100 demo wallet. Your email and sample password are checked here, then discarded. Use a demo password.': 'Жергілікті ойыншы профилі мен $100 демо-балансты үш қадамда жасаңыз. Электрондық пошта мен сынақ құпиясөзі тексерілген соң жойылады. Тек сынақ құпиясөзін қолданыңыз.',
      'Have a question? Contact us': 'Сұрағыңыз бар ма? Бізге жазыңыз', 'Name': 'Аты', 'Email': 'Электрондық пошта', 'Password': 'Құпиясөз',
      'Your player name': 'Ойыншы атыңыз', 'Your email address': 'Электрондық пошта мекенжайыңыз', 'One more step towards your next adventure.': 'Келесі шытырман оқиғаға тағы бір қадам.',
      'Email address': 'Электрондық пошта мекенжайы', 'Finish your player profile': 'Ойыншы профилін аяқтау', 'Use a sample password for this frontend demo.': 'Бұл интерфейс демонстрациясында сынақ құпиясөзін қолданыңыз.',
      'At least 8 characters. Not saved or sent anywhere.': 'Кемінде 8 таңба. Сақталмайды және ешқайда жіберілмейді.', 'Confirm password': 'Құпиясөзді растаңыз',
      '← Back': '← Артқа', 'Continue →': 'Жалғастыру →', 'Explore the store →': 'Дүкенге өту →', 'Add another player': 'Тағы бір ойыншы қосу',
      'Community Game Gallery': 'Қауымдастық ойындарының галереясы', 'CONNECT • SHARE • DISCUSS': 'БАЙЛАНЫС • БӨЛІСУ • ТАЛҚЫЛАУ',
      'Steam Game Hub Community': 'Steam Game Hub қауымдастығы', 'Exchange tactical guides, discuss upcoming releases, and team up for multiplayer battles.': 'Тактикалық кеңестермен бөлісіп, алдағы ойындарды талқылаңыз және көп ойыншылы шайқастарға команда құрыңыз.',
      'A student community concept with illustrative discussions and statistics.': 'Талқылаулар мен статистиканың үлгісі бар студенттік қауымдастық тұжырымдамасы.',
      'Players Online': 'желіде', 'Active Discussions': 'белсенді талқылау', 'Community Guides': 'қауымдастық нұсқаулығы', 'Verified Clans': 'тексерілген клан',
      'Trending Discussions': 'Қызу талқылаулар', 'Participate in active conversations with community members and game developers.': 'Қауымдастық мүшелерімен және ойын әзірлеушілерімен пікір алмасыңыз.',
      'Pinned': 'Бекітілген', 'Announcement': 'Хабарландыру', 'Official Guidelines & Forum Code of Conduct': 'Қауымдастықтың ресми ережелері', 'Started by': 'Авторы:',
      '• 2 hours ago in': '• 2 сағат бұрын ·', 'Platform News': 'Платформа жаңалықтары', 'Replies': 'жауап', 'Hot': 'Танымал',
      'Best RPG game of 2026: What are your top three picks?': '2026 жылдың үздік рөлдік ойыны: сіздің үш таңдауыңыз қандай?', 'Role-Playing Games': 'Рөлдік ойындар',
      'Guide': 'Нұсқаулық', 'CS2 Smoke & Flash Utility Placement for Competitive Season 3': 'CS2: жарыс маусымының 3-кезеңіне арналған түтін және жарық гранаталары бойынша нұсқаулық',
      'Competitive Guides': 'Жарысқа арналған кеңестер', 'Hardware': 'Құрылғылар', 'Steam Deck vs Gaming Laptop for University Dorm Life': 'Жатақханаға қайсысы ыңғайлы: Steam Deck пе, ойын ноутбугі ме?',
      'Hardware & Tech': 'Құрылғылар мен технологиялар', 'Which autumn game release are you most excited to play?': 'Күзде шығатын қай ойынды асыға күтіп жүрсіз?',
      'General Gaming': 'Ойындар туралы', 'Community Rules': 'Қауымдастық ережелері', 'Be Respectful:': 'Бір-біріңізді құрметтеңіз:', 'Toxic conduct is not tolerated.': 'Қорлау мен кемсітуге жол берілмейді.',
      'No Spam:': 'Спам жібермеңіз:', 'Keep links helpful and avoid advertising.': 'Пайдалы сілтемелермен бөлісіп, жарнамадан аулақ болыңыз.',
      'Stay on Topic:': 'Тақырыптан ауытқымаңыз:', 'Use the correct category and tags.': 'Дұрыс санат пен тегтерді қолданыңыз.', 'Security First:': 'Қауіпсіздік маңызды:',
      'Never share passwords or API keys.': 'Құпиясөздер мен API кілттерін ешкімге бермеңіз.', 'Report Violations:': 'Ереже бұзушылық туралы хабарлаңыз:',
      'Help keep the community welcoming.': 'Қауымдастықтың жайлы болуына үлес қосыңыз.', 'Community Channels': 'Қауымдастық арналары',
      '→ Official Discord Community': '→ Ресми Discord қауымдастығы', '→ Steam Community Group': '→ Steam Community тобы', '→ Reddit r/SteamGameHub': '→ Reddit r/SteamGameHub',
      '→ Workshop & Guides': '→ Workshop және нұсқаулықтар', '→ Weekend Tournaments': '→ Демалыс күнгі турнирлер', 'YOUR PLAYER CARD': 'ОЙЫНШЫ КАРТАҢЫЗ',
      'GET IN TOUCH': 'БІЗБЕН БАЙЛАНЫСЫҢЫЗ', 'Contact Steam Game Hub': 'Steam Game Hub-пен байланысу', 'Have a question or want to share your favourite game? Leave a message.': 'Сұрағыңыз бар ма немесе сүйікті ойыныңызбен бөліскіңіз келе ме? Хабарлама қалдырыңыз.',
      'Contact Us': 'Бізге жазыңыз', 'Fill out the form and tell us what you think about Steam Game Hub.': 'Форманы толтырып, Steam Game Hub туралы пікіріңізді айтыңыз.',
      'We would also like to know which game genres you enjoy most.': 'Сондай-ақ қай ойын жанрларын ұнататыныңызды білгіміз келеді.',
      'This demonstration checks your input locally. No information is sent or stored.': 'Бұл демонстрация енгізілген деректерді браузерде тексереді. Ешбір ақпарат жіберілмейді немесе сақталмайды.',
      'Enter your name': 'Атыңызды енгізіңіз', 'Enter your email': 'Электрондық поштаңызды енгізіңіз', 'Favourite Genre': 'Сүйікті жанр',
      'Message': 'Хабарлама', 'Write your message here...': 'Хабарламаңызды жазыңыз...', 'Preferred platform': 'Қалаған платформа', 'PC': 'Компьютер', 'Console': 'Консоль',
      'I understand this is a local demonstration.': 'Бұл жергілікті демонстрация екенін түсінемін.', 'Preview message': 'Хабарламаны алдын ала көру',
      'GOOD TO KNOW': 'ПАЙДАЛЫ АҚПАРАТ', 'Is Steam Game Hub an official Steam website?': 'Steam Game Hub ресми Steam сайты ма?',
      'No. This is an independent student project by Team Eggs for Web Technologies I. Game listings, prices and news are sample content, and this site does not sell games.': 'Жоқ. Бұл — Eggs командасының «Веб-технологиялар I» пәніне арналған тәуелсіз студенттік жобасы. Ойындар, бағалар мен жаңалықтар мысал ретінде берілген, сайт ойын сатпайды.',
      'Can I create an account or subscribe?': 'Тіркелгі ашуға немесе жаңалықтарға жазылуға бола ма?', 'You can try the': 'Мына форманы байқап көріңіз:', 'registration form': 'тіркелу формасы',
      'and the': 'және', 'newsletter popup': 'жаңалықтарға жазылу терезесі', '. Both validate your input locally. They do not create accounts, send emails or save personal information.': '. Екеуі де енгізілген деректерді браузерде тексереді. Тіркелгі ашпайды, хат жібермейді және жеке мәліметті сақтамайды.',
      'Where can I discover games by genre?': 'Ойындарды жанры бойынша қайдан табуға болады?', 'Explore our': 'Біздің', 'categories': 'санаттардан',
      'for action, RPG, strategy and more, or visit': 'экшн, рөлдік ойын, стратегия және басқа жанрларды қараңыз немесе', 'featured games': 'таңдаулы ойындар', 'to see our picks.': 'бөліміндегі таңдауларды көріңіз.',
      'Can I change the background, and which time is shown?': 'Фонды өзгертуге бола ма және сағат қай уақытты көрсетеді?', 'Use Change background on the': 'Төрт түсті ауыстыру үшін',
      'home page': 'басты беттегі', 'to cycle through four colours. The clock shows your device\'s local date and time and updates every second.': '«Фонды өзгерту» түймесін басыңыз. Сағат құрылғыңыздағы жергілікті күн мен уақытты көрсетіп, әр секунд сайын жаңарады.',
      'FIND YOUR PLAY STYLE': 'ОЙЫН МӘНЕРІҢІЗДІ ТАБЫҢЫЗ', 'Game Categories': 'Ойын санаттары', 'Every genre offers a different kind of challenge, story, and shared experience.': 'Әр жанрда өзіне тән сынақ, оқиға және бірге ойнау мүмкіндігі бар.',
      'Explore by Genre': 'Жанр бойынша таңдау', 'Fast movement, memorable set pieces, and challenges that keep players on their toes.': 'Шапшаң қимыл, есте қаларлық көріністер мен сергек болуды талап ететін сынақтар.',
      'View action games →': 'Экшн ойындарын көру →', 'Build a character, make choices, and explore worlds shaped by stories and quests.': 'Кейіпкер жасап, шешім қабылдап, оқиғалар мен тапсырмаларға толы әлемді зерттеңіз.',
      'View RPG games →': 'Рөлдік ойындарды көру →', 'Test accuracy, teamwork, tactical thinking, and lightning-fast reactions.': 'Мергендігіңізді, командалық ойыныңызды, тактикалық ойлау мен жылдам реакцияңызды сынаңыз.',
      'View shooter games →': 'Атыс ойындарын көру →', 'Plan ahead, manage resources, and win through clever decisions rather than speed alone.': 'Алдын ала жоспар құрып, ресурстарды басқарыңыз және тек жылдамдықпен емес, ақылды шешімдермен жеңіңіз.',
      'View strategy games →': 'Стратегиялық ойындарды көру →', 'Travel through new settings, solve problems, and follow a compelling journey.': 'Жаңа мекендерді аралап, тапсырмаларды шешіп, қызықты сапарға аттаныңыз.',
      'View adventure games →': 'Шытырман оқиғалы ойындарды көру →', 'Experience realistic systems, detailed worlds, and goals that unfold at your own pace.': 'Шынайы жүйелер мен егжей-тегжейлі әлемдерді өз қарқыныңызбен зерттеңіз.',
      'View simulation games →': 'Симуляторларды көру →', 'How to Choose a Genre': 'Жанрды қалай таңдау керек', 'Decide whether you prefer solo stories or playing with friends.': 'Жеке оқиғаларды ұнатасыз ба, әлде достарыңызбен ойнағанды ма — соны шешіңіз.',
      'Choose a pace: relaxed exploration, thoughtful planning, or fast competition.': 'Қарқынды таңдаңыз: асықпай зерттеу, мұқият жоспарлау немесе жылдам жарыс.',
      'Try a game with a setting that interests you.': 'Өзіңізге қызық әлемі бар ойынды байқап көріңіз.', 'Read the description and rating before adding it to your list.': 'Тізімге қоспас бұрын сипаттамасы мен бағасын оқыңыз.',
      'LATEST UPDATES & ANNOUNCEMENTS': 'СОҢҒЫ ЖАҢАРТУЛАР МЕН ХАБАРЛАНДЫРУЛАР', 'Gaming News Hub': 'Ойын жаңалықтары',
      'Stay ahead of the game with updates, patch notes, esports coverage, and previews.': 'Жаңартулар, патч жазбалары, киберспорт жаңалықтары мен анонстардан хабардар болыңыз.',
      'Sample editorial content for our student project.': 'Студенттік жобамызға арналған жаңалық үлгілері.', 'Major Update': 'Ірі жаңарту', 'September 15, 2026': '2026 жылғы 15 қыркүйек',
      'Counter-Strike 2: Tactical Overhaul & Fall Competitive Season': 'Counter-Strike 2: тактикалық өзгерістер және күзгі жарыс маусымы',
      'Valve has rolled out its biggest seasonal update yet, with redesigned tournament maps, responsive smoke physics, calibrated sub-tick netcode, and updated Premier ratings.': 'Valve осы уақытқа дейінгі ең ірі маусымдық жаңартуын шығарды: турнир карталары жаңартылды, түтін физикасы жақсарды, sub-tick желі жүйесі реттелді және Premier рейтингі жаңарды.',
      '“Our focus for this season was uncompromising hit registration, smooth performance, and rewarding tactical team play.”': '«Бұл маусымда дәл атуды тіркеуге, тұрақты жұмысқа және тактикалық командалық ойынды марапаттауға басымдық бердік».',
      '— Counter-Strike 2 Development Team': '— Counter-Strike 2 әзірлеушілер тобы', 'Discuss the Update': 'Жаңартуды талқылау',
      'Recent Stories & Industry Highlights': 'Соңғы жаңалықтар мен саладағы маңызды оқиғалар', 'Browse the latest articles, tournament recaps, and event announcements.': 'Соңғы мақалаларды, турнир қорытындыларын және іс-шара хабарландыруларын оқыңыз.',
      'September 14, 2026': '2026 жылғы 14 қыркүйек', 'Cyberpunk Lore Expansion: New Night City Chapters Revealed': 'Cyberpunk әлемі кеңейеді: Түнгі қаланың жаңа оқиғалары жарияланды',
      'A fresh narrative update introduces unexplored districts, cyberware mechanics, and ray-tracing optimizations.': 'Жаңа сюжеттік жаңарту зерттелмеген аудандарды, киберимплант механикасын және сәулені бақылауды оңтайландыруды қосады.',
      'Explore RPG games →': 'Рөлдік ойындарды көру →', 'Esports': 'Киберспорт', 'September 12, 2026': '2026 жылғы 12 қыркүйек',
      'The International 2026: Qualifier Schedule Finalized': 'The International 2026: іріктеу кезеңінің кестесі бекітілді',
      'Sixteen rosters prepare to compete. Follow the group stages and share your predictions with the community.': 'Он алты команда жарысқа дайындалуда. Топтық кезеңді бақылап, болжамдарыңызды қауымдастықпен бөлісіңіз.',
      'Join the discussion →': 'Талқылауға қосылу →', 'Seasonal Sale': 'Маусымдық жеңілдіктер', 'September 10, 2026': '2026 жылғы 10 қыркүйек',
      'Steam Autumn Sale: Discounts on Thousands of Titles': 'Steam күзгі жеңілдігі: мыңдаған ойынға жеңілдік',
      'Build a wishlist of AAA blockbusters and indie games from every major category.': 'Әр санаттан танымал AAA ойындары мен инди жобаларын қалаулар тізіміне қосыңыз.',
      'See featured games →': 'Таңдаулы ойындарды көру →', 'September 8, 2026': '2026 жылғы 8 қыркүйек', 'Steam Deck Ecosystem: More Games Now Verified': 'Steam Deck жүйесі: енді көбірек ойын тексеруден өтті',
      'Hundreds of classic and modern titles have gained better portable-PC support.': 'Жүздеген классикалық және заманауи ойын портативті компьютерлерде жақсырақ жұмыс істейді.',
      'Browse the catalogue →': 'Каталогты шолу →', 'Tech': 'Технология', 'September 5, 2026': '2026 жылғы 5 қыркүйек',
      'Next-Gen Game Physics: Shaping Open Worlds': 'Жаңа буын ойын физикасы ашық әлемдерді өзгертеді',
      'Developers discuss how atmospheric simulation and lighting improve modern game worlds.': 'Әзірлеушілер атмосфераны модельдеу мен жарықтандыру заманауи ойын әлемдерін қалай жақсартатынын талқылайды.',
      'Explore genres →': 'Жанрларды шолу →', 'September 2, 2026': '2026 жылғы 2 қыркүйек', 'Community Creations: Top Steam Workshop Mods': 'Қауымдастық туындылары: Steam Workshop-тағы үздік модтар',
      'Discover fan-created multiplayer maps, interface redesigns, and more.': 'Жанкүйерлер жасаған көп ойыншылы карталарды, интерфейс өзгерістерін және басқа дүниелерді көріңіз.', 'Visit community →': 'Қауымдастыққа өту →',
      'Never Miss a Gaming Update': 'Ойын жаңалықтарын жіберіп алмаңыз', 'Try our newsletter subscription demo. Enter an email to preview the signup; no subscription is created.': 'Жаңалықтарға жазылу демонстрациясын байқап көріңіз. Мекенжайды енгізіп, форманы көріңіз; жазылу жасалмайды.',
      'Subscribe to updates': 'Жаңалықтарға жазылу', 'Gaming updates, in your inbox': 'Ойын жаңалықтары поштаңызда',
      'Preview a newsletter signup. This demo checks your email locally and does not send or store it.': 'Жаңалықтарға жазылу формасын алдын ала көріңіз. Электрондық пошта браузерде тексеріледі, жіберілмейді және сақталмайды.',
      'Try subscription': 'Жазылуды тексеру',
      'THREE WORLDS. YOUR NEXT ADVENTURE.': 'ҮШ ӘЛЕМ. КЕЛЕСІ ШЫТЫРМАН ОҚИҒАҢЫЗ.', 'Great games.': 'Керемет ойындар.', 'Any screen.': 'Кез келген экранда.',
      'Whether you play at your desk or discover new games on the go, there\'s a world here for you. Explore three of our favourites.': 'Үстелдегі компьютерде ойнасаңыз да, жолда жаңа ойын іздесеңіз де, мұнда сізге арналған әлем бар. Біз ұнататын үш ойынды көріңіз.',
      'Handpicked by Team Eggs': 'Eggs командасы таңдады', 'FANTASY / RPG': 'ФЭНТЕЗИ / RPG',
      'Journey through the Lands Between, uncover hidden paths and take on unforgettable challenges.': 'Аралық жерлерді аралап, жасырын соқпақтарды тауып, ұмытылмас сынақтардан өтіңіз.',
      'Explore Elden Ring': 'Elden Ring әлемін зерттеу', 'OPEN WORLD / RPG': 'АШЫҚ ӘЛЕМ / RPG',
      'Make your own way through Night City, a futuristic world of neon streets and unexpected stories.': 'Неон көшелері мен күтпеген оқиғаларға толы болашақтың Түнгі қаласында өз жолыңызды табыңыз.',
      'Explore Cyberpunk 2077': 'Cyberpunk 2077 әлемін зерттеу', 'ADVENTURE / OPEN WORLD': 'ШЫТЫРМАН ОҚИҒА / АШЫҚ ӘЛЕМ',
      'Ride across vast landscapes and follow a memorable story set at the end of the American frontier.': 'Кең даланы кезіп, Американың жабайы батысы дәуірінің соңында өтетін есте қаларлық оқиғаға куә болыңыз.',
      'Explore Red Dead Redemption 2': 'Red Dead Redemption 2 әлемін зерттеу', 'Steam Game Hub · Web Technologies I': 'Steam Game Hub · Веб-технологиялар I',
      'Team Eggs | SE-2507': 'Eggs командасы | SE-2507', 'Your nickname': 'Бүркеншік атыңыз', 'Your player name': 'Ойыншы атыңыз', 'player@example.com': 'player@example.com',
      'Name or genre…': 'Атауы немесе жанры…', 'Not rated': 'Бағаланбаған', 'Your rating': 'Сіздің бағаңыз', 'Clear': 'Тазарту',
      'Read more': 'Толығырақ', 'Read less': 'Жасыру', 'Choose a star to rate this game.': 'Ойынды бағалау үшін жұлдызды таңдаңыз.',
      'Please complete the highlighted field before continuing.': 'Жалғастыру үшін белгіленген өрісті толтырыңыз.',
      'Playing your notification sound.': 'Хабарландыру дыбысы ойнатылып жатыр.', 'Sound could not play. Check your browser audio settings and try again.': 'Дыбысты ойнату мүмкін болмады. Браузердегі дыбыс баптауын тексеріп, қайта көріңіз.',
      'Sound finished. You can play it again.': 'Дыбыс аяқталды. Қайта ойнатуға болады.', 'Sound is unavailable. Please reload and try again.': 'Дыбыс қолжетімсіз. Бетті жаңартып, қайта көріңіз.',
      'MAKE YOURSELF AT HOME': 'САЙТТЫ ӨЗІҢІЗГЕ ЫҢҒАЙЛАҢЫЗ', 'Choose your player': 'Ойыншыны таңдаңыз', 'Each local profile has its own wallet, library and ratings.': 'Әр жергілікті профильдің өз әмияны, кітапханасы және бағалары бар.',
      'Add a player': 'Ойыншы қосу', 'Create': 'Жасау', 'Frontend demo · Saved in this browser. Every refresh refills all wallets to $100; games and ratings stay saved.': 'Интерфейс демонстрациясы · Осы браузерде сақталады. Бет жаңарғанда әмияндар $100-ге толады; ойындар мен бағалар сақталады.',
      'Close profiles': 'Профильдер тізімін жабу', 'Close checkout': 'Рәсімдеуді жабу', 'ADD TO YOUR COLLECTION': 'ЖИНАҒЫҢЫЗҒА ҚОСУ',
      'Get this game': 'Осы ойынды алу', 'Game price': 'Ойын бағасы', 'Your balance': 'Балансыңыз', 'Balance afterwards': 'Одан кейінгі баланс', 'Cancel': 'Болдырмау', 'Confirm purchase': 'Сатып алуды растау', 'Confirm return': 'Қайтаруды растау',
      'Please wait…': 'Күте тұрыңыз…', 'Create player profile': 'Ойыншы профилін жасау', 'Your rating has been cleared.': 'Бағаңыз өшірілді.',
      'Browser storage is unavailable. Enable local storage to save profiles and purchases.': 'Браузер қоймасы қолжетімсіз. Профильдер мен сатып алуларды сақтау үшін жергілікті қойманы қосыңыз.',
      'Local storage is unavailable. Enable it to save purchases and ratings.': 'Жергілікті қойма қолжетімсіз. Сатып алулар мен бағаларды сақтау үшін оны қосыңыз.',
      'Enter a player name.': 'Ойыншы атын енгізіңіз.', 'That player already exists. Choose them above or use another name.': 'Мұндай ойыншы бар. Жоғарыдан оны таңдаңыз немесе басқа ат енгізіңіз.',
      'This browser already has 20 profiles.': 'Бұл браузерде 20 профиль бар.', 'Please complete this field.': 'Бұл өрісті толтырыңыз.',
      'This player name already exists. Choose another name or switch profiles in the header.': 'Мұндай ойыншы аты бар. Басқа ат таңдаңыз немесе сайттың жоғарғы жағынан профильді ауыстырыңыз.',
      'This browser already has 20 player profiles.': 'Бұл браузерде 20 ойыншы профилі бар.', 'Enter a valid email address, such as player@example.com.': 'player@example.com сияқты дұрыс электрондық пошта мекенжайын енгізіңіз.',
      'Use at least 8 characters.': 'Кемінде 8 таңба енгізіңіз.', 'Passwords do not match.': 'Құпиясөздер сәйкес келмейді.',
      'This player name was just taken. Choose another name.': 'Бұл ойыншы атын жаңа ғана басқа адам алды. Басқа ат таңдаңыз.',
      'Could not create the profile. Check browser storage or choose an existing player.': 'Профиль жасау мүмкін болмады. Браузер қоймасын тексеріңіз немесе бар ойыншыны таңдаңыз.',
      'Already in your library.': 'Бұл ойын кітапханаңызда бар.', 'This game is no longer in your library.': 'Бұл ойын кітапханаңызда жоқ.',
      'BACK TO YOUR WALLET': 'ӘМІЯНҒА ҚАЙТАРУ', 'Return this game?': 'Бұл ойынды қайтарасыз ба?', 'Make it yours': 'Жинағыңызға қосыңыз', 'A new adventure, for free': 'Жаңа шытырман оқиға — тегін',
      'Refund amount': 'Қайтарылатын сома', 'The game will leave your library. Your full virtual purchase price will return to your wallet.': 'Ойын кітапханаңыздан өшіріліп, сатып алынған виртуалды сомасы түгелдей әмияныңызға қайтарылады.',
      'Not enough demo funds. Pick a cheaper game, return one, or refresh to refill your wallet.': 'Демо қаражаты жеткіліксіз. Арзанырақ ойын таңдаңыз, бір ойынды қайтарыңыз немесе әмиянды толтыру үшін бетті жаңартыңыз.',
      'The active player changed. Please try again.': 'Белсенді ойыншы өзгерді. Қайталап көріңіз.', 'This game is already in your library.': 'Бұл ойын кітапханаңызда бар.',
      'Your balance changed. There are not enough funds.': 'Балансыңыз өзгерді, қаражат жеткіліксіз.', 'This game has already been returned.': 'Бұл ойын әлдеқашан қайтарылған.',
      'Could not save the purchase. Check your browser storage and try again.': 'Сатып алуды сақтау мүмкін болмады. Браузер қоймасын тексеріп, қайталап көріңіз.',
      '✓ In library': '✓ Кітапханада', 'Remove from library': 'Кітапханадан өшіру', 'No games found. Try another name or genre.': 'Ойын табылмады. Басқа атау не жанрды қолданып көріңіз.',
      'Your collection starts here. Visit the store and find your first game.': 'Жинағыңыз осы жерден басталады. Дүкенге өтіп, алғашқы ойыныңызды табыңыз.',
      'Try a different search, genre or price, or reset your filters.': 'Іздеу сөзін, жанрды не бағаны өзгертіңіз немесе сүзгілерді тазалаңыз.', '✓ Copied': '✓ Көшірілді',
      'Hub link copied to clipboard.': 'Сайт сілтемесі алмасу буферіне көшірілді.', 'Submitted successfully in this demo. No data was sent to a server.': 'Демонстрациялық форма жіберілді. Деректер серверге жіберілген жоқ.',
      'Form submitted successfully in this demo.': 'Демонстрациялық форма сәтті жіберілді.',
      'One battlefield. Infinite possibilities.': 'Бір шайқас алаңы. Шексіз мүмкіндік.', 'Night City is waiting for your story.': 'Түнгі қала сіздің оқиғаңызды күтеді.',
      'A world of wonder. A journey of your own.': 'Ғажайып әлем. Өз жолыңыз.', 'Open world': 'Ашық әлем', 'Sci-fi': 'Ғылыми фантастика', 'Exploration': 'Зерттеу', 'Fantasy': 'Фэнтези',
      'FEATURED': 'ТАҢДАУЛЫ', 'FREE TO PLAY': 'ТЕГІН ОЙЫН', 'Previous featured game': 'Алдыңғы таңдаулы ойын', 'Next featured game': 'Келесі таңдаулы ойын',
      'Choose featured game': 'Таңдаулы ойынды таңдаңыз', 'The hub in numbers': 'Сайт сандармен', 'Browse the game catalogue after': 'Ойыннан кейін каталогты ашу',
      'Game collections': 'Ойындар топтамасы', 'Close subscription form': 'Жазылу формасын жабу',
      'Team Members: Ташкенбаев Нурсултан · Бигали Абулхаир · Султанкулов Шынгыс · Лопаткин Артем': 'Команда мүшелері: Нұрсұлтан Ташкенбаев · Әбілқайыр Бигали · Шыңғыс Сұлтанқұлов · Артём Лопаткин',
      'Team Members: Ташкенбаев Нурсултан, Бигали Абулхаир, Султанкулов Шынгыс, Лопаткин Артем': 'Команда мүшелері: Нұрсұлтан Ташкенбаев, Әбілқайыр Бигали, Шыңғыс Сұлтанқұлов, Артём Лопаткин',
      'Clear your rating for': 'Ойын бағасын өшіру'
      ,'Top story': 'Басты жаңалық', 'Recent stories': 'Соңғы жаңалықтар', 'Newsletter': 'Жаңалықтар таспасы', 'Gaming news': 'Ойын жаңалықтары',
      'Your demo password': 'Сынақ құпиясөзіңіз', 'Create': 'Жасау', 'Enter your name': 'Атыңызды енгізіңіз', 'Enter your email': 'Электрондық поштаңызды енгізіңіз',
      'Your nickname': 'Бүркеншік атыңыз', 'registration steps': 'Тіркелу қадамдары', 'Close subscription form': 'Жазылу формасын жабу',
      'Slide 1: Minecraft': '1-слайд: Minecraft', 'Slide 2: Dota 2': '2-слайд: Dota 2', 'Slide 3: Roblox': '3-слайд: Roblox',
      'Slide 4: Brawl Stars': '4-слайд: Brawl Stars', 'Slide 5: Angry Birds': '5-слайд: Angry Birds', 'Slide 6: Rust': '6-слайд: Rust',
      'Slide 7: Fishing Simulator': '7-слайд: Fishing Simulator', 'Slide 8: I Am Bear': '8-слайд: I Am Bear', 'Slide 9: Librarian Simulator': '9-слайд: Librarian Simulator',
      'Colourful Minecraft logo': 'Minecraft ойынының түрлі түсті логотипі', 'Red and black Dota 2 character artwork': 'Қызыл және қара түсті Dota 2 кейіпкерінің суреті',
      'Roblox character beside a car at night': 'Түнде көліктің жанындағы Roblox кейіпкері', 'Brawl Stars character comparison': 'Brawl Stars кейіпкерлерін салыстыру',
      'Red Angry Birds character with a bow': 'Садағы бар қызыл Angry Birds кейіпкері', 'Cartoon character in a Rust landscape': 'Rust көрінісіндегі мультфильм кейіпкері',
      'Fishing gameplay showing a caught fish': 'Fishing Simulator ойыны: ұсталған балық', 'I Am Bear cover artwork': 'I Am Bear ойынының мұқабасы',
      'First-person view of books in a library': 'Кітапханадағы кітаптардың бірінші жақтан көрінісі',
      'Browse the game catalogue after Counter-Strike 2': 'Counter-Strike 2 ойыннан кейін каталогты ашу',
      'Browse the game catalogue after Grand Theft Auto V': 'Grand Theft Auto V ойыннан кейін каталогты ашу', 'Browse the game catalogue after Dota 2': 'Dota 2 ойыннан кейін каталогты ашу',
      'Browse the game catalogue after Cyberpunk 2077': 'Cyberpunk 2077 ойыннан кейін каталогты ашу', 'Browse the game catalogue after Elden Ring': 'Elden Ring ойыннан кейін каталогты ашу',
      'Browse the game catalogue after Red Dead Redemption 2': 'Red Dead Redemption 2 ойыннан кейін каталогты ашу',
      'Browse the game catalogue after Hogwarts Legacy': 'Hogwarts Legacy ойыннан кейін каталогты ашу',
      "Browse the game catalogue after Baldur's Gate 3": "Baldur's Gate 3 ойыннан кейін каталогты ашу"
    }
  };

  Object.assign(translations.ru, {
    'About the Steam Game Hub student project and its team members.': 'О студенческом проекте Steam Game Hub и его участниках.',
    'Steam Game Hub categories: action, RPG, shooter, strategy and more.': 'Категории Steam Game Hub: экшен, ролевые игры, шутеры, стратегии и другие жанры.',
    'Steam Game Hub community, discussions, guides and gaming events.': 'Сообщество Steam Game Hub: обсуждения, руководства и игровые события.',
    'Contact page for the Steam Game Hub student project.': 'Контактная страница студенческого проекта Steam Game Hub.',
    'Steam Game Hub featured games selection.': 'Подборка избранных игр Steam Game Hub.',
    'Steam Game Hub gaming news, patch notes, esports updates and community highlights.': 'Игровые новости Steam Game Hub: заметки к патчам, киберспорт и события сообщества.',
    'Discover, rate and collect your next favourite game. A frontend student game store.': 'Находите, оценивайте и добавляйте в коллекцию любимые игры. Учебный демонстрационный магазин.',
    'Three gaming picks in a responsive layout built with CSS media queries.': 'Три игровые рекомендации в адаптивной вёрстке на основе CSS-медиазапросов.',
    'Featured Games': 'Избранные игры', 'Action RPG': 'Ролевой экшен', 'Adventure RPG': 'Ролевая приключенческая игра', 'Simulation': 'Симулятор',
    'Choose the name that appears on your player profile.': 'Выберите имя, которое будет отображаться в профиле игрока.', 'Display name': 'Отображаемое имя',
    'Preferences': 'Предпочтения', 'Review': 'Проверка', "You're in. Let’s find your next game.": 'Вы зарегистрировались. Найдём следующую игру?',
    'Back to home': 'На главную', 'Team Eggs · SE-2507 · Web Technologies I': 'Команда Eggs · SE-2507 · Веб-технологии I',
    'Portrait of Nursultan Tashkenbayev': 'Портрет Нурсултана Ташкенбаева', 'Portrait of Abulkhair Bigali': 'Портрет Абулхаира Бигали',
    'Portrait of Shyngys Sultankulov': 'Портрет Шынгыса Султанкулова', 'Portrait of Artem Lopatkin': 'Портрет Артёма Лопаткина',
    '1 / 9 · Our gaming picks': '1 / 9 · Наш выбор игр', '2 / 9 · Our gaming picks': '2 / 9 · Наш выбор игр', '3 / 9 · Our gaming picks': '3 / 9 · Наш выбор игр',
    '4 / 9 · Our gaming picks': '4 / 9 · Наш выбор игр', '5 / 9 · Our gaming picks': '5 / 9 · Наш выбор игр', '6 / 9 · Our gaming picks': '6 / 9 · Наш выбор игр',
    '7 / 9 · Our gaming picks': '7 / 9 · Наш выбор игр', '8 / 9 · Our gaming picks': '8 / 9 · Наш выбор игр', '9 / 9 · Our gaming picks': '9 / 9 · Наш выбор игр',
    'FREE TO PLAY · MOBA': 'БЕСПЛАТНО · MOBA', '· Community favourite': '· Выбор сообщества', 'Dota 2 featured artwork': 'Иллюстрация Dota 2 в подборке',
    'Featured game artwork detail': 'Иллюстрация к избранной игре', 'Feature Dota 2': 'Игра в подборке: Dota 2', 'Feature Cyberpunk 2077': 'Игра в подборке: Cyberpunk 2077',
    'Feature Elden Ring': 'Игра в подборке: Elden Ring', 'Counter-Strike 2 - official Steam cover artwork': 'Официальная обложка Counter-Strike 2 в Steam',
    'Grand Theft Auto V - official Steam cover artwork': 'Официальная обложка Grand Theft Auto V в Steam',
    'Cyberpunk 2077 - official Steam cover artwork': 'Официальная обложка Cyberpunk 2077 в Steam',
    'Elden Ring - official Steam cover artwork': 'Официальная обложка Elden Ring в Steam',
    'Red Dead Redemption 2 - official Steam cover artwork': 'Официальная обложка Red Dead Redemption 2 в Steam',
    'Hogwarts Legacy - official Steam cover artwork': 'Официальная обложка Hogwarts Legacy в Steam',
    "Baldur's Gate 3 - official Steam cover artwork": "Официальная обложка Baldur's Gate 3 в Steam",
    'Official Valve Steam Deck product image': 'Официальное изображение Steam Deck от Valve',
    '▣ Your library': '▣ Ваша библиотека', 'games to discover': 'игр для знакомства', 'free-to-play favourites': 'любимых бесплатных игр', 'genres to explore': 'жанров для изучения'
  });
  Object.assign(translations.kk, {
    'About the Steam Game Hub student project and its team members.': 'Steam Game Hub студенттік жобасы мен оның қатысушылары туралы.',
    'Steam Game Hub categories: action, RPG, shooter, strategy and more.': 'Steam Game Hub санаттары: экшн, рөлдік ойын, атыс ойыны, стратегия және басқалары.',
    'Steam Game Hub community, discussions, guides and gaming events.': 'Steam Game Hub қауымдастығы: талқылаулар, нұсқаулықтар және ойын оқиғалары.',
    'Contact page for the Steam Game Hub student project.': 'Steam Game Hub студенттік жобасының байланыс беті.',
    'Steam Game Hub featured games selection.': 'Steam Game Hub таңдаған ойындар топтамасы.',
    'Steam Game Hub gaming news, patch notes, esports updates and community highlights.': 'Steam Game Hub ойын жаңалықтары: патч жазбалары, киберспорт және қауымдастық оқиғалары.',
    'Discover, rate and collect your next favourite game. A frontend student game store.': 'Сүйікті ойыныңызды тауып, бағалап, жинағыңызға қосыңыз. Студенттердің оқу мақсатындағы ойын дүкені.',
    'Three gaming picks in a responsive layout built with CSS media queries.': 'CSS медиасұраулары негізінде жасалған бейімделетін беттегі үш ойын ұсынысы.',
    'Featured Games': 'Таңдаулы ойындар', 'Action RPG': 'Рөлдік экшн', 'Adventure RPG': 'Шытырман оқиғалы рөлдік ойын', 'Simulation': 'Симулятор',
    'Choose the name that appears on your player profile.': 'Ойыншы профиліңізде көрсетілетін атты таңдаңыз.', 'Display name': 'Көрсетілетін ат',
    'Preferences': 'Қалаулар', 'Review': 'Тексеру', "You're in. Let’s find your next game.": 'Тіркелдіңіз. Келесі ойынды табайық.',
    'Back to home': 'Басты бетке оралу', 'Team Eggs · SE-2507 · Web Technologies I': 'Eggs командасы · SE-2507 · Веб-технологиялар I',
    'Portrait of Nursultan Tashkenbayev': 'Нұрсұлтан Ташкенбаевтың портреті', 'Portrait of Abulkhair Bigali': 'Әбілқайыр Бигалидің портреті',
    'Portrait of Shyngys Sultankulov': 'Шыңғыс Сұлтанқұловтың портреті', 'Portrait of Artem Lopatkin': 'Артём Лопаткиннің портреті',
    '1 / 9 · Our gaming picks': '1 / 9 · Біз таңдаған ойындар', '2 / 9 · Our gaming picks': '2 / 9 · Біз таңдаған ойындар', '3 / 9 · Our gaming picks': '3 / 9 · Біз таңдаған ойындар',
    '4 / 9 · Our gaming picks': '4 / 9 · Біз таңдаған ойындар', '5 / 9 · Our gaming picks': '5 / 9 · Біз таңдаған ойындар', '6 / 9 · Our gaming picks': '6 / 9 · Біз таңдаған ойындар',
    '7 / 9 · Our gaming picks': '7 / 9 · Біз таңдаған ойындар', '8 / 9 · Our gaming picks': '8 / 9 · Біз таңдаған ойындар', '9 / 9 · Our gaming picks': '9 / 9 · Біз таңдаған ойындар',
    'FREE TO PLAY · MOBA': 'ТЕГІН · MOBA', '· Community favourite': '· Қауымдастық таңдауы', 'Dota 2 featured artwork': 'Таңдаулы Dota 2 суреті',
    'Featured game artwork detail': 'Таңдаулы ойын суреті', 'Feature Dota 2': 'Таңдаулы ойын: Dota 2', 'Feature Cyberpunk 2077': 'Таңдаулы ойын: Cyberpunk 2077',
    'Feature Elden Ring': 'Таңдаулы ойын: Elden Ring', 'Counter-Strike 2 - official Steam cover artwork': 'Counter-Strike 2 ойынының Steam-дегі ресми мұқабасы',
    'Grand Theft Auto V - official Steam cover artwork': 'Grand Theft Auto V ойынының Steam-дегі ресми мұқабасы',
    'Cyberpunk 2077 - official Steam cover artwork': 'Cyberpunk 2077 ойынының Steam-дегі ресми мұқабасы',
    'Elden Ring - official Steam cover artwork': 'Elden Ring ойынының Steam-дегі ресми мұқабасы',
    'Red Dead Redemption 2 - official Steam cover artwork': 'Red Dead Redemption 2 ойынының Steam-дегі ресми мұқабасы',
    'Hogwarts Legacy - official Steam cover artwork': 'Hogwarts Legacy ойынының Steam-дегі ресми мұқабасы',
    "Baldur's Gate 3 - official Steam cover artwork": "Baldur's Gate 3 ойынының Steam-дегі ресми мұқабасы",
    'Official Valve Steam Deck product image': 'Valve шығарған Steam Deck құрылғысының ресми суреті',
    '▣ Your library': '▣ Кітапханаңыз', 'games to discover': 'танысуға болатын ойындар', 'free-to-play favourites': 'ұнайтын тегін ойындар', 'genres to explore': 'зерттейтін жанрлар'
  });

  Object.assign(translations.ru, {
    'More details': 'Подробнее', 'Email': 'Электронная почта', 'Telegram': 'Telegram',
    'Contact details': 'Контактные данные', 'GAME DETAILS': 'ИНФОРМАЦИЯ ОБ ИГРЕ',
    'Back to all games': 'Назад ко всем играм', 'About this game': 'Об игре', 'Game overview': 'Об игре',
    'Genre': 'Жанр', 'Price': 'Цена', 'Type': 'Тип', 'Free to play': 'Бесплатная игра', 'Paid game': 'Платная игра',
    'Screenshots & artwork': 'Скриншоты и изображения', 'Gameplay screenshot': 'Скриншот игрового процесса',
    'Cover artwork': 'Обложка игры', 'Only cover artwork is available in this gallery so far.': 'Пока в галерее доступна только обложка игры.',
    'Game not found': 'Игра не найдена', 'The requested game is not in this catalogue.': 'Такой игры нет в нашем каталоге.',
    'Open all games': 'Открыть каталог игр', 'Steam Game Hub - Game Details': 'Steam Game Hub — Информация об игре',
    'Steam Game Hub game details': 'Подробная информация об игре на Steam Game Hub'
  });
  Object.assign(translations.kk, {
    'More details': 'Толығырақ', 'Email': 'Электрондық пошта', 'Telegram': 'Telegram',
    'Contact details': 'Байланыс ақпараты', 'GAME DETAILS': 'ОЙЫН ТУРАЛЫ АҚПАРАТ',
    'Back to all games': 'Барлық ойындарға оралу', 'About this game': 'Ойын туралы', 'Game overview': 'Ойынға шолу',
    'Genre': 'Жанры', 'Price': 'Бағасы', 'Type': 'Түрі', 'Free to play': 'Тегін ойын', 'Paid game': 'Ақылы ойын',
    'Screenshots & artwork': 'Скриншоттар мен суреттер', 'Gameplay screenshot': 'Ойын барысының скриншоты',
    'Cover artwork': 'Ойын мұқабасы', 'Only cover artwork is available in this gallery so far.': 'Әзірге галереяда ойынның мұқабасы ғана бар.',
    'Game not found': 'Ойын табылмады', 'The requested game is not in this catalogue.': 'Бұл ойын каталогымызда жоқ.',
    'Open all games': 'Ойындар каталогын ашу', 'Steam Game Hub - Game Details': 'Steam Game Hub — Ойын туралы ақпарат',
    'Steam Game Hub game details': 'Steam Game Hub сайтындағы ойын туралы толық ақпарат'
  });

  const languages = { kk: 'Қазақша', ru: 'Русский', en: 'English' };
  const textSources = new WeakMap();
  const attributeSources = new WeakMap();
  const attributeNames = ['aria-label', 'placeholder', 'title', 'alt', 'content', 'data-success-message', 'data-profile-step'];
  let language = 'en';

  function dynamicTranslation(source, locale) {
    const ru = locale === 'ru';
    let match;
    if ((match = source.match(/^Step (\d+) of (\d+)(?: · |: )(.*)$/))) {
      const labels = translations[locale];
      const canonicalLabel = canonicalSource(match[3]);
      const label = labels[canonicalLabel] || match[3];
      return ru ? `Шаг ${match[1]} из ${match[2]} · ${label}` : `${match[1]} / ${match[2]}-қадам · ${label}`;
    }
    if ((match = source.match(/^Showing (\d+) of (\d+) games?(?:\. Prices are sample content\.)?$/))) {
      return ru ? `Показано игр: ${match[1]} из ${match[2]}` : `Көрсетілген ойындар: ${match[1]} / ${match[2]}`;
    }
    if (/^▣\s*Your library$/.test(source)) return ru ? '▣ Ваша библиотека' : '▣ Кітапханаңыз';
    if ((match = source.match(/^Image (\d+) of (\d+): (.+)$/))) return ru ? `Изображение ${match[1]} из ${match[2]}: ${match[3]}` : `${match[2]} суреттің ${match[1]}-і: ${match[3]}`;
    if ((match = source.match(/^Slide (\d+): (.+)$/))) return ru ? `Слайд ${match[1]}: ${match[2]}` : `${match[1]}-слайд: ${match[2]}`;
    if ((match = source.match(/^Slide (\d+) of (\d+)$/))) return ru ? `Слайд ${match[1]} из ${match[2]}` : `${match[2]} слайдтың ${match[1]}-і`;
    if ((match = source.match(/^(\d+) of (\d+)$/))) return ru ? `${match[1]} из ${match[2]}` : `${match[2]}-дің ${match[1]}-і`;
    if ((match = source.match(/^Welcome, (.+)\. Your local player profile and \$100 demo wallet are ready\.$/))) return ru ? `Добро пожаловать, ${match[1]}! Ваш локальный профиль создан, демо-баланс — $100.` : `Қош келдіңіз, ${match[1]}! Жергілікті профиліңіз дайын, демо-баланс — $100.`;
    if ((match = source.match(/^Welcome, (.+)\. Your \$100 wallet is ready\.$/))) {
      const playerName = match[1] === 'Player 1' ? (translations[locale]['Player 1'] || match[1]) : match[1];
      return ru ? `Добро пожаловать, ${playerName}. Ваш кошелёк с балансом $100 готов.` : `Қош келдіңіз, ${playerName}. $100 балансы бар әмияныңыз дайын.`;
    }
    if ((match = source.match(/^Welcome, (.+)\.$/))) {
      const playerName = match[1] === 'Player 1' ? (translations[locale]['Player 1'] || match[1]) : match[1];
      return ru ? `Добро пожаловать, ${playerName}.` : `Қош келдіңіз, ${playerName}.`;
    }
    if ((match = source.match(/^(.+), your \$100 demo wallet is ready\.$/))) return ru ? `${match[1]}, ваш демо-кошелёк с балансом $100 готов.` : `${match[1]}, $100 демо-балансы бар әмияныңыз дайын.`;
    if ((match = source.match(/^A virtual purchase for (.+)\. Your wallet refills to \$100 on refresh\. Your collection stays saved\.$/))) {
      const playerName = match[1] === 'Player 1' ? (translations[locale]['Player 1'] || match[1]) : match[1];
      return ru ? `Виртуальная покупка для профиля «${playerName}». После обновления баланс снова станет $100, а коллекция сохранится.` : `«${playerName}» профиліне арналған виртуалды сатып алу. Бет жаңартылса, баланс $100 болады, жинақ сақталады.`;
    }
    if ((match = source.match(/^(.+): rated (\d)\/5\.$/))) return ru ? `${match[1]}: оценка ${match[2]} из 5.` : `${match[1]}: ${match[2]}/5 баға.`;
    if ((match = source.match(/^(.+): (\d) out of 5 stars$/))) return ru ? `${match[1]}: ${match[2]} из 5 звёзд` : `${match[1]}: 5 жұлдыздың ${match[2]}-і`;
    if ((match = source.match(/^Clear your rating for (.+)$/))) return ru ? `Сбросить оценку игры ${match[1]}` : `${match[1]} ойынының бағасын өшіру`;
    if ((match = source.match(/^(.+) added to your library\.$/))) return ru ? `Игра «${match[1]}» добавлена в библиотеку.` : `«${match[1]}» ойыны кітапханаға қосылды.`;
    if ((match = source.match(/^(.+) returned\. (.+) refunded\.$/))) return ru ? `Игра «${match[1]}» возвращена. На кошелёк зачислено ${match[2]}.` : `«${match[1]}» ойыны қайтарылды. Әмиянға ${match[2]} қайтарылды.`;
    if ((match = source.match(/^Return game · (.+) refund$/))) return ru ? `Вернуть игру · возврат ${match[1]}` : `Ойынды қайтару · ${match[1]} қайтарылады`;
    if ((match = source.match(/^(.+) enjoys (.+) games and prefers (.+) sessions\.$/))) {
      const genre = translations[locale][canonicalSource(match[2])] || match[2];
      const style = translations[locale][canonicalSource(match[3])] || match[3];
      return ru ? `${match[1]} предпочитает игры жанра «${genre}» и ${style.toLowerCase()} стиль игры.` : `${match[1]} ойыншысына ${genre} ойындары мен ${style.toLowerCase()} ойнау ұнайды.`;
    }
    if ((match = source.match(/^Player card ready! (.+) This preview is only on this page; no account was created\.$/))) return ru ? `Карточка игрока готова! ${match[1]} Это предварительный просмотр на этой странице; учётная запись не создана.` : `Ойыншы картасы дайын! ${match[1]} Бұл — осы беттегі алдын ала көрініс, тіркелгі ашылған жоқ.`;
    if ((match = source.match(/^(.+) (?:official )?Steam cover artwork$/))) return ru ? `Обложка игры ${match[1]} для Steam` : `${match[1]} ойынының Steam мұқабасы`;
    if ((match = source.match(/^(.+) cover artwork$/))) return ru ? `Обложка игры «${match[1]}»` : `${match[1]} ойынының мұқабасы`;
    if ((match = source.match(/^(.+) gameplay screenshot from Steam$/))) return ru ? `Скриншот игрового процесса ${match[1]} из Steam` : `${match[1]} ойынының Steam-дегі көрінісі`;
    if ((match = source.match(/^(.+) game artwork$/))) return ru ? `Иллюстрация к игре ${match[1]}` : `${match[1]} ойынының суреті`;
    if ((match = source.match(/^You rated (.+) (\d) out of 5 stars\.$/))) return ru ? `Вы поставили игре «${match[1]}» ${match[2]} из 5 звёзд.` : `«${match[1]}» ойынына 5 жұлдыздың ${match[2]}-ін бердіңіз.`;
    if ((match = source.match(/^Please correct (\d+) (field|fields) and try again\.$/))) return ru ? `Исправьте ошибки в полях (${match[1]}) и попробуйте ещё раз.` : `${match[1]} өрістегі қатені түзетіп, қайта көріңіз.`;
    if ((match = source.match(/^(FEATURED|FREE TO PLAY) · (.+)$/))) {
      const type = translations[locale][match[1]] || match[1];
      const genre = translations[locale][canonicalSource(match[2])] || match[2];
      return `${type} · ${genre}`;
    }
    if ((match = source.match(/^(.+) is required\.$/))) return ru ? `Поле «${match[1]}» обязательно.` : `«${match[1]}» өрісін толтыру қажет.`;
    if ((match = source.match(/^(.+) must contain at least (\d+) characters\.$/))) return ru ? `В поле «${match[1]}» должно быть не менее ${match[2]} символов.` : `«${match[1]}» өрісінде кемінде ${match[2]} таңба болуы керек.`;
    if ((match = source.match(/^Image (\d+) of (\d+): (.+)$/))) return ru ? `Изображение ${match[1]} из ${match[2]}: ${match[3]}` : `${match[2]} суреттің ${match[1]}-і: ${match[3]}`;
    return null;
  }

  function localize(value, locale = language) {
    if (locale === 'en') return value;
    return translations[locale][value] || dynamicTranslation(value, locale) || value;
  }

  function translateTextNode(node) {
    let source = textSources.get(node);
    if (!source) {
      const raw = node.nodeValue || '';
      const trimmed = raw.trim();
      if (!trimmed) return;
      source = { text: canonicalSource(trimmed), leading: raw.match(/^\s*/)[0], trailing: raw.match(/\s*$/)[0] };
      textSources.set(node, source);
    }
    const translated = source.leading + localize(source.text) + source.trailing;
    if (node.nodeValue !== translated) node.nodeValue = translated;
  }

  function translateAttributes(element) {
    let sources = attributeSources.get(element);
    if (!sources) { sources = new Map(); attributeSources.set(element, sources); }
    for (const name of attributeNames) {
      if (!element.hasAttribute(name)) continue;
      if (!sources.has(name)) sources.set(name, canonicalSource(element.getAttribute(name)));
      const translated = localize(sources.get(name));
      if (element.getAttribute(name) !== translated) element.setAttribute(name, translated);
    }
  }

  function canonicalSource(value) {
    for (const localized of Object.values(translations)) {
      for (const [source, translated] of Object.entries(localized)) if (translated === value) return source;
    }
    return value;
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) { translateTextNode(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, code, pre, .language-switcher')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
    if (root.querySelectorAll) root.querySelectorAll('*').forEach(translateAttributes);
  }

  function setLanguage(next) {
    if (!Object.prototype.hasOwnProperty.call(languages, next)) return;
    language = next;
    document.documentElement.lang = next;
    try { localStorage.setItem('steam-game-hub-language', next); } catch { /* Language selection still works for this page. */ }
    const picker = document.getElementById('site-language');
    if (picker) picker.value = next;
    const label = document.querySelector('.language-switcher label');
    if (label) label.textContent = localize('Language');
    translateTree(document);
    document.dispatchEvent(new CustomEvent('hub:languagechange', { detail: { language: next } }));
  }

  function addPicker() {
    const wrapper = document.createElement('div');
    wrapper.className = 'language-switcher';
    wrapper.innerHTML = '<label class="language-switcher-label" for="site-language">Language</label><select id="site-language" aria-label="Choose language"><option value="kk">KZ</option><option value="ru">RU</option><option value="en">EN</option></select>';
    const accountTools = document.querySelector('.account-tools');
    if (accountTools) accountTools.append(wrapper);
    else {
      const navigation = document.querySelector('header nav') || document.querySelector('header');
      if (navigation) navigation.append(wrapper);
    }
    wrapper.querySelector('select').addEventListener('change', event => setLanguage(event.target.value));
  }

  function localizedDateTime(date, locale) {
    const locales = { en: 'en-US', ru: 'ru-RU', kk: 'kk-KZ' };
    return new Intl.DateTimeFormat(locales[locale] || 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', timeZoneName: 'short'
    }).format(date);
  }

  window.HUB_I18N = { t: localize, source: canonicalSource, get language() { return language; }, setLanguage, localizedDateTime };
  addPicker();
  try {
    const saved = localStorage.getItem('steam-game-hub-language');
    if (saved && Object.prototype.hasOwnProperty.call(languages, saved)) language = saved;
  } catch { /* Use English when browser storage is unavailable. */ }
  document.documentElement.lang = language;
  const languagePicker = document.getElementById('site-language');
  if (languagePicker) languagePicker.value = language;
  const languageLabel = document.querySelector('.language-switcher label');
  if (languageLabel) languageLabel.textContent = localize('Language');
  translateTree(document);
  document.dispatchEvent(new CustomEvent('hub:languagechange', { detail: { language } }));

  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') translateTextNode(record.target);
      else if (record.type === 'attributes') translateAttributes(record.target);
      else record.addedNodes.forEach(node => translateTree(node));
    }
  });
  observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: attributeNames });
})();
