const errorMsg = {
  name: `
  pole name:
    - musi mieć co najmniej dwa znaki oraz nie może zawierać cyfr i znaków specjalnych
  `,
  email: `
   pole email:
    - musi zawierać małpę “@” 
    - musi zawierać domenę 
  `,
  password: `
   pole password:
    - musi mieć co najmniej 8 znaków
    - musi zawierać jeden znak pisany z dużej litery
    - musi zawierać co najmniej jedną liczbę
    - musi zawierać co najmniej jeden znak specjalny
  `,
  confirm: `
  pole confirm to pole musi zawierać taką samą zawartość co password
  `,
  rodo: `
  pole rodo:
    - musi być zaznaczone
  `
};

export default errorMsg;
