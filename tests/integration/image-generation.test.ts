import { test, expect } from '@playwright/test';

test.describe('Image Generation Feature', () => {
  test('should allow user to input prompt and display generated image', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Fill in the prompt
    await page.fill('textarea[aria-label="Prompt Input"]', 'a dog playing in a park');

    // Click the generate button
    await page.click('button:has-text("Generate")');

    // Expect an image to be displayed (you might need to refine this selector)
    const image = page.locator('img[alt="Generated Image"]');
    await expect(image).toBeVisible({ timeout: 10000 }); // Increased timeout for image loading
    await expect(image).toHaveAttribute('src', /^(http|https):\/\/.*/);
  });
});
