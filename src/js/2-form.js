const refs = { form: document.querySelector('.feedback-form') };

const LSKEY = 'feedback-form-state';

let formData = { email: '', message: '' };

initForm();

refs.form.addEventListener('input', e => {
  formData.email = e.currentTarget.elements.email.value.trim();
  formData.message = e.currentTarget.elements.message.value.trim();
  putInLS(LSKEY, formData);
});

//* Cleaning on Submit
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(LSKEY);
  formData.email = formData.message = '';
  refs.form.reset();
});

//* Restore Form on Reload
function initForm() {
  formData = takeFromLS(LSKEY) || formData;
  refs.form.elements.email.value = formData.email;
  refs.form.elements.message.value = formData.message;
}

//* Data to Local Storage
function putInLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

//* Data from Local Storage
function takeFromLS(key) {
  const value = localStorage.getItem(key);
  try {
    const data = JSON.parse(value);
    return data;
  } catch {
    return value;
  }
}
