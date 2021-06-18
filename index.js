// Import stylesheets
import './style.css';
import {
  checkName,
  checkEmail,
  checkPass,
  checkPassConf
} from './validationFn';

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
        console.log('name', checkName(nodeElem));

        // if (!checkName(nodeElem)) {
        //   console.log(
        //     'pole name musi mieć co najmniej dwa znaki oraz nie może zawierać cyfr i znaków specjalnych '
        //   );
        // }

        break;
      case 'email':
        console.log(
          'email',

          checkEmail(nodeElem),
          `
            - musi zawierać małpę “@” 
            - musi zawierać domenę 
          `
        );

        break;
      case 'password':
        console.log(
          checkPass(nodeElem),
          'password',
          `
            - musi mieć co najmniej 8 znaków
            - musi zawierać jeden znak pisany z dużej litery
            - musi zawierać co najmniej jedną liczbę
            - musi zawierać co najmniej jeden znak specjalny
          `
        );
        break;
      case 'confirm':
        const passwordElem = document.getElementById('password');

        checkPassConf(nodeElem, passwordElem);

        // checkPassConf(nodeElem, nodeElem)
        // console.log(
        //   'confirm',
        //   `
        //     - musi zawierać taką samą zawartość co password
        //  `
        // );
        break;
      case 'rodo':
        // console.log('rodo');
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
