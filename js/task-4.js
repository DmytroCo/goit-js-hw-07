
const form = document.querySelector('.login-form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
    
    event.preventDefault();
    const form = event.target;
    const userPassword = form.elements.password.value;
    const userEmail = form.elements.email.value;

    if (userPassword === '' || userEmail === '') {
        return alert('All form fields must be filled in'); 
    }
    const formData = {
        email: userEmail.trim(),
        password: userPassword.trim(),
    };

    console.log(formData); 
    form.reset(); 
};

