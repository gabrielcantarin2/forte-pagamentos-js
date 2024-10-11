import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const API_URL = "https://api.fortepagamentos.com.br/v1";

// Authenticate function
async function authenticate(
  clientId: string,
  clientSecret: string
): Promise<string> {
  try {
    const response = await axios.post(
      `${API_URL}/auth/token`,
      {
        client_id: clientId,
        client_secret: clientSecret,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data.access_token;
  } catch (error: unknown) {
    // Specify the error type as unknown
    if (axios.isAxiosError(error)) {
      // Check if the error is an Axios error
      console.error("Authentication Error:", error.response?.data);
    } else {
      console.error("Unexpected Error:", error);
    }
    throw error;
  }
}

// Create transaction function
async function createTransaction(
  accessToken: string,
  data: Record<string, any>
): Promise<any> {
  try {
    const response = await axios.post(`${API_URL}/transactions`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error: unknown) {
    // Specify the error type as unknown
    if (axios.isAxiosError(error)) {
      console.error("Error creating transaction:", error.response?.data);
    } else {
      console.error("Unexpected Error:", error);
    }
    throw error;
  }
}

// List transactions function
async function listTransactions(
  accessToken: string,
  params: Record<string, any> = {}
): Promise<any> {
  try {
    const response = await axios.get(`${API_URL}/transactions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: params,
    });

    return response.data;
  } catch (error: unknown) {
    // Specify the error type as unknown
    if (axios.isAxiosError(error)) {
      console.error("Error listing transactions:", error.response?.data);
    } else {
      console.error("Unexpected Error:", error);
    }
    throw error;
  }
}

// Export functions
export { authenticate, createTransaction, listTransactions };
