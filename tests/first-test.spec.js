const {test, expect } = require('@playwright/test')

test('First test', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/')
  await page.locator('input').type('Hello World!')
  await page.locator('input').press('Enter')
  await expect(page.locator('[data-testid="todo-title"]')).toHaveText('Hello World!')
})