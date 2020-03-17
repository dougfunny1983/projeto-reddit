const URL=(value) => `https://www.reddit.com/r/${value}.json`;

const getReddit = (value) =>
  fetch(URL(value)).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );

export default getReddit;
