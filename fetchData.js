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
      errorOutput.innerText = `sukces - formularz z danymi ${res} został wysłany`;
    })
    .catch(() => {
      errorOutput.innerText = 'problemy z połączeniem';
    });
};

export default fetchData;
