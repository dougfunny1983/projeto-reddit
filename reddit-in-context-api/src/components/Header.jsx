import React, { useEffect, useContext } from 'react';
import { RedditContext } from '../context/RedditContext';

const Header = () => {
  const { getReddit, setData } = useContext(RedditContext);

  useEffect(() => {
    getReddit().then((data) => setData(data));
  }, [getReddit, setData]);

  return <h1>Reddit!!!</h1>;
};

export default Header;
