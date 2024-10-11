import axios from 'axios';
import { authenticate, createTransaction, listTransactions } from '../src/forte-pagamentos';

jest.mock('dotenv', () => ({
  config: jest.fn(),
}));

describe('forte-pagamentos', () => {
  it('deve autenticar com sucesso', async () => {
    const response = await authenticate();
    console.log('tokkeeen', response)
    expect(typeof response).toBe('string');
  });


  describe('Integration Tests', () => {
    it('deve listar as cobranças com sucesso (integration)', async () => {
      const accessToken = await authenticate();
      console.log('akiii tem tokeeen', accessToken);
    //   const params = { status: 'paid' };
      const params = {  };

      const response = await listTransactions(accessToken, params);
      expect(response.data).toBeDefined();
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

});