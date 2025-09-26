# Data Model: Google Gemini Image Generation

This feature does not introduce any new persistent data models to the system. The primary data exchanged is transient and managed within the client-side application state.

## Transient Data

- **Prompt**: A user-provided text string that is sent to the Google Gemini API.
- **Generated Image**: The image data (e.g., a URL to the image) returned by the API, which is then displayed to the user.
