import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('layout should adapt to mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('http://localhost:3000');

    // Check if elements are visible and positioned correctly for mobile
    const promptInput = page.locator('textarea[aria-label="Prompt Input"]');
    await expect(promptInput).toBeVisible();
    // Add more assertions here to check specific mobile layout properties
    // For example, check if an element is full width or stacked vertically

    // Generate an image to see how the image display adapts
    await page.fill('textarea[aria-label="Prompt Input"]', 'a small bird');
    await page.click('button:has-text("Generate")');
    const image = page.locator('img[alt="Generated Image"]');
    await expect(image).toBeVisible({ timeout: 10000 });
    // Add assertions for image display on mobile
  });

  test('layout should adapt to desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 }); // Desktop
    await page.goto('http://localhost:3000');

    // Check if elements are visible and positioned correctly for desktop
    const promptInput = page.locator('textarea[aria-label="Prompt Input"]');
    await expect(promptInput).toBeVisible();
    // Add more assertions here for desktop layout
  });
});
