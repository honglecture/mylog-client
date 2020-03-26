import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../modules/weather';
import moment from 'moment';
import Weahter from '../../components/main/Weahter';

const WeatherContainer = () => {
  const [currentHour, setCurrentHour] = useState(moment().format('HH'));
  const dispatch = useDispatch();

  const { weather, error, loading } = useSelector(({ weather, loading }) => ({
    weather: weather.weather,
    error: weather.error,
    loading: loading['weather/GET_WEATHER'],
  }));

  useEffect(() => {
    // HTML5의 geolocaiton으로 사용할 수 있는지 확인합니다.
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      const units = 'metric';
      const appid = process.env.REACT_APP_WEATHER_API_KEY;
      dispatch(getWeather({ lat, lon, units, appid }));
    });
  }, [dispatch]);

  return (
    <Weahter
      data={weather}
      error={error}
      loading={loading}
      currentHour={currentHour}
    />
  );
};

export default WeatherContainer;
