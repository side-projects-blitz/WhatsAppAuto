import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores(['node_modules', 'dist', 'build', 'coverage']),
    // Reglas JS básicas
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        plugins: { js },
        extends: ['js/recommended'],
    },

    // Globales del entorno
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    // Reglas de TypeScript
    ...tseslint.configs.recommended,
    eslintConfigPrettier,

    // Reglas personalizadas + orden de imports
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        plugins: {
            import: importPlugin,
        },
        rules: {
            quotes: ['error', 'single'],
            indent: ['error', 4],
            'import/order': [
                'error',
                {
                    alphabetize: { order: 'asc', caseInsensitive: true },
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
]);
