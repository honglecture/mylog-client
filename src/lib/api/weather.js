import qs from 'qs';
import client from './client';

export const readPost = id => client.get(`/api/posts/${id}`);

export const getWeather = ({ lat, lon, units, appid }) => {
  const queryString = qs.stringify({
    lat,
    lon,
    units,
    appid,
  });
  return client.get(
    `http://api.openweathermap.org/data/2.5/weather?${queryString}`,
  );
};
