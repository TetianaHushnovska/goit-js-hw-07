const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const email = formElement.email.value.trim();
    const password = formElement.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email,
        password: password
    };

    console.log(formData);
    event.currentTarget.reset();
};