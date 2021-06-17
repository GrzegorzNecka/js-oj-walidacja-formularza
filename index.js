// Import stylesheets
import './style.css';

// Write Javascript code!
const form = document.getElementById('form');

const sendForm = e => {
  e.preventDefault();
  const children = e.target.children;

  console
  console.dir(e);
  console.dir(e.target.children);
  // const name = e.querySelector('type=[name]');
  // console.log(name);
};

form.addEventListener('submit', sendForm);
console.log(form);
