import React, { useEffect, useContext } from 'react';
import { RedditContext } from '../context/RedditContext';

const Header = () => {
  const { getReddit, setData, select } = useContext(RedditContext);

  useEffect(() => {
    getReddit(select).then((data) => setData(data));
  }, [getReddit, select, setData]);

  return <h1>Reddit!!!</h1>;
};

export default Header;
