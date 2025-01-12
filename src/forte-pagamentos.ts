import axios from "axios"; // Ensure axios is installed
import * as dotenv from "dotenv"; // For environment variables

dotenv.config(); // Load .env variables

const API_URL = "https://api.fortepagamentos.com.br/v1";

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
    if (axios.isAxiosError(error)) {
      console.error("Error listing transactions:", error.response?.data);
    } else {
      console.error("Unexpected Error:", error);
    }
    throw error;
  }
}

export { createTransaction, listTransactions };
