import * as throttle from 'lodash.throttle';

const getEl = elemetn => document.querySelector(elemetn);
const form = getEl('.feedback-form');
console.log('form ', form);
console.log('form ', form.elements[0]);
