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

const sendByFetch = inputs => {
  console.log(inputs);
  const checkedInputs = inputs.filter(input => input);

  if (inputs.length === checkedInputs.length) {
    errorOutput.innerText = 'sukces';
  }
};

const sendForm = e => {
  e.preventDefault();
  const children = e.target.children;
  const inputs = [];
  resetValidElem();
  Array.from(children).forEach(nodeElem => {
    const { id } = nodeElem;

    switch (id) {
      case 'name':
        validElem(checkName(nodeElem), 'name');
        inputs.push(checkName(nodeElem));
        break;
      case 'email':
        validElem(checkEmail(nodeElem), 'email');
        inputs.push(checkEmail(nodeElem));
        break;
      case 'password':
        validElem(checkPass(nodeElem), 'password');
        inputs.push(checkPass(nodeElem));
        break;
      case 'confirm':
        const passwordElem = document.getElementById('password');
        validElem(checkPassConf(nodeElem, passwordElem), 'confirm');
        inputs.push(checkPassConf(nodeElem, passwordElem));
        break;
      case 'rodo':
        validElem(checkRodo(nodeElem), 'rodo');
        inputs.push(checkRodo(nodeElem));
        break;

      default:
        return;
    }
  });

  sendByFetch(inputs);
};

form.addEventListener('submit', sendForm);
