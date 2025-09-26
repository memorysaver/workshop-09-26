import { test, expect } from '@playwright/test';

test.describe('Empty Prompt Error Handling', () => {
  test('should display an error message when an empty prompt is submitted', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Click the generate button without entering a prompt
    await page.click('button:has-text("Generate")');

    // Expect an error message to be displayed
    const errorMessage = page.locator('text=Prompt cannot be empty'); // Adjust selector based on actual error message
    await expect(errorMessage).toBeVisible();
  });
});
