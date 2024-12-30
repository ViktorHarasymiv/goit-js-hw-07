const signIn = document.querySelector('.login-form');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const validEmail = document.querySelector('.email');
const validPass = document.querySelector('.password');

const reset = document.querySelector('.reset');

signIn.addEventListener("submit", handleSubmit);
reset.addEventListener("click", handleResetSubmit);

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
    
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (login === "" && password === "") {
        validEmail.innerHTML = "Please enter email";
        validPass.innerHTML = "Please enter password";

        return;
      }

    if (login === "") {
        validEmail.innerHTML = "Please enter email";
        return;
    }

    if (login !== "") {
        validEmail.innerHTML = "";
    }

    if (password === "") {
        validPass.innerHTML = "Please enter password";
        return;
    }

    if (password !== "") {
        validPass.innerHTML = "";
    }

    alert(`
    Login : ${login}
    Password : ${password}`
    );

    validEmail.innerHTML = "";
    validPass.innerHTML = "";
    form.reset();
}
function handleResetSubmit() {
    validEmail.innerHTML = "";
    validPass.innerHTML = "";
}
