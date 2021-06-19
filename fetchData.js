const fetchData = (inputVal, errorOutput) => {
  const url = 'https://przeprogramowani.pl/projekt-walidacja';
  const options = {
    method: 'POST',
    body: JSON.stringify(inputVal),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      errorOutput.innerText = 'sukces';
    });
};

export default fetchData;
