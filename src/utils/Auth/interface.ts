export interface Token {
  access: string | null;
  refresh: string | null;
}

export interface AuthReducerInitialState {
  id: string;
  token: Token;
}
