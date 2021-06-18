import errorMsg from './../errorMsg';

const errorOutput = document.getElementById('error-msg');

const validElem = (checkedElem, id) => {
  if (!checkedElem) {
    errorOutput.innerText += errorMsg[id];

    return;
  }
};

const resetValidElem = () => {
  errorOutput.innerText = '';
};

export { validElem, resetValidElem };
