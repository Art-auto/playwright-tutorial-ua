import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').fill('Задонатити на ЗСУ');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('Поставити лайк цьому відео');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('Підписатися на канал');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await expect(page.getByTestId('todo-title')).toHaveCount(3)
  await page.getByRole('listitem').filter({ hasText: 'Задонатити на ЗСУ' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-title')).toHaveCount(2)
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-title')).toHaveCount(1)
});