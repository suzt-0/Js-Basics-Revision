import cities from "./worldcities_20251117_135941.json";

const formatted = Object.fromEntries(
  cities.map(city => [
    city.city.toLowerCase().replace(/\s+/g, ""), // key (cleaned city name)
    {
      lat: parseFloat(city.lat),
      lon: parseFloat(city.lng)
    }
  ])
);



export const coordinates = formatted;

export default coordinates;
