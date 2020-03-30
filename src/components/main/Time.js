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

  /* 브라우저 크기에 따라 가로 사이즈 변경 */
  @media (max-width: 1024px) {
    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;

const Time = ({ currentTime }) => {
  return (
    <TimeBlock>
      <h1>{currentTime}</h1>
      <p>오늘도 잘 지내고 계신가요</p>
    </TimeBlock>
  );
};

export default Time;
