/**
 * Boundary configuration for this codebase.
 * Enforces hexagonal architecture with functional core, imperative shell.
 */
import type { BoundaryConfig } from 'eslint-plugin-import-boundaries';

/**
 * Hexagonal architecture boundaries for this ESLint plugin.
 *
 * Structure:
 * - domain: Pure business logic (functional core)
 * - ports: Interfaces only (dependency inversion contracts)
 * - application: Orchestrates domain logic (functional core)
 * - infrastructure: Imperative shell (ESLint adapters)
 * - shared: Types and utilities (used by all)
 */
export const boundaries: BoundaryConfig[] = [
  {
    // Top level pages composed from components.
    identifier: '@pages',
    dir: 'pages',
    alias: '@pages',
    allowImportsFrom: ['@components', '@hooks', '@utils', '@config'],
  },
  {
    // Components composed from UI primitives.
    identifier: '@components',
    dir: 'components',
    alias: '@components',
    allowImportsFrom: ['@ui', '@hooks', '@utils', '@config', '@content'],
  },
  {
    // Static copy and structured site data (no framework imports).
    identifier: '@content',
    dir: 'content',
    alias: '@content',
    allowImportsFrom: [],
  },
  {
    // UI primitives, installed from library.
    identifier: '@ui',
    dir: 'ui',
    alias: '@ui',
    allowImportsFrom: ['@hooks', '@utils', '@config'],
  },
  {
    // Contexts
    identifier: '@context',
    dir: 'context',
    alias: '@context',
    allowImportsFrom: ['@utils', '@config'],
  },
  {
    // State orchestration hooks
    identifier: '@hooks',
    dir: 'hooks',
    alias: '@hooks',
    allowImportsFrom: ['@utils', '@context'],
  },
  {
    // Infrastructure configuration items
    identifier: '@config',
    dir: 'config',
    alias: '@config',
    allowImportsFrom: ['@utils'],
  },
  {
    // Pure utility functions
    identifier: '@utils',
    dir: 'utils',
    alias: '@utils',
  },
];
