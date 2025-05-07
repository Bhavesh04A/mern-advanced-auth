import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [{
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended' // Integrates Prettier rules as ESLint rules
    ],
    rules: {
        // React
        'react/react-in-jsx-scope': 'off',

        // Formatting
        'prettier/prettier': [
            'error',
            {
                semi: true,
                singleQuote: true,
                arrowParens: 'avoid',
                bracketSpacing: true,
                endOfLine: 'auto',
            },
        ],

        // Spacing
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'no-multi-spaces': 'error',

        // JS Best Practices
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'no-undef': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}]