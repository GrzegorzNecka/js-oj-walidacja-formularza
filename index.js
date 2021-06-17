// Import stylesheets
import './style.css';

// Write Javascript code!
const form = document.getElementById('form');

const sendForm = e => {
  e.preventDefault();
  const children = e.target.children;

  Array.from(children).forEach(e => {
    const { id } = e;

    // console.log(type);

    switch (id) {
      case 'name':
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
