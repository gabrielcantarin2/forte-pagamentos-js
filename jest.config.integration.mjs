export default {
    // ... suas configurações do Jest ...
    testEnvironment: 'jsdom',
    setupFiles: ['./tests/setupIntegrationTest.js'] // Arquivo para configurar o ambiente de teste de integração
  };