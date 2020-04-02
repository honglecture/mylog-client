import React from 'react';
import MylogLayout from '../../components/mylog/common/MylogLayout';
import MenuContainer from '../../containers/mylog/common/MenuContainer';
import HomeContainer from '../../containers/mylog/HomeContainer';

function HomePage() {
  return <MylogLayout main={<HomeContainer />} side={<MenuContainer />} />;
}

export default HomePage;
