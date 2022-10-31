import * as throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const ref = {
  emailRef: formRef.elements.email,
  messageRef: formRef.elements.message,
};

ref.emailRef.setAttribute('required', true);
ref.messageRef.setAttribute('required', true);
ref.messageRef.setAttribute('minlength', 3);

setFormInputFromLS(ref);

formRef.addEventListener('input', throttle(saveFormDataToLS, 500));

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  const formData = createObj(email.value, message.value);

  console.log('feedbackFormDataObj ', formData);
  formRef.reset();
  clearLS();
});

function setFormInputFromLS({ emailRef, messageRef }) {
  const localData = readFromLS();

  console.log('localData ', localData);
  if (!localData) {
    return;
  }
  emailRef.value = localData.email;
  messageRef.value = localData.message;
}

function saveFormDataToLS(event) {
  const localData = readFromLS();
  if ('INPUT' === event.target.nodeName) {
    localData.email = event.target.value;
  }

  if ('TEXTAREA' === event.target.nodeName) {
    localData.message = event.target.value;
  }
  saveToLS(localData);
}

function readFromLS() {
  try {
    const localData = JSON.parse(localStorage.getItem(LS_KEY));
    if (!localData) {
      return createObj('', '');
    }
    return localData;
  } catch (error) {
    console.log('Error ', error);
  }
}

function clearLS() {
  saveToLS(null);
}

function saveToLS(value) {
  localStorage.setItem(LS_KEY, JSON.stringify(value));
}

function createObj(email, message) {
  return {
    email: email,
    message: message,
  };
}
