// Import stylesheets
import './style.css';
import { checkName } from './validationFn';

// Write Javascript code!
const form = document.getElementById('form');

const sendForm = e => {
  e.preventDefault();
  const children = e.target.children;

  Array.from(children).forEach(nodeElem => {
    const { id } = nodeElem;

    // console.log(type);

    switch (id) {
      case 'name':
        checkName(nodeElem);
        console.log('name');
        break;
      case 'email':
        console.log('email');
        break;
      case 'password':
        console.log('password');
        break;
      case 'confirm':
        console.log('confirm');
        break;
      case 'rodo':
        console.log('rodo');
        break;

      default:
        return;
    }
  });

  console;
  console.dir(e);
  console.dir(e.target.children);
  // const name = e.querySelector('type=[name]');
  // console.log(name);
};

form.addEventListener('submit', sendForm);
console.log(form);
