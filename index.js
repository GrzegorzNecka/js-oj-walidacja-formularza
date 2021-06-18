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
        const validName = checkName(nodeElem);
        validElem(validName, 'name');
        inputs.push(validName);
        break;
      case 'email':
        const validEmail = checkEmail(nodeElem);
        validElem(validEmail, 'email');
        inputs.push(validEmail);
        break;
      case 'password':
        const validPass = checkPass(nodeElem);
        validElem(validPass, 'password');
        inputs.push(validPass);
        break;
      case 'confirm':
        const passwordElem = document.getElementById('password');
        const validConf = checkPass(nodeElem, passwordElem);
        validElem(validConf, 'confirm');
        inputs.push(validConf);
        break;
      case 'rodo':
        const validRodo = checkRodo(nodeElem);
        validElem(validRodo, 'rodo');
        inputs.push(validRodo);
        break;

      default:
        return;
    }
  });

  sendByFetch(inputs);
};

form.addEventListener('submit', sendForm);
