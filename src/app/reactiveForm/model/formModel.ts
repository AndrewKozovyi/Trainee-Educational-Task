export interface FormModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  photoUrl: string;
  address: Address;
  hobbies: Hobby[];
}

export interface Address {
  city: string;
  street: string;
  house: string;
}

export interface Hobby {
  name: string;
  years: number;
}

export interface Year {
  id: number;
  year: number;
}
