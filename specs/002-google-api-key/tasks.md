# Tasks: Google Gemini Image Generation

**Feature Branch**: `002-google-api-key`
**Date**: 2025-09-26
**Plan**: /Users/memorysaver/Documents/github/workshop-0926/specs/002-google-api-key/plan.md

## Overview
This document outlines the tasks required to implement the Google Gemini Image Generation feature. Tasks are ordered by dependency, with parallelizable tasks marked with `[P]`.

## Setup Tasks

- [x] **T001**: Install necessary dependencies: `@google/generative-ai`.
  - **File**: `package.json`
  - **Command**: `pnpm add @google/generative-ai`

- [x] **T002**: Configure environment variables for the Google API key.
  - **File**: `.env.local`
  - **Description**: Add `GOOGLE_API_KEY=your_api_key_here` to `.env.local`.

## Test Tasks

- [x] **T003 [P]**: Create contract test for the `/api/generate-image` endpoint.
  - **File**: `tests/integration/api/generate-image.test.ts`
  - **Description**: Verify request/response schemas as defined in `contracts/api.yaml`.

- [x] **T004 [P]**: Create integration test for the primary user story (prompt input and image display).
  - **File**: `tests/integration/image-generation.test.ts`
  - **Description**: Simulate user input, click generate, and assert image display.

- [x] **T005 [P]**: Create integration test for responsive design.
  - **File**: `tests/integration/responsive-layout.test.ts`
  - **Description**: Test layout on different viewport sizes.

- [x] **T006 [P]**: Create integration test for empty prompt error handling.
  - **File**: `tests/integration/empty-prompt.test.ts`
  - **Description**: Verify error message when an empty prompt is submitted.

## Core Implementation Tasks

- [x] **T007**: Create API route handler for `/api/generate-image`.
  - **File**: `app/api/generate-image/route.ts`
  - **Description**: Implement the POST handler to receive prompts and call the Gemini API.

- [x] **T008**: Implement image generation logic within the API route handler.
  - **File**: `app/api/generate-image/route.ts`
  - **Description**: Use `@google/generative-ai` to call the Google Gemini 2.5 Flash Image API.

- [x] **T009**: Create UI component for prompt input.
  - **File**: `components/PromptInput.tsx`
  - **Description**: A reusable component with a text area and a submit button.

- [x] **T010**: Create UI component for displaying the generated image.
  - **File**: `components/GeneratedImageDisplay.tsx`
  - **Description**: A component to render the image, potentially with loading/error states.

- [x] **T011**: Integrate prompt input and image display components into the homepage.
  - **File**: `app/page.tsx`
  - **Description**: Add the new components to the main page and handle state management.

- [x] **T012**: Implement responsive design for the homepage layout.
  - **File**: `app/page.tsx`, `app/globals.css`
  - **Description**: Ensure the layout adapts well to different screen sizes using Tailwind CSS.

- [x] **T013**: Implement client-side error handling and feedback for image generation.
  - **File**: `app/page.tsx`, `components/GeneratedImageDisplay.tsx`
  - **Description**: Display user-friendly messages for API errors or failed image generation.

## Polish Tasks

- [x] **T014 [P]**: Write unit tests for `PromptInput.tsx` component.
  - **File**: `components/PromptInput.test.tsx`

- [x] **T015 [P]**: Write unit tests for `GeneratedImageDisplay.tsx` component.
  - **File**: `components/GeneratedImageDisplay.test.tsx`

- [x] **T016**: Update `GEMINI.md` with any new conventions or libraries introduced.
  - **File**: `GEMINI.md`
  - **Description**: Ensure the agent's context is up-to-date.

## Parallel Execution Example

```bash
# These tasks can be run in parallel:
pnpm exec your-test-runner tests/integration/api/generate-image.test.ts &
pnpm exec your-test-runner tests/integration/image-generation.test.ts &
pnpm exec your-test-runner tests/integration/responsive-layout.test.ts &
pnpm exec your-test-runner tests/integration/empty-prompt.test.ts &

# Once core implementation is done, these can run in parallel:
pnpm exec your-test-runner components/PromptInput.test.tsx &
pnpm exec your-test-runner components/GeneratedImageDisplay.test.tsx &
```
