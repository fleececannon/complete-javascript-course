import { getAPIData } from './getAPIData';

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  // let formText = document.getElementById('name').value
  const data = Client.getAPIData();

  console.log('::: Form Submitted :::');
  console.log(data);
  // fetch('http://localhost:8080/test')
  // .then(res => res.json())
  // .then(function(res) {
  //     // document.getElementById('results').innerHTML = res.message
  //     console.log(data);
  // })
}

export { handleSubmit };
