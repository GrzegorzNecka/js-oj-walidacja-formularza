// Import stylesheets
import './style.css';
import {
  checkName,
  checkEmail,
  checkPass,
  checkPassConf,
  checkRodo,
  resetValidElem,
  validElem
} from './validationFn';

// Write Javascript code!
const form = document.getElementById('form');
const errorOutput = document.getElementById('error-msg');

const sendByFetch = (inputs, inputsVal) => {
  console.log(inputs);
  console.log(inputsVal);
  const checkedInputs = inputs.filter(input => input);

  if (inputs.length === checkedInputs.length) {
    errorOutput.innerText = 'sukces';
  }
};

const sendForm = e => {
  e.preventDefault();
  const children = e.target.children;
  const inputs = [];
  const inputsVal = [];
  resetValidElem();
  Array.from(children).forEach(nodeElem => {
    const { id } = nodeElem;

    switch (id) {
      case 'name':
        const validName = checkName(nodeElem);
        validElem(validName, 'name');
        inputs.push(validName);
        inputsVal.push(nodeElem.value);
        break;
      case 'email':
        const validEmail = checkEmail(nodeElem);
        validElem(validEmail, 'email');
        inputs.push(validEmail);
        inputsVal.push(nodeElem.value);
        break;
      case 'password':
        const validPass = checkPass(nodeElem);
        validElem(validPass, 'password');
        inputs.push(validPass);
        inputsVal.push(nodeElem.value);
        break;
      case 'confirm':
        const passwordElem = document.getElementById('password');
        const validConf = checkPassConf(nodeElem, passwordElem);
        validElem(validConf, 'confirm');
        inputs.push(validConf);
        inputsVal.push(nodeElem.value);
        break;
      case 'rodo':
        const validRodo = checkRodo(nodeElem);
        validElem(validRodo, 'rodo');
        inputs.push(validRodo);
        inputsVal.push(nodeElem.value);
        break;

      default:
        return;
    }
  });

  sendByFetch(inputs, inputsVal);
};

form.addEventListener('submit', sendForm);
