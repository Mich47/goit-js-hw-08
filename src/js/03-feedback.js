import * as throttle from 'lodash.throttle';

const getEl = elemetn => document.querySelector(elemetn);
const formRef = getEl('.feedback-form');
const ref = {
  email: getEl('input[name="email"]'),
  message: getEl('textarea[name="message"]'),
};

console.log(ref.form);
console.log(ref.email);
console.log(ref.message);

const feedbackFormData = { email: '', message: '' };

formRef.addEventListener('input', event => {
  console.log(event.target);
  if ('INPUT' === event.target.nodeName) {
    feedbackFormData.email = event.target.value;
  }
  if ('TEXTAREA' === event.target.nodeName) {
    feedbackFormData.message = event.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormData));
});

formRef.addEventListener('submit', event => {
  console.log('object');
  event.preventDefault();
  console.log(event);
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log('1', email);
  console.log('2', message);
});
