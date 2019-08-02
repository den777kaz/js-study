const sendForm = (ourForm) => {

    const errorMessage = 'Something was wrong',
        loadMessage = 'Loading...',
        successMessage = 'thank you! We will contact you shortly!';

    const statusMessage = document.createElement('div');
    statusMessage.textContent = '';
    statusMessage.style.cssText = 'font-size: 2rem;';

    ourForm.addEventListener('submit', (event) => {
        event.preventDefault();
        statusMessage.style.cssText = 'color: white;';
        ourForm.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(ourForm);

        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200!');
                }
                //console.log(response);
                statusMessage.textContent = successMessage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });

        ourForm.reset();
    });



    const postData = (body) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify(body)
        });
    };

};
export default sendForm;