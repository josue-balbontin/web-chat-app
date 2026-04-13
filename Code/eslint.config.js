import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Aquí le decimos que revise los archivos TypeScript
    files: ['src/**/*.ts'],
    rules: {
      // Tus reglas estrictas del requerimiento
      '@typescript-eslint/no-explicit-any': 'error',
      'no-var': 'error',
      'prefer-const': 'error'
    }
  }
);