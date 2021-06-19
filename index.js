import './style.css';
import {
  checkName,
  checkEmail,
  checkPass,
  checkPassConf,
  checkRodo,
  resetValidElem
} from './validationFn';
import { setFormState, stateForm, resetStateForm } from './setFormState';

const form = document.getElementById('form');
const errorOutput = document.getElementById('error-msg');

const sendForm = e => {
  e.preventDefault();

  const children = e.target.children;
  resetValidElem();
  resetStateForm();

  Array.from(children).forEach(nodeElem => {
    const { id } = nodeElem;

    switch (id) {
      case 'name':
        setFormState(checkName(nodeElem), nodeElem, 'name');
        break;
      case 'email':
        setFormState(checkEmail(nodeElem), nodeElem, 'email');
        break;
      case 'password':
        setFormState(checkPass(nodeElem), nodeElem, 'password');
        break;
      case 'confirm':
        const password = document.getElementById('password');
        setFormState(checkPassConf(nodeElem, password), nodeElem, 'confirm');
        break;
      case 'rodo':
        setFormState(checkRodo(nodeElem), nodeElem, 'rodo');
        break;
      default:
        return;
    }
  });

  const { inputState, inputVal } = stateForm;

  const checkedInputs = inputState.filter(input => input);

  if (inputState.length === checkedInputs.length) {
    const url = 'https://przeprogramowani.pl/projekt-walidacja';
    fetch(url, {});

    errorOutput.innerText = 'sukces';
  }
};

form.addEventListener('submit', sendForm);
