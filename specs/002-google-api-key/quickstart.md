# Quickstart: Google Gemini Image Generation

This guide provides the steps to test the Google Gemini Image Generation feature.

## Prerequisites

- The application is running (`pnpm dev`).
- You have a valid Google API key set as an environment variable.

## Testing Steps

1.  **Navigate to the homepage**:
    - Open your web browser and go to `http://localhost:3000`.

2.  **Verify the UI**:
    - You should see an input field to enter a text prompt.
    - You should see a "Generate" button.

3.  **Generate an image**:
    - Enter a text prompt into the input field (e.g., "a picture of a cat").
    - Click the "Generate" button.

4.  **Verify the result**:
    - After a few seconds, you should see an image displayed on the page that matches the prompt.

5.  **Test responsiveness**:
    - Open your browser's developer tools and switch to a mobile view.
    - The layout of the input field and the generated image should adapt to the smaller screen size.

6.  **Test error handling (optional)**:
    - Try submitting an empty prompt. You should see an error message.
    - If possible, try to simulate an API error. You should see an error message.
