import React from 'react';
import styled from 'styled-components';
import { IoIosSunny } from 'react-icons/io'; // 낮 맑음 - 시간 check
import { IoIosMoon } from 'react-icons/io'; // 밤 맑음 - 시간 check
import { IoIosPartlySunny } from 'react-icons/io'; // 낮 구름 맑음 - 시간 check
import { IoIosCloudyNight } from 'react-icons/io'; // 음 구름 맑음 - 시간 check
import { IoIosRainy } from 'react-icons/io'; // 비옴
import { IoIosSnow } from 'react-icons/io'; // 눈옴
import { IoIosCloud } from 'react-icons/io'; // 구름
import { IoIosThunderstorm } from 'react-icons/io'; // 번개

import palette from '../../lib/styles/palette';

const WeatherBlock = styled.div``;

const WeatherInfoBlock = styled.div`
  svg {
    vertical-align: middle;
  }
  span {
    font-size: 1.5rem;
    color: ${palette.white[0]};
    font-weight: 700;
  }
`;

const WeatherIcon = ({ id, currentHour }) => {
  const size = '70';
  const color = palette.white[0];

  if (id >= 200 && id <= 232) {
    return <IoIosThunderstorm size={size} color={color} />;
  } else if (id >= 300 && id <= 321) {
    return <IoIosRainy size={size} color={color} />;
  } else if (id >= 500 && id <= 531) {
    return <IoIosRainy size={size} color={color} />;
  } else if (id >= 600 && id <= 622) {
    return <IoIosSnow size={size} color={color} />;
  } else if (id >= 701 && id <= 781) {
    return <IoIosCloud size={size} color={color} />;
  } else if (id === 800) {
    // 밤일 경우
    if (currentHour >= 18) {
      return <IoIosMoon size={size} color={color} />;
      // 낮일 경우
    } else {
      return <IoIosSunny size={size} color={color} />;
    }
  } else if (id === 801) {
    // 밤일 경우
    if (currentHour >= 18) {
      return <IoIosCloudyNight size={size} color={color} />;
      // 낮일 경우
    } else {
      return <IoIosPartlySunny size={size} color={color} />;
    }
  } else {
    return <IoIosCloud size={size} color={color} />;
  }
};

const WeatherInfo = ({ id, currentHour, temp }) => {
  return (
    <WeatherInfoBlock>
      <WeatherIcon id={id} currentHour={currentHour} />
      <span>{temp}°C</span>
    </WeatherInfoBlock>
  );
};

const Weahter = ({ data, error, loading, currentHour }) => {
  // 에러 발생 시
  if (error) {
    return null;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !data) {
    return null;
  }
  console.log(data);
  const { temp } = data.main;
  const { id } = data.weather[0];

  return (
    <WeatherBlock>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && data && (
        <WeatherInfo id={id} currentHour={currentHour} temp={temp} />
      )}
    </WeatherBlock>
  );
};

export default Weahter;
