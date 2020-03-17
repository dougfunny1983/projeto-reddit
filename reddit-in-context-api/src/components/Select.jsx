import React, { useContext } from 'react';
import { RedditContext } from '../context/RedditContext';

const Header = () => {
  const { setSelect } = useContext(RedditContext);
  return (
    <form>
        <fieldset>
          <legend>Escolha o Post</legend>
          <select 
          data-testid="select"
          onChange={(e) => setSelect(e.target.value)}
          >
            <option value="reactjs" selected>reactjs</option>
            <option value="frontend">frontend</option>
          </select>
        </fieldset>
      </form>
  )
};

export default Header;
