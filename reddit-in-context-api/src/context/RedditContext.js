import React, { createContext, useState } from 'react';
import getReddit from '../service/RedditAPI';
import PropTypes from 'prop-types';

const RedditContext = createContext();

// const END_POINT_REDDIT = (endPoint) =>
// `https://www.reddit.com/r/${endPoint}.json`;

const RedditProvider = ({ children }) => {
  const [data, setData] = useState();
  const [select, setSelect] = useState('reactjs');
  const [ hourUpdate, SethourUpdate] = useState();

  const context = {
    data,
    setData,
    getReddit,
    select,
    setSelect,
    hourUpdate,
    SethourUpdate,
  };

  return (
    <RedditContext.Provider value={context}>{children}</RedditContext.Provider>
  );
};

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditContext, RedditProvider as Provider };
