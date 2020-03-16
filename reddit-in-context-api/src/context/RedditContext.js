import React, { createContext, useState } from 'react';
import getReddit from '../service/RedditAPI'
import PropTypes from 'prop-types';

const RedditContext = createContext();

// const END_POINT_REDDIT = (endPoint) =>
// `https://www.reddit.com/r/${endPoint}.json`;


const RedditProvider = ({ children }) => {
  const [data, setData] = useState();

  const context = {
    data,
    setData,
    getReddit,
  };
  
  return (
    <RedditContext.Provider value={context}>{children}</RedditContext.Provider>
  );
};

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditContext, RedditProvider as Provider };
