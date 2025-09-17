export interface UserData {
  id: string;
  name: string,
  surname: string,
  age: number,
  email: string,
  phone: string,
  country: string
  pet: string
  card: string
}

export const userDummyData: UserData[] = [
  {
    id: '1',
    name: "Andrew",
    surname: "Kozovyi",
    age: 19,
    email: "andrew@example.com",
    phone: "+380 99 999 99 99",
    country: "Ukraine",
    pet: "dog",
    card: ''
  },
  {
    id: '2',
    name: "Alina",
    surname: "Puto",
    age: 19,
    email: "alina@example.com",
    phone: "+380 66 666 66 66",
    country: "Ukraine",
    pet: "cat",
    card: ''
  },
]

export const userDummyDataDifferent: UserData[] = [
  {
    id: '1',
    name: "Andrew",
    surname: "Kozovyi",
    age: 19,
    email: "andrew@example.com",
    phone: "+380 99 999 99 99",
    country: "Ukraine",
    pet: "dog",
    card: 'default'
  },
  {
    id: '2',
    name: "Alina",
    surname: "Puto",
    age: 19,
    email: "alina@example.com",
    phone: "+380 66 666 66 66",
    country: "Ukraine",
    pet: "cat",
    card: 'custom'
  },
]
