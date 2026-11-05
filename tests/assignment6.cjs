// Frontend regression checks: use NODE_PATH for a bundled Playwright installation.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
const { expect } = require('playwright/test');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'report/assignment6');
const results = [];
const errors = [];
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.avif': 'image/avif', '.webp': 'image/webp' };
const server = http.createServer(async (req, res) => {
  const file = path.resolve(root, '.' + (new URL(req.url, 'http://localhost').pathname === '/' ? '/index.html' : decodeURIComponent(new URL(req.url, 'http://localhost').pathname)));
  if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
  try { res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }).end(await fs.readFile(file)); }
  catch { res.writeHead(404).end(); }
});
async function check(name, action) {
  try { await action(); results.push({ name, passed: true }); console.log('PASS', name); }
  catch (error) { results.push({ name, passed: false, error: error.message }); throw error; }
}
(async () => {
  await fs.mkdir(output, { recursive: true });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ headless: true, executablePath: process.env.BROWSER_PATH || '/usr/bin/chromium' });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, permissions: ['clipboard-read', 'clipboard-write'] });
  // Deterministic CDN response; the separate offline test exercises the local fallback.
  await context.route('https://code.jquery.com/**', route => route.fulfill({ path: path.join(root, 'vendor/jquery/jquery-4.0.0.min.js'), contentType: 'text/javascript' }));
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', req => { if (req.method() !== 'GET') errors.push('Unexpected non-GET request: ' + req.url()); });
  const visit = file => page.goto(origin + '/' + file);
  const wallet = value => expect(page.locator('[data-wallet]')).toHaveText(value);
  const buy = async id => {
    await page.locator(`[data-buy="${id}"]`).first().click();
    await page.locator('[data-checkout-confirm]').click();
    await expect(page.locator('#checkout-dialog')).not.toBeVisible();
  };
  try {
    await visit('games.html');
    await check('jQuery 4 and all 9 games initialize', async () => {
      assert.equal(await page.evaluate(() => $.fn.jquery), '4.0.0');
      await expect(page.locator('[data-game]:visible')).toHaveCount(9);
      await wallet('$100.00');
    });
    await check('Live search and case-insensitive highlighting', async () => {
      await page.locator('#game-search').fill('CYBER');
      await expect(page.locator('[data-game]:visible')).toHaveCount(1);
      await expect(page.locator('[data-game]:visible h3 mark')).toHaveText('Cyber');
      await page.screenshot({ path: path.join(output, 'search-highlighting.png') });
    });
    await check('Regex and HTML search inputs stay literal and safe', async () => {
      for (const query of ['[', '.*', '<img src=x onerror=alert(1)>', '   ']) {
        await page.locator('#game-search').fill(query);
        await expect(page.locator('[data-game]:visible')).toHaveCount(query.trim() ? 0 : 9);
      }
    });
    await check('Combined genre / price filters and empty state', async () => {
      await page.locator('[data-reset-filters]').click();
      await page.locator('#game-genre').selectOption('RPG');
      await page.locator('#game-budget').selectOption('free');
      await expect(page.locator('[data-game]:visible')).toHaveCount(0);
      await expect(page.locator('[data-catalogue-empty]')).toBeVisible();
      await page.locator('[data-reset-filters]').click();
      await page.locator('#game-budget').selectOption('under30');
      await expect(page.locator('[data-game]:visible')).toHaveCount(2);
      await page.locator('[data-reset-filters]').click();
    });
    await check('Autocomplete is keyboard accessible and selects a game', async () => {
      await page.locator('#store-search').fill('red');
      await expect(page.locator('#search-suggestions [role=option]')).toHaveCount(1);
      await page.screenshot({ path: path.join(output, 'autocomplete.png') });
      await page.locator('#store-search').press('ArrowDown');
      await page.locator('#store-search').press('Enter');
      await expect(page.locator('[data-game]:visible')).toHaveCount(1);
      await expect(page.locator('[data-game]:visible h3')).toHaveText('Red Dead Redemption 2');
      await expect(page.locator('#search-suggestions')).not.toBeVisible();
      await page.locator('[data-reset-filters]').click();
    });
    await check('Ratings save for each game', async () => {
      await page.locator('[data-game="grand-theft-auto-v"] label[for$="-4"]').click();
      await expect(page.locator('[data-rating-for="grand-theft-auto-v"] [data-rating-value]')).toHaveText('4/5');
      await page.locator('[data-game="dota-2"] label[for$="-2"]').click();
      await expect(page.locator('[data-rating-for="dota-2"] [data-rating-value]')).toHaveText('2/5');
    });
    await check('Purchase spinner blocks duplicates and charges exactly once', async () => {
      await page.locator('[data-buy="grand-theft-auto-v"]').click();
      await expect(page.locator('[data-checkout-after]')).toHaveText('$70.01');
      await page.locator('[data-checkout-confirm]').click();
      await expect(page.locator('[data-checkout-confirm]')).toBeDisabled();
      await expect(page.locator('[data-checkout-confirm]')).toContainText('Please wait');
      await page.locator('#checkout-dialog').screenshot({ path: path.join(output, 'purchase-spinner.png') });
      await expect(page.locator('#checkout-dialog')).not.toBeVisible();
      await wallet('$70.01');
      await expect(page.locator('[data-buy="grand-theft-auto-v"]')).toBeDisabled();
      await expect(page.locator('.hub-toasts')).toContainText('added to your library');
      await page.screenshot({path:path.join(output,'purchase-toast.png')});
    });
    await check('Navigation keeps balance; refresh refills and preserves games and ratings', async () => {
      await visit('library.html');
      await wallet('$70.01');
      await expect(page.locator('[data-game]:visible')).toHaveCount(1);
      await page.screenshot({ path: path.join(output, 'library-refund.png') });
      await page.reload();
      await wallet('$100.00');
      await expect(page.locator('[data-game]:visible')).toHaveCount(1);
      await expect(page.locator('[data-rating-for="grand-theft-auto-v"] [data-rating-value]')).toHaveText('4/5');
    });
    await check('Full refund removes the game and cannot run twice', async () => {
      await page.locator('[data-refund="grand-theft-auto-v"]').click();
      await expect(page.locator('[data-checkout-after]')).toHaveText('$129.99');
      await page.locator('[data-checkout-confirm]').click();
      await expect(page.locator('#checkout-dialog')).not.toBeVisible();
      await wallet('$129.99');
      await expect(page.locator('[data-game]:visible')).toHaveCount(0);
      await expect(page.locator('[data-catalogue-empty]')).toBeVisible();
    });
    await check('New profile starts at $100, with independent library and ratings', async () => {
      await page.locator('[data-open-profiles]').click();
      await page.locator('#profile-name').fill('Alex');
      await page.locator('#create-profile [type=submit]').click();
      await wallet('$100.00');
      await expect(page.locator('[data-profile-name]')).toHaveText('Alex');
      await expect(page.locator('[data-game]:visible')).toHaveCount(0);
      await visit('games.html');
      await expect(page.locator('[data-rating-for="grand-theft-auto-v"] [data-rating-value]')).toHaveText('Not rated');
    });
    await check('Insufficient balance prevents checkout and affordable filter updates', async () => {
      await buy('cyberpunk-2077');
      await wallet('$40.01');
      await page.locator('[data-buy="elden-ring"]').click();
      await expect(page.locator('[data-checkout-confirm]')).toBeDisabled();
      await expect(page.locator('[data-checkout-error]')).toContainText('Not enough');
      await page.locator('#checkout-dialog [data-close-hub-dialog]').first().click();
      await page.locator('#game-budget').selectOption('affordable');
      await expect(page.locator('[data-game]:visible')).toHaveCount(5);
      await page.locator('[data-reset-filters]').click();
    });
    await check('Free game adds without charge; removal refunds zero', async () => {
      await buy('dota-2');
      await wallet('$40.01');
      await visit('library.html');
      await page.locator('[data-refund="dota-2"]').click();
      await page.locator('[data-checkout-confirm]').click();
      await expect(page.locator('#checkout-dialog')).not.toBeVisible();
      await wallet('$40.01');
      await expect(page.locator('[data-game]:visible')).toHaveCount(1);
    });
    await check('Profile switching restores the original personal data', async () => {
      await page.locator('[data-open-profiles]').click();
      await page.locator('#profiles-dialog').screenshot({ path: path.join(output, 'profiles.png') });
      await page.locator('[data-switch-profile="player-1"]').click();
      await wallet('$129.99');
      await visit('games.html');
      await expect(page.locator('[data-rating-for="dota-2"] [data-rating-value]')).toHaveText('2/5');
      await page.locator('[data-clear-rating="dota-2"]').click();
      await expect(page.locator('[data-rating-for="dota-2"] [data-rating-value]')).toHaveText('Not rated');
    });
    await check('Duplicate and whitespace profile names are rejected', async () => {
      await page.locator('[data-open-profiles]').click();
      await page.locator('#profile-name').fill('alex');
      await page.locator('#create-profile [type=submit]').click();
      await expect(page.locator('.profile-error')).toContainText('already exists');
      await page.locator('#profile-name').fill('   ');
      await page.locator('#create-profile [type=submit]').click();
      await expect(page.locator('.profile-error')).toContainText('Enter a player name');
      await page.locator('#profile-name').press('Escape');
      await expect(page.locator('#profiles-dialog')).not.toBeVisible();
    });
    await check('Featured carousel updates artwork and purchase target', async () => {
      await visit('index.html');
      await page.locator('[data-feature-step="1"]').click();
      await expect(page.locator('[data-feature-title]')).toHaveText('Cyberpunk 2077');
      await expect(page.locator('[data-feature-buy]')).toHaveAttribute('data-buy', 'cyberpunk-2077');
      await page.locator('[data-feature-index="0"]').click();
    });
    await check('Lazy images are deferred until near the viewport', async () => {
      await visit('games.html');
      await expect(page.locator('img[data-src]').first()).toHaveAttribute('src', 'images/placeholder.svg');
      await page.screenshot({path:path.join(output,'lazy-before.png')});
      await page.locator('[data-src]').last().scrollIntoViewIfNeeded();
      await page.waitForTimeout(150);
      assert.equal(await page.locator('img[data-src]').count(), 0);
      await page.screenshot({path:path.join(output,'lazy-after.png')});
    });
    await check('Counters animate on scroll and progress bar reaches the bottom', async () => {
      await visit('index.html');
      await page.locator('.store-stats').scrollIntoViewIfNeeded();
      await expect(page.locator('[data-counter="100"]')).toHaveText('$100');
      await page.evaluate(() => scrollTo(0, document.documentElement.scrollHeight));
      await page.waitForTimeout(150);
      assert.ok(await page.locator('.scroll-meter>span').evaluate(el => parseFloat(el.style.width)) > 99);
      await page.locator('.store-stats').screenshot({ path: path.join(output, 'animated-counters.png') });
      await page.screenshot({path:path.join(output,'scroll-progress.png')});
    });
    await check('Clipboard copy gives a checkmark and success tooltip', async () => {
      await page.locator('[data-copy-link]').click();
      await expect(page.locator('[data-copy-link]')).toHaveText('✓ Copied');
      await expect(page.locator('[data-copy-status]')).toHaveText('Copied to clipboard!');
      assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'https://abilkhayrbigali-design.github.io/');
      await page.locator('.share-hub').screenshot({ path: path.join(output, 'clipboard.png') });
    });
    await check('Contact form validates before showing the submit spinner', async () => {
      await visit('contact.html');
      const form = page.locator('[data-demo-form]').first();
      await form.locator('[type=submit]').click();
      await expect(form.locator('.is-invalid').first()).toBeVisible();
      assert.equal(await form.getAttribute('aria-busy'), null);
      await form.locator('input[type=text]').fill('Alex');
      await form.locator('input[type=email]').fill('alex@example.com');
      await form.locator('textarea').fill('I would like a new adventure.');
      await form.locator('input[type=checkbox]').check();
      await form.locator('[type=submit]').click();
      await expect(form.locator('[type=submit]')).toBeDisabled();
      await expect(form.locator('[type=submit]')).toBeEnabled();
      await expect(form.locator('.form-status')).toContainText('Submitted successfully');
    });
    for (const width of [375, 768, 1440]) {
      await page.setViewportSize({ width, height: 950 });
      for (const file of ['index.html','games.html','library.html','featured.html','categories.html','community.html','news.html','about.html','contact.html','responsive.html']) {
        await check(`${width}px: ${file} loads, has unique IDs and no horizontal overflow`, async () => {
          assert.equal((await visit(file)).status(), 200);
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
          assert.equal(await page.locator('[id]').evaluateAll(els => new Set(els.map(e => e.id)).size === els.length), true);
          await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
          await page.waitForTimeout(200);
          const broken = await page.locator('img[src]:not([data-src])').evaluateAll(imgs => imgs.filter(i => i.complete && !i.naturalWidth).map(i => i.src));
          assert.deepEqual(broken, []);
        });
      }
      await visit('index.html');
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await page.waitForTimeout(1300);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: path.join(output, `store-${width}.png`), fullPage: true });
      await visit('games.html');
      await page.screenshot({ path: path.join(output, `catalogue-${width}.png`), fullPage: true });
    }
    await check('Offline CDN fallback still runs the entire frontend', async () => {
      const offline = await browser.newContext();
      await offline.route('https://**', route => route.abort());
      const tab = await offline.newPage();
      await tab.goto(origin + '/games.html');
      await expect(tab.locator('[data-wallet]')).toHaveText('$100.00');
      assert.equal(await tab.evaluate(() => $.fn.jquery), '4.0.0');
      await expect(tab.locator('[data-game]:visible')).toHaveCount(9);
      await expect(tab.locator('[data-rate-game]')).toHaveCount(45);
      await offline.close();
    });
    await check('No JavaScript errors or backend submissions', async () => assert.deepEqual(errors, []));
  } finally {
    await fs.writeFile(path.join(output, 'verification.json'), JSON.stringify({ date: '2026-11-05', browser: browser.version(), results, errors }, null, 2));
    await context.close(); await browser.close(); server.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; server.close(); });
