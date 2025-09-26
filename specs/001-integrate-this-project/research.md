# Research: Vercel AI SDK Installation

## Decision
The project will use `pnpm` to install the `ai` package, which is the core of the Vercel AI SDK.

## Rationale
The user requested to integrate the latest Vercel AI SDK. The search results indicate that the `ai` package is the core component. The project's constitution mandates the use of `pnpm` for package management.

## Alternatives Considered
- Installing provider-specific packages like `@ai-sdk/vercel` or `@ai-sdk/openai`. This is not necessary for the initial integration, but can be done later if a specific provider is chosen.
