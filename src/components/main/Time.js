import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TimeBlock = styled.div`
  h1 {
    margin: 0;
    color: ${palette.white[0]};
    font-size: 7rem;
    letter-spacing: 0.4rem;
  }
  p {
    font-size: 2rem;
    color: ${palette.white[0]};
    font-weight: 600;
  }
`;

const Time = ({ currentTime }) => {
  return (
    <TimeBlock>
      <h1>{currentTime}</h1>
      <p>오늘도 잘 지내고 계시나요</p>
    </TimeBlock>
  );
};

export default Time;
