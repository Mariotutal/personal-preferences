import axios from 'axios';

// Define the structure of a person object
export interface Person {
  Name: string;
  'Favorite Food': string;
  'Favorite Movie': string;
  Status: 'Active' | 'Inactive';
  Date?: Date;
}

// Base URL for the API, using Vite environment variables
const VITE_API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/';

// fetch records from the API
export const fetchRecords = async (orderBy?: string): Promise<Person[]> => {
  // Construct the URL for fetching records, including optional orderBy parameter
  const url = `${VITE_API_BASE_URL}records${
    orderBy !== undefined && orderBy !== '' ? `?orderBy=${orderBy}` : ''
  }`;

  // Make an HTTP GET request to the API
  const response = await axios.get(url);

  // Return the data as an array of Person objects
  return response.data as Person[];
};
