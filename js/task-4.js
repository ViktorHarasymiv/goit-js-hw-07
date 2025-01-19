const signIn = document.querySelector('.login-form');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const validEmail = document.querySelector('.email');
const validPass = document.querySelector('.password');

const reset = document.querySelector('.reset');

signIn.addEventListener("submit", handleSubmit);

emailInput.addEventListener("focus", () => {
    emailInput.classList.add('is-valid');
    validEmail.innerHTML = "";
  });

emailInput.addEventListener("blur", () => {
    emailInput.classList.remove('is-valid')
  });

passwordInput.addEventListener("focus", () => {
    passwordInput.classList.add('is-valid');
    validPass.innerHTML = "";
  });

passwordInput.addEventListener("blur", () => {
    passwordInput.classList.remove('is-valid')
  });


function handleSubmit(event) {

    event.preventDefault();

    const form = event.target;
    
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    const formState = {
      email: email,
      password: password
    }

    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    }

    console.log(formState);

    form.reset();

}