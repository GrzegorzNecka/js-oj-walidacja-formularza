import errorMsg from './../errorMsg';

const errorOutput = document.getElementById('error-msg');
const validResult = [];

const resetValidElem = () => {
  errorOutput.innerText = '';
};

const validElem = (checkedElem, id) => {
  if (!checkedElem) {
    errorOutput.innerText += errorMsg[id];
    return;
  }

  validResult.push[id];
  console.log(validResult);
};

export { validElem, resetValidElem };
