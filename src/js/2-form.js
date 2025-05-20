const getFormData = () => {
  const localFormData = localStorage.getItem('feedback-form-state');
  return localFormData ? JSON.parse(localFormData) : { email: '', message: '' };
};

let formData = getFormData();

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);

function handleInput(event) {
  const target = event.target;
  const name = target.getAttribute('name');
  formData[name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.length || !formData.message.length)
    alert('Fill please all fields');

  console.log(formData);
  localStorage.clear();
  formData = getFormData();
  form.reset();
});

