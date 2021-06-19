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
import { checkAndSend, configForm } from './checkAndSend';

// Write Javascript code!
const form = document.getElementById('form');
const errorOutput = document.getElementById('error-msg');

const sendByFetch = ({ inputState, inputVal }) => {
  console.log(inputState);
  console.log(inputVal);
  const checkedInputs = inputState.filter(input => input);

  if (inputState.length === checkedInputs.length) {
    errorOutput.innerText = 'sukces';
  }
};

const sendForm = e => {
  e.preventDefault();
  
  const children = e.target.children;
  resetValidElem();

  Array.from(children).forEach(nodeElem => {
   
    const { id } = nodeElem;

    switch (id) {
      case 'name':
        checkAndSend(checkName(nodeElem), nodeElem, 'name');
        break;
      case 'email':
        checkAndSend(checkEmail(nodeElem), nodeElem, 'email');
        break;
      case 'password':
        checkAndSend(checkPass(nodeElem), nodeElem, 'password');
        break;
      case 'confirm':
        const password = document.getElementById('password');
        checkAndSend(checkPassConf(nodeElem, password), nodeElem, 'confirm');
        break;
      case 'rodo':
        checkAndSend(checkRodo(nodeElem), nodeElem, 'rodo');
        break;
      default:
        return;
    }
  });

  sendByFetch(configForm);
};

form.addEventListener('submit', sendForm);
