import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

const dataResult = {};
initForm();

//

function onSubmit(event) {
  event.preventDefault();

  const { email, message } = event.target.elements;

  if (!email.value || !message.value) {
    return alert('Будь ласка заповніть всі поля!');
  }

  form.reset();
  localStorage.clear();
  console.log(dataResult);
}

//

function onInput(event) {
  dataResult[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(dataResult));
}

//

function initForm() {
  let initValues = localStorage.getItem('feedback-form-state');

  if (initValues) {
    initValues = JSON.parse(initValues);

    Object.entries(initValues).forEach(([name, value]) => {
      dataResult[name] = value;
      form.elements[name].value = value;
    });
  }
}
