# Code Quality Standards

## Overview
This document outlines the code quality standards for the GamingZone shared library.

## Tools

### ESLint
- Strict TypeScript rules enabled
- Explicit return types required
- No `any` types allowed
- Unused variables must be prefixed with `_`

### Prettier
- Single quotes
- Trailing commas
- 100 character line width
- 2 space indentation
- Semicolons required

### Husky
Pre-commit hooks automatically run:
- Lint-staged (ESLint + Prettier on staged files)

Commit-msg hooks validate:
- Conventional commit format

### Commitlint
Commit message format: `type(scope): subject`

**Types:** feat, fix, docs, style, refactor, test, chore, perf, ci, build

**Scopes:** shared, dto, interfaces, exceptions, events, graphql, quality

## Usage

```bash
# Lint code
npm run lint

# Format code
npm run format

# Build
npm run build
```

## Pre-commit Workflow
1. Stage your changes: `git add .`
2. Commit with conventional format: `git commit -m "feat(dto): add new response type"`
3. Hooks automatically run linting and formatting
4. Commit message is validated
