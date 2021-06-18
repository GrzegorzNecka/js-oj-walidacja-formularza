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

const sendForm = e => {
  e.preventDefault();
  const children = e.target.children;
  resetValidElem();
  Array.from(children).forEach(nodeElem => {
    const { id } = nodeElem;

    // console.log(type);

    switch (id) {
      case 'name':
        validElem(checkName(nodeElem), 'name');

        break;
      case 'email':
        validElem(checkEmail(nodeElem), 'email');

        break;
      case 'password':
        validElem(checkPass(nodeElem), 'password');

        break;
      case 'confirm':
        const passwordElem = document.getElementById('password');
        validElem(checkPassConf(nodeElem, passwordElem), 'confirm');

        break;
      case 'rodo':
        validElem(checkRodo(nodeElem), 'rodo');
        break;

      default:
        return;
    }
  });
};

form.addEventListener('submit', sendForm);
