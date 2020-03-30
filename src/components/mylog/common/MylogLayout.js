import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  height: 100%;
`;

const Main = styled.main`
  flex: 1;
`;
const Side = styled.aside`
  width: 15rem;
  background-color: #faf8f5;
`;

function MylogLayout({ main, side }) {
  return (
    <Block>
      <Side>{side}</Side>
      <Main>{main}</Main>
    </Block>
  );
}

export default MylogLayout;
