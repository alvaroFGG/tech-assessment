import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200', // la URL de tu frontend
    supportFile: 'apps/frontend/cypress/support/e2e.ts',
    specPattern: 'apps/frontend/cypress/e2e/**/*.spec.ts',
  },
});
