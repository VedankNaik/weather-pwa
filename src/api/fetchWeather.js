import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
