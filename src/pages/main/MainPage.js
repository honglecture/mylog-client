import React from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import MainContainer from '../../containers/main/MainContainer';
import WeatherContainer from '../../containers/main/WeatherContainer';
import WeatherTemplate from '../../components/main/WeatherTemplate';

const MainPage = () => {
  return (
    <>
      <WeatherTemplate>
        <WeatherContainer />
      </WeatherTemplate>
      <MainTemplate>
        <MainContainer />
      </MainTemplate>
    </>
  );
};

export default MainPage;
