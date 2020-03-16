import React, { useContext } from 'react';
import { RedditContext } from '../context/RedditContext';
import Header from './Header';

export default function Reddit() {
  const { data } = useContext(RedditContext);

  console.log('verificando se tem alguma chamada api aqui', data);

  return (
    <div>
      <Header />
      <h2>Selected: </h2>
    </div>
  );
}
