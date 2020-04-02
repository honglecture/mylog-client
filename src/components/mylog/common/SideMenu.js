import React from 'react';
import styled from 'styled-components';

const SideMenuBlock = styled.div`
  padding: 1rem;
  color: #6b6b6b;
  line-height: 1.7rem;
`;

const ProfileBlock = styled.div``;

function SideMenu() {
  return (
    <SideMenuBlock>
      <ProfileBlock>
        <h3>Honglecture</h3>
      </ProfileBlock>
      <ul>
        <li>사이드바 테스트1</li>
        <li>사이드바 테스트1</li>
        <li>사이드바 테스트1</li>
        <li>사이드바 테스트1</li>
      </ul>
    </SideMenuBlock>
  );
}

export default SideMenu;
