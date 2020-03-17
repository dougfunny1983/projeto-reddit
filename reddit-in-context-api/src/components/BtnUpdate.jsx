import React, { useContext } from 'react';
import { RedditContext } from '../context/RedditContext';

const BtnUpdate = () => {
  const { hourUpdate, SethourUpdate } = useContext(RedditContext);

  const now = new Date();
  const dateNow = ` → ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  SethourUpdate(dateNow);

  return (
    <fieldset>
      <legend>Atualização da página</legend>
      <h3>Ultima atualização: {hourUpdate}</h3>
      <button type="button" onClick={() => window.location.reload()}>
        refresh
      </button>
    </fieldset>
  );
};

export default BtnUpdate;
