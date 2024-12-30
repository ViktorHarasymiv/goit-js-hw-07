const input = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output');

input.addEventListener("input", (event) => {
    outPut.textContent = event.currentTarget.value;
});
