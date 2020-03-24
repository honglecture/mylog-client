import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Time from '../../components/main/Time';

const MainContainer = () => {
  const getCurrentTime = () => moment().format('HH:mm:ss');
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
  });

  return <Time currentTime={currentTime} />;
};

export default MainContainer;
