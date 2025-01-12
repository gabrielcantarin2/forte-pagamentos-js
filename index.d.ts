// src/index.d.ts
declare module "@gabrielcantarin2/forte-pagamentos-js" {
  export function authenticate(
    clientId: string,
    clientSecret: string
  ): Promise<string>;
  export function createTransaction(
    accessToken: string,
    data: any
  ): Promise<any>;
  export function listTransactions(
    accessToken: string,
    params?: any
  ): Promise<any>;
}
