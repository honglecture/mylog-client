import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const WeatherBlock = styled.div`
  width: 300px;
  height: 300px;
`;

const Weahter = ({ data, error, loading }) => {
  // 에러 발생 시
  if (error) {
    return null;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !data) {
    return null;
  }

  const { temp } = data.main;
  console.log(data);
  return <WeatherBlock>{temp}</WeatherBlock>;
};

export default Weahter;
