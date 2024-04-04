import { CarProps, FilterProps } from "@/types";
import axios from 'axios';

export async function fetchCars(filters: FilterProps) {
  const {manufacturer, year, model,limit, fuel} = filters

    // Set the required headers for the API request
    const headers={
		'X-RapidAPI-Key': '9d7fb851d8msh4fc37c77c5eda1cp1df553jsnd445f0b713c4',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	};
  
    // Set the required headers for the API request
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );
    // Parse the response as JSON
    const result = await response.json();  
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


// unsplashService.ts


const API_KEY = '0Tki9_psKZbTBvb6Wos6TXBL-9JBOpaujGF8kQVMjlI';
const BASE_URL = 'https://api.unsplash.com';

interface CarData {
  make: string;
  year: number;
}

export const fetchCarImage = async (carData: CarData): Promise<string | null> => {
  const { make, year } = carData;
  try {
    const response = await axios.get(`${BASE_URL}/search/photos?query=${make}+${year}+car&per_page=1`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    console.log("response==", response);

    if (response.data.results.length > 0) {
      return response.data.results[0].urls.full; // Fetch full-size image
    } else {
      return null; // No image found
    }
  } catch (error) {
    console.error('Error fetching car image:', error);
    return null;
  }
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};






