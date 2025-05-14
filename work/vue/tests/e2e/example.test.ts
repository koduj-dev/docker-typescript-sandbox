import { test, expect } from '@playwright/test'

test('Test interkace s Todo Listem', async ({ page }): Promise<void> => {
  await test.step('Navigace v browseru', async () => {
    // 1. načti stránku
    await page.goto('http://localhost:3000/');

    // 2. Klikni na link s textem "Todo List"
    await page.locator('a:has-text("Todo list")').click();

    // 3. Ověř, že se v nadpisu (např. H1) zobrazil text "Todo list"
    await expect(page.getByRole('heading', { name: 'Todo list' })).toBeVisible();
  })

  await test.step('Vytvoření TODO', async () => {
    // 4. Ověř, že nejsou na stránce tlačítka Smazat / Dokončit => "Neexistuje žádné TODO"
    await expect(page.getByRole('button', { name: 'Smazat' })).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'Dokončit' })).not.toBeVisible();

    // 6. Vyplň název úkolu.
    await page.getByPlaceholder('Název Todo').fill('Testovací název');

    // 5. Vyplň popis úkolu
    await page.getByPlaceholder('Popis Todo').fill('Testovací popisek');

    // 6. Klikni na tlačítko uložit.
    await page.getByRole('button', { name: 'Uložit' }).click();

    // 8. Ověř, že jsou vidět texty Todo a tlačítka dokončit / smazat, nebo lze ověřovat přes testId ("data-testid")
    await expect(page.getByText('Testovací název')).toBeVisible();
    await expect(page.getByText('Testovací popisek')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Dokončit' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Smazat' })).toBeVisible();
    await expect(page.getByTestId('todo-item')).toHaveCount(1);

    // 9. Ověření, že se vytvořilo pouze jedno Todo - dalo by se řešit přes testid / doplnění třeba class pro TodoItem
    await expect(page.getByRole('button', { name: 'Dokončit' })).toHaveCount(1);
    await expect(page.getByRole('button', { name: 'Smazat' })).toHaveCount(1);

    // 10. Ověření, že je na stránce vidět symbol značící nekompletní todo
    await expect(page.getByText('❌')).toBeVisible();
    await expect(page.getByText('❌')).toHaveCount(1);

    await expect(page.getByText('✅')).not.toBeVisible();
    await expect(page.getByText('✅')).toHaveCount(0);
  })

  await test.step('Dokončení Todo', async () => {
    // 11. Klikni na tlačítko dokončit
    await page.getByRole('button', { name: 'Dokončit' }).click();

    // 12. Ověř, že tlačítko "Dokončit" zmizelo, ale "Smazat" zůstalo.
    await expect(page.getByRole('button', { name: 'Dokončit' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Smazat' })).toHaveCount(1);

    // 13. Ověř, že se objevila ikonka ✅
    await expect(page.getByText('❌')).not.toBeVisible();
    await expect(page.getByText('✅')).toBeVisible();
    await expect(page.getByText('✅')).toHaveCount(1);
  });

  await test.step('Smazání úkolu', async () => {
    // 14. Klik na tlačítko "Smazat"
    await page.getByRole('button', { name: 'Smazat' }).click();

    // 15. Ověření, že zmizelo tlačítko Smazat a nejsou vidět např. fragmenty z TodoItem
    await expect(page.getByRole('button', { name: 'Smazat' })).toHaveCount(0);
    await expect(page.getByText('❌')).not.toBeVisible();
    await expect(page.getByText('✅')).not.toBeVisible();

    await expect(page.getByText('Testovací název')).not.toBeVisible();
    await expect(page.getByText('Testovací popisek')).not.toBeVisible();
    await expect(page.getByTestId('todo-item')).toHaveCount(0);
  });

})
