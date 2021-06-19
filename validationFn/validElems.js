import errorMsg from './../errorMsg';

const errorOutput = document.getElementById('error-msg');

const resetValidElem = () => {
  errorOutput.innerText = '';
};

const validElem = (checkedElem, id) => {
  if (!checkedElem) {
    errorOutput.innerText += errorMsg[id];
    return;
  }
};

export { validElem, resetValidElem };
