const input = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output');

input.addEventListener("input", (event) => {
    const formTextValue = event.currentTarget.value;

   if (formTextValue.includes(" ")) {
    return outPut.textContent = "Anonymous";
   }
   else 

    return outPut.textContent = formTextValue.trim();
});