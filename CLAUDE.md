# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application using the App Router, built with React 19, TypeScript, and Tailwind CSS. The project follows expert-level development practices with Firebase Cloud Functions integration, focusing on responsive, accessible, well-documented, and fully tested scalable web applications.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run code-check` - Run TypeScript check and ESLint (use this for validation)

### Jira Integration Script

- `./get_jira_title.sh` - Get Jira issue title for PR creation
  - `-h, --help` - Display help message
  - `-q, --quiet` - Output only the PR title without additional text (use for commands)
  - `-k, --key-only` - Output only the Jira key
  - `-t, --title-only` - Output only the issue title
  - **Prerequisites**: Requires [jira-cli](https://github.com/ankitpokhrel/jira-cli) installed and configured

## Architecture

- **Framework**: Next.js 15 with App Router architecture
- **Backend**: Firebase Cloud Functions integration
- **Styling**: Tailwind CSS with utility classes and CSS variables for theming
- **Type checking**: TypeScript with strict mode enabled
- **Code quality**: ESLint with Next.js, TypeScript, and Prettier integration
- **Git hooks**: Husky with lint-staged for pre-commit formatting
- **Icon System**: Reusable Icon component with type-safe name prop system
- **Input System**: Modular Input component with accessibility support, loading states, and sub-components
- **SVG Processing**: @svgr/webpack for SVG-to-React component conversion

## Git Workflow and Pull Requests

### Branch Naming Convention

- **Feature branches**: `feature/[Jira-key]-[task-number]` (e.g., `feature/OC-17`)
- **Bug fix branches**: `bugFix/[Jira-key]-[task-number]` (e.g., `bugFix/OC-25`)
- **Jira key**: Always use `OC` as the project key

### Commit Message Format

- Format: `[Jira-key]-[task-number] <summary of commit>`
- Example: `OC-17 Add user authentication component`

### Pull Request Creation

1. Use the PR template located at `.github/pull_request_template.md`
2. Get the Jira issue title using: `./get_jira_title.sh -q`
3. Create PR with GitHub CLI using the script output:
   ```bash
   gh pr create --title "$(./get_jira_title.sh --quiet)" --body-file filled_template.md
   ```
4. PR title format: `[Jira-key] - <title>` (automatically formatted by script)
5. Delete the filled template file after pushing changes

### Script Output Examples

- **Default (verbose)**: Shows Jira key, issue title, and PR title format
- **Quiet mode**: `[OC-32] - [FE] Remove app from Google crawling`
- **Key only**: `OC-32`
- **Title only**: `[FE] Remove app from Google crawling`

### PR Template Requirements

- Description with context and reasoning
- Change type selection (Feature/Bug fix/Refactor/Documentation/Testing/Other)
- Screenshots for UI changes
- Testing checklist (local, cross-browser, responsive, unit tests, E2E)
- Accessibility checklist (semantic HTML, keyboard navigation, focus states, ARIA)
- Code review checklist

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles with Tailwind CSS
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
└── components/
    ├── Icon/              # Icon system components
    │   ├── Icon.tsx       # Main Icon component
    │   ├── icon-map.tsx   # Icon definitions mapping
    │   ├── types.ts       # Icon TypeScript types
    │   └── index.ts       # Icon exports
    ├── Input/             # Input system components
    │   ├── Input.tsx      # Main Input component
    │   ├── Label.tsx      # Label sub-component
    │   ├── Helper.tsx     # Helper text sub-component
    │   ├── Prefix.tsx     # Prefix content sub-component
    │   ├── Suffix.tsx     # Suffix content sub-component
    │   ├── types.ts       # Input TypeScript types
    │   ├── utils.ts       # Input utility functions
    │   └── index.ts       # Input exports
    └── index.ts           # Component exports
```

## Icon System

The project uses a centralized Icon component system with type-safe name props:

### Usage

```tsx
import { Icon } from '@/components/Icon';

// Type-safe icon usage
<Icon name="warning-fill" size={24} className="text-red-500" />
<Icon name="arrow-right" size={16} />
```

### Adding New Icons

1. Add the icon name to `IconName` type in `src/components/icons/types.ts`
2. Add the SVG component to the icon map in `src/components/icons/icon-map.tsx`
3. Icons use `currentColor` for proper color inheritance
4. Default size is 16px, configurable via `size` prop

### Available Icons

- `warning-fill` - Warning triangle with exclamation mark
- `arrow-right` - Right-pointing arrow

## Input System

The project includes a comprehensive Input component system with modular sub-components and accessibility support:

### Usage

```tsx
import { Input } from '@/components/Input';

// Basic input
<Input label="Email" placeholder="Enter your email" />

// Input with helper text
<Input 
  label="Password" 
  helper="Must be at least 8 characters" 
  type="password" 
/>

// Input with error state
<Input 
  label="Username" 
  error="Username is required" 
  value={username}
  onChange={handleChange}
/>

// Input with prefix and suffix
<Input 
  label="Price" 
  prefix="$" 
  suffix="USD" 
  type="number"
/>

// Input with loading state
<Input 
  label="Search" 
  loading={isSearching}
  placeholder="Search..."
/>
```

### Features

- **Modular Architecture**: Separate sub-components (Label, Helper, Prefix, Suffix)
- **Accessibility**: Full ARIA attribute support with automatic generation
- **Loading States**: Built-in spinner for async operations
- **Size Variants**: Small, medium (default), and large sizes
- **Error Handling**: Visual error states with helper text
- **Flexible Content**: Support for prefix/suffix with optional styling
- **TypeScript**: Comprehensive type definitions with proper HTML input inheritance

### Sub-components

- `Label` - Form label with size and error state variants
- `Helper` - Helper text that can display normal hints or error messages
- `Prefix` - Left-side content (text, icons, etc.) with optional styling
- `Suffix` - Right-side content (text, icons, etc.) with optional styling

### Accessibility Features

- Automatic ARIA attribute generation via utils
- Screen reader support for loading states
- Proper form associations between labels and inputs
- Error state announcements
- Required field indicators

## Key Configuration

- Uses `@/*` path aliasing pointing to `./src/*`
- ESLint configured with simple-import-sort for automatic import organization
- Prettier configured with Tailwind CSS plugin and class name formatting
- Husky runs Prettier on all JS/TS/TSX files before commits
- Robots meta configured to prevent indexing (development setup)
- GitHub and Jira integration for issue tracking
- Turbopack configuration for stable build performance (moved from experimental)
- @svgr/webpack for SVG processing in both webpack and turbopack modes

## Development Standards

- Write secure, maintainable, and performant code following Next.js best practices
- Ensure responsive design and accessibility compliance
- Provide comprehensive test coverage
- Document code appropriately
- Follow the established code style guidelines
