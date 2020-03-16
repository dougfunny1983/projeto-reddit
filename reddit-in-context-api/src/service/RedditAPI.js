const URL = 'https://www.reddit.com/r/reactjs.json';

const getReddit = () =>
  fetch(URL).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );

export default getReddit;
