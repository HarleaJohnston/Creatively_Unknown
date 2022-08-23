const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {

  e.preventDefault();
  console.log('I prevented you.');

  // search through all of the inputs on the form
  let inputs = Array.from(form.getElementsByTagName('input'));

  // create object with keys that match input names
  let data = {};

  inputs.forEach((input) => {
    if (input.getAttribute('type') !== 'submit')
    {
      data[input.getAttribute('name')] = input.value;
    }
  });

  // post this data to my API endpoint
  const endpoint = `http://localhost:3000/${form.getAttribute('action')}`;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  fetch(endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => {
    console.log('data: ', data);
  })
  .catch((err) => {
    console.log('Error when we tried to submit.');
  });
});