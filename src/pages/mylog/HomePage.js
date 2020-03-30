import React from 'react';
import MylogLayout from '../../components/mylog/common/MylogLayout';
import SideMenu from '../../components/mylog/common/SideMenu';
import HomeContainer from '../../containers/mylog/HomeContainer';

function HomePage() {
  return <MylogLayout main={<HomeContainer />} side={<SideMenu />} />;
}

export default HomePage;
