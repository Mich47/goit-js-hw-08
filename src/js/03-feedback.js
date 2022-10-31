import * as throttle from 'lodash.throttle';

const ref = {
  formRef: document.querySelector('.feedback-form'),
  emailRef: document.querySelector('input[name="email"]'),
  messageRef: document.querySelector('textarea[name="message"]'),
};

ref.emailRef.setAttribute('required', true);
ref.messageRef.setAttribute('required', true);
ref.messageRef.setAttribute('minlength', 3);

class FeedbackForm {
  constructor({ formRef, emailRef, messageRef }) {
    this.formRef = formRef;
    this.emailRef = emailRef;
    this.messageRef = messageRef;
  }

  LS_KEY = 'feedback-form-state';

  init() {
    this.setFormInputFromLS(this.emailRef, this.messageRef);
    this.addListeners(this.formRef);
  }

  addListeners(formRef) {
    formRef.addEventListener(
      'input',
      throttle(this.saveFormDataToLS.bind(this), 500)
    );

    formRef.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, message },
    } = event.currentTarget;

    const formData = this.createObj(email.value, message.value);
    console.log('FormDataObject =>', formData);

    this.formRef.reset();
    this.clearLS();
  }

  setFormInputFromLS(emailRef, messageRef) {
    const localData = this.readFromLS();

    emailRef.value = localData.email;
    messageRef.value = localData.message;
  }

  saveFormDataToLS(event) {
    const localData = this.readFromLS();

    if ('INPUT' === event.target.nodeName) {
      localData.email = event.target.value;
    }

    if ('TEXTAREA' === event.target.nodeName) {
      localData.message = event.target.value;
    }

    this.saveToLS(localData);
  }

  readFromLS() {
    try {
      const localData = JSON.parse(localStorage.getItem(this.LS_KEY));
      if (!localData) {
        return this.createObj('', '');
      }
      return localData;
    } catch (error) {
      console.log('Error ', error);
      return this.createObj('', '');
    }
  }

  clearLS() {
    this.saveToLS(null);
  }

  saveToLS(value) {
    localStorage.setItem(this.LS_KEY, JSON.stringify(value));
  }

  createObj(email, message) {
    return {
      email: email,
      message: message,
    };
  }
}

new FeedbackForm(ref).init();
