// Run with Node.js and Playwright installed. No build or external server needed.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');
const { pathToFileURL } = require('node:url');
const playwright = require('playwright');
const { expect } = require('playwright/test');

const root = path.resolve(__dirname, '..');
const engine = process.env.BROWSER_ENGINE || 'chromium';
const output = path.join(root, 'report', 'assignment4');
const results = [];
const errors = [];
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif' };
const server = http.createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const file = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
  if (!file.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end();
    return;
  }
  try {
    const body = await fs.readFile(file);
    response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
});

async function check(name, callback) {
  try {
    await callback();
    results.push({ name, passed: true });
    console.log(`PASS ${name}`);
  } catch (error) {
    results.push({ name, passed: false, error: error.message });
    throw error;
  }
}

async function main() {
  await fs.mkdir(output, { recursive: true });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const launchOptions = { headless: true };
  if (process.env.BROWSER_PATH) launchOptions.executablePath = process.env.BROWSER_PATH;
  const browser = await playwright[engine].launch(launchOptions);
  const version = browser.version();
  try {
    for (const width of [375, 768, 1440]) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, timezoneId: 'Asia/Almaty' });
      const page = await context.newPage();
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
      page.on('request', (request) => {
        if (request.method() !== 'GET') errors.push(`Unexpected submission: ${request.method()} ${request.url()}`);
      });
      const visit = (file) => page.goto(`${origin}/${file}`);
      const screenshot = async (name, selector) => {
        if (width === 768) return;
        await page.locator(selector).screenshot({ path: path.join(output, `${engine}-${name}-${width}.png`) });
      };

      for (const file of ['index.html', 'featured.html', 'games.html', 'categories.html', 'news.html', 'community.html', 'about.html', 'contact.html', 'responsive.html']) {
        await check(`${width}px: ${file} loads with no overflow or broken images`, async () => {
          assert.equal((await visit(file)).status(), 200);
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
          assert.deepEqual(await page.locator('img').evaluateAll((images) => images.filter((img) => !img.complete || !img.naturalWidth).map((img) => img.src)), []);
          assert.equal(await page.locator('[id]').evaluateAll((elements) => new Set(elements.map((el) => el.id)).size === elements.length), true);
          await expect(page.locator('footer')).toContainText('Team Members:');
        });
      }

      await visit('index.html');
      await check(`${width}px: clock updates and all four background colours cycle`, async () => {
        const clock = page.locator('[data-live-clock]');
        const before = await clock.getAttribute('datetime');
        assert.ok(Math.abs(Date.parse(before) - Date.now()) < 5000);
        await expect(clock).not.toHaveAttribute('datetime', before);
        const colours = ['rgb(23, 40, 59)', 'rgb(38, 29, 56)', 'rgb(22, 52, 46)', 'rgb(16, 24, 32)'];
        const names = ['Ocean', 'Plum', 'Forest', 'Midnight'];
        for (let index = 0; index < names.length; index++) {
          await page.getByRole('button', { name: 'Change background' }).click();
          await expect(page.locator('[data-background-name]')).toHaveText(names[index]);
          await expect(page.locator('body')).toHaveCSS('background-color', colours[index]);
        }
        await screenshot('clock-and-background', '#hub-tools');
      });

      if (width < 1200) {
        await check(`${width}px: existing mobile navigation still opens and closes`, async () => {
          const toggle = page.getByRole('button', { name: 'Toggle navigation' });
          await toggle.click();
          await expect(toggle).toHaveAttribute('aria-expanded', 'true');
          await expect(page.locator('#main-nav')).toBeVisible();
          await expect(page.locator('#main-nav')).not.toHaveClass(/collapsing/);
          await toggle.click();
          await expect(page.locator('#main-nav')).toBeHidden();
        });
      }

      await visit('community.html#join-community');
      await check(`${width}px: registration rejects invalid fields and accepts valid details`, async () => {
        const form = page.locator('#registration-form');
        const submit = form.getByRole('button', { name: 'Check registration' });
        await submit.click();
        await expect(form.locator('[aria-invalid="true"]')).toHaveCount(4);
        await expect(page.locator('#register-name')).toBeFocused();
        await page.locator('#register-name').fill('   ');
        await page.locator('#register-email').fill('not-an-email');
        await page.locator('#register-password').fill('short');
        await page.locator('#register-confirm').fill('different');
        await submit.click();
        await expect(page.locator('#register-name-error')).toContainText('required');
        await expect(page.locator('#register-email-error')).toContainText('valid email');
        await expect(page.locator('#register-password-error')).toContainText('at least 8');
        await expect(page.locator('#register-confirm-error')).toContainText('do not match');
        await screenshot('registration-errors', '#join-community');
        await page.locator('#register-name').fill('Player One');
        await page.locator('#register-email').fill('player@example.com');
        await page.locator('#register-password').fill('DemoPass8');
        await page.locator('#register-confirm').fill('DemoPass8');
        await submit.click();
        await expect(form.locator('[aria-invalid="true"]')).toHaveCount(0);
        await expect(form.locator('.form-status')).toContainText('no account has been created');
        await page.locator('#register-password').fill('ChangedPass8');
        await expect(page.locator('#register-confirm-error')).toBeVisible();
        await expect(form.locator('.form-status')).toBeEmpty();
        await form.getByRole('button', { name: 'Clear form' }).click();
        await expect(page.locator('#register-password')).toHaveValue('');
        await expect(form.locator('[aria-invalid="true"]')).toHaveCount(0);
        await expect(form.locator('.field-error:visible')).toHaveCount(0);
      });

      await check(`${width}px: existing carousel still advances with its announcement`, async () => {
        await page.locator('.carousel-control-next').click();
        await expect(page.locator('.carousel-status')).toContainText('Image 2 of 9');
        await expect(page.locator('.carousel-item.active')).toHaveAttribute('aria-hidden', 'false');
      });

      await visit('contact.html#faq');
      await check(`${width}px: FAQ starts hidden and toggles by mouse and keyboard`, async () => {
        await expect(page.locator('.faq-panel:visible')).toHaveCount(0);
        const buttons = page.locator('[data-accordion-button]');
        for (let index = 0; index < await buttons.count(); index++) {
          const button = buttons.nth(index);
          const answer = page.locator(`#${await button.getAttribute('aria-controls')}`);
          await button.click();
          await expect(button).toHaveAttribute('aria-expanded', 'true');
          await expect(answer).toBeVisible();
          assert.equal(await answer.evaluate((element) => element.inert), false);
          await button.press('Enter');
          await expect(button).toHaveAttribute('aria-expanded', 'false');
          await expect(answer).toBeHidden();
          assert.equal(await answer.evaluate((element) => element.inert), true);
        }
        await buttons.nth(1).press('Space');
        await expect(page.locator('#faq-answer-2')).toBeVisible();
        await screenshot('faq', '#faq');
      });

      await check(`${width}px: contact form checks required fields, email and checkbox`, async () => {
        const form = page.locator('#contact-form');
        await form.getByRole('button', { name: 'Preview message' }).click();
        await expect(form.locator('[aria-invalid="true"]')).toHaveCount(4);
        await page.locator('#name').fill('Test Player');
        await page.locator('#email').fill('player@example.com');
        await page.locator('#message').fill('   ');
        await page.locator('#demo-check').check();
        await expect(page.locator('#message-error')).toBeVisible();
        await page.locator('#message').fill('I enjoy strategy games.');
        await form.getByRole('button', { name: 'Preview message' }).click();
        await expect(form.locator('.form-status')).toContainText('no message has been sent');
        await expect(form.locator('[aria-invalid="true"]')).toHaveCount(0);
      });

      await visit('news.html#newsletter');
      await check(`${width}px: subscription popup validates, contains focus and closes three ways`, async () => {
        const dialog = page.locator('#subscription-dialog');
        const open = page.getByRole('button', { name: 'Subscribe to updates' });
        await expect(dialog).toBeHidden();
        await open.click();
        await expect(dialog).toBeVisible();
        await expect(page.locator('#subscriber-email')).toBeFocused();
        await dialog.getByRole('button', { name: 'Try subscription' }).click();
        await expect(page.locator('#subscriber-email-error')).toContainText('required');
        for (const email of ['invalid', 'a@b', 'name@.com', 'a b@example.com']) {
          await page.locator('#subscriber-email').fill(email);
          await dialog.getByRole('button', { name: 'Try subscription' }).click();
          await expect(page.locator('#subscriber-email')).toHaveAttribute('aria-invalid', 'true');
        }
        await page.locator('#subscriber-email').fill('player+news@example.co.uk');
        await dialog.getByRole('button', { name: 'Try subscription' }).click();
        await expect(dialog.locator('.form-status')).toContainText('no subscription has been created');
        for (let index = 0; index < 6; index++) {
          await page.keyboard.press('Tab');
          assert.equal(await dialog.evaluate((element) => element.contains(document.activeElement)), true);
        }
        await screenshot('subscription', '#subscription-dialog');
        await dialog.getByRole('button', { name: 'Close subscription form' }).click();
        await expect(dialog).toBeHidden();
        await expect(open).toBeFocused();
        await open.click();
        await page.keyboard.press('Escape');
        await expect(dialog).toBeHidden();
        await expect(open).toBeFocused();
        await open.click();
        await dialog.locator('h2').click();
        await expect(dialog).toBeVisible();
        await page.mouse.click(2, 2);
        await expect(dialog).toBeHidden();
        await expect(page.locator('body')).not.toHaveClass(/dialog-open/);
        await expect(open).toBeFocused();
      });
      assert.deepEqual(await page.evaluate(() => ({ local: localStorage.length, session: sessionStorage.length })), { local: 0, session: 0 });
      await context.close();
    }

    await check('Clock handles a year boundary in the device timezone', async () => {
      const context = await browser.newContext({ timezoneId: 'Asia/Almaty' });
      const page = await context.newPage();
      await page.clock.install({ time: new Date('2026-12-31T18:59:58Z') });
      await page.clock.pauseAt(new Date('2026-12-31T18:59:59Z'));
      await page.goto(`${origin}/index.html`);
      await expect(page.locator('[data-live-clock]')).toContainText('December 31, 2026');
      await page.clock.fastForward(2000);
      await expect(page.locator('[data-live-clock]')).toContainText('January 1, 2027');
      await context.close();
    });

    await check('Reduced motion disables FAQ and background animations', async () => {
      const context = await browser.newContext({ reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(`${origin}/contact.html`);
      await expect(page.locator('.faq-panel').first()).toHaveCSS('transition-duration', '0s');
      await expect(page.locator('body')).toHaveCSS('transition-duration', '0s');
      await context.close();
    });

    await check('Local file opening works without a server', async () => {
      const page = await browser.newPage();
      page.on('pageerror', (error) => errors.push(error.message));
      await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
      await expect(page.locator('[data-live-clock]')).toHaveAttribute('datetime', /T/);
      await page.locator('[data-change-background]').click();
      await expect(page.locator('[data-background-name]')).toHaveText('Ocean');
      await page.goto(pathToFileURL(path.join(root, 'news.html')).href);
      await page.locator('[data-open-dialog]').click();
      await expect(page.locator('#subscription-dialog')).toBeVisible();
      await page.close();
    });
    await check('No browser errors or form submissions', async () => assert.deepEqual(errors, []));
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
    await fs.writeFile(path.join(output, `verification-${engine}.json`), JSON.stringify({
      engine, version, checkedAt: new Date().toISOString(), results, errors,
    }, null, 2) + '\n');
  }
  console.log(`${results.length} checks passed in ${engine} ${version}.`);
}

main().catch((error) => {
  console.error(error);
  server.close();
  process.exitCode = 1;
});
