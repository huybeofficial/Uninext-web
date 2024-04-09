const scriptURL = 'https://script.google.com/macros/s/AKfycby29WNjylegYedy6dlBDp546CVtJZ5_BdjCTDiocTqqH2xo304Ek6zLzMqX65qUciD6/exec'
const form = document.forms['submit-uninext']

const alertWarning = document.getElementById('alert-warning');
const alertSuccess = document.getElementById('alert-success');

const errorForm = document.getElementById('error-form');

const btnSubmit = document.getElementById('btn-submit');
const successSubmit = document.getElementById('success-submit');


const submitText = document.getElementById('submit-text');
const submitSpinner = document.getElementById('submit-spinner');

// Validate
const is_email = (email = "") => {
  // eslint-disable-next-line
  const reg = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}
const is_number = (object) => {
  return !isNaN(Number(object.trim()));
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const phoneField = form.elements['Phone'];
  const emailField = form.elements['Email'];

  if (!phoneField.value || !emailField.value) {
    alertWarning.style.display = 'block';

    return alertWarning.innerText = 'Vui lòng nhập số điện thoại và Email để chúng tôi có thể liên hệ tới bạn!'
  }
  if (phoneField.value.length > 15) {
    alertWarning.style.display = 'block';
    return alertWarning.innerText = 'Vui lòng nhập đúng số điện thoại!'

  }
  if (!is_email(emailField.value)) {
    alertWarning.style.display = 'block';
    return alertWarning.innerText = 'Vui lòng nhập đúng email!'
  }
  submitText.style.display = 'none';
  submitSpinner.style.display = 'block';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response)
      submitText.style.display = 'block';
      submitSpinner.style.display = 'none';
      btnSubmit.style.display = 'none';

      alertWarning.style.display = 'none';
      alertSuccess.style.display = 'block';
      return form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message)
      submitText.style.display = 'block';
      errorForm.style.display = 'block';
    })
})