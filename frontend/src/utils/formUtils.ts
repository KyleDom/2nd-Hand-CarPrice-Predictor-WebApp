export const isFormComplete = (
  brand: string,
  model: string,
  age_of_car: string,
  body_type: string,
  color: string,
  location: string,
  retail: string,
  poster_type: string,
  fuel_type: string,
  transmission: string,
  mileage_in_km: string
): boolean => {
  return (
    brand !== "Select option" &&
    model !== "Select option" &&
    age_of_car !== "Select option" &&
    body_type !== "Select option" &&
    color !== "Select option" &&
    location !== "Select option" &&
    retail !== "Select option" &&
    poster_type !== "Select option" &&
    fuel_type !== "Select option" &&
    transmission !== "Select option" &&
    mileage_in_km !== "Select option" &&
    age_of_car !== null &&
    retail !== null &&
    mileage_in_km !== null
  );
};