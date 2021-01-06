export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  birthdate: string;
  sex: Sex;
  age: number;
}

export type Sex = 'M' | 'F';
