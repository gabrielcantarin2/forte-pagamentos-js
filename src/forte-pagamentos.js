import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'https://api.fortepagamentos.com.br/v1';


async function authenticate() {
  try {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;

    console.log('Client ID:', clientId); 
    console.log('Client Secret:', clientSecret); 

    const response = await axios.post(`${API_URL}/auth/token`, {
      client_id: clientId,
      client_secret: clientSecret,
    }, {
      headers: {
        'Content-Type': 'application/json' 
      }
    });

    console.log('API Response:', response.data); 

    return response.data.data.access_token; 
  } catch (error) {
    console.error('Authentication Error:', error.response.data); 
    throw error;
  }
}



async function createTransaction(accessToken, data) { // Updated function name
  try {
    const response = await axios.post(`${API_URL}/transactions`, data, { // Updated endpoint path
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao criar transação:', error); // Updated error message
    throw error;
  }
}

async function listTransactions(accessToken, params = {}) { // Updated function name
  try {
    const response = await axios.get(`${API_URL}/transactions`, { // Updated endpoint path
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: params,
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao listar transações:', error); // Updated error message
    throw error;
  }
}

export { authenticate, createTransaction, listTransactions }; // Updated export names