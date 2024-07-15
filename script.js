document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Replace the URL below with the URL of your Google Form
    const formUrl = 'https://docs.google.com/forms/d/1MzilLvoJGM1ZZm0OhYklQl8kmf2nBcwd29OLGQdJ3RQ/edit#responses';

    // Form data to send
    const formData = new FormData();
    formData.append('entry.YPqjbf', email); // Replace YOUR_ENTRY_ID with the entry ID for the email field in your form

    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(() => {
        alert('Sign-up successful!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
