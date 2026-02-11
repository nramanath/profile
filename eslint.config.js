import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
    // Base ESLint config
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginAstro.configs['jsx-a11y-recommended'],
    eslintConfigPrettier,
    {
        ignores: ['dist/', '.astro/', 'node_modules/'],
    },
];
