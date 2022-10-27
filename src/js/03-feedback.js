import * as throttle from 'lodash.throttle';

// const getEl = elemetn => document.querySelector(elemetn);
// const form = getEl('.feedback-form');
// const getEl = elemetn => document.querySelector(elemetn);
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', event => {
  console.log('object');
  event.preventDefault();
  console.log(event);
  const {
    elements: { email, message },
  } = event.curentTarget;
  console.log('1', email);
  console.log('2', message);
});
// console.log('form ', form);
console.log('form ', form.elements[0]);
