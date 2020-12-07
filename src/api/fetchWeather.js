import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '09fce83c2d9b0873a600e7f819e04abf';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
