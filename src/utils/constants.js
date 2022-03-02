export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const navList = [
  {
    name: 'Works',
    path: '/works',
  },
  {
    name: 'Testing',
    path: '/',
  },
  {
    name: 'Catalog',
    path: 'http://seed-catalog.com/',
  },
  {
    name: 'Searcher',
    path: '/searcher',
  },
  {
    name: 'Form',
    path: '/form-validation',
  },
  {
    name: 'Data Binding',
    path: '/data-binding',
  },
  /* {
    name: 'List Example',
    path: '/list-example',
  }, */
];

//REGEXP VALIDACIONES
export const REGEXP_ONLY_LETTERS= /[^a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]*/g;
export const REGEXP_ONLY_NUMBERS = /[^0-9]/g;
export const REGEXP_ONLY_LETTERS_NUMBERS = /[^a-zA-Z0-9ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]*/g;
export const REGEXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{4}))$/;
