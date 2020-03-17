import React, { useContext } from 'react';
import { RedditContext } from '../context/RedditContext';
import Header from './Header';
import Select from './Select';
import BtnUpdate from './BtnUpdate';

export default function Reddit() {
  const { data, select } = useContext(RedditContext);
  const createUL = (value) => (
    <ul>
      {value.map((lis) => {
        return <li data-testid='TagLi'>{lis.data.title}</li>;
      })}
    </ul>
  );

  return (
    <div>
      <Header />
      <h2>Selected: {select} </h2>
      <Select />
      <br/>
      <BtnUpdate/>
      {data && createUL(data.data.children)}
    </div>
  );
}
