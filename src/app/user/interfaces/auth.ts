export interface ILoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

export interface ITokens {
  refresh: string;
  access: string;
}

export interface IJWTPayload {
  exp: number;
  jti: string;
  token_type: string;
  user_id: number;
}

export interface IUser {
  first_name: string;
  last_name: string;
  sex: Sex;
  date_of_birth: string;
  email: string;
}

export type Sex = 'M' | 'F';

export type User = IUser | undefined;
