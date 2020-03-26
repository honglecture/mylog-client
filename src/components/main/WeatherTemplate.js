import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

/**
 * 메인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

/* 화면 전체를 채움 */
const WeatherTemplateBlock = styled.div`
  position: fixed;
  right: 2%;
  top: 2%;
  display: flex;
  z-index: 1;
`;

const WeatherTemplate = ({ children }) => {
  return <WeatherTemplateBlock>{children}</WeatherTemplateBlock>;
};

export default WeatherTemplate;
