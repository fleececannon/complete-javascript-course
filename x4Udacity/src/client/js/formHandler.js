function handleSubmit(event) {
  event.preventDefault();


  let formText = document
    .getElementById('name')
    .value.replace(/^(https?:\/\/)/, '');

  if(Client.isURL(formText)) {

        console.log('::: Form Submitted !!!:::');

        const postData = async (url = '', data = {}) => {
            console.log('Analyzing:', data);
            const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            });
            try {
            const sentimentData = await response.json();

            return sentimentData;
            } catch (error) {
            console.log('error', error);
            }
        };

        postData('http://localhost:8081/api', { url: formText }).then(function (data) {
            Client.updateUI(data);
        });

    } else {
        alert('Please enter a valid URL');
    }

}

export { handleSubmit };
