const inputAmout = document.getElementById('changeAmout');
const incAmout = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const boxes = document.querySelector('#boxes');

// L I S T E N E R  E V E N T S

incAmout.addEventListener("click", () => {
  const amount = parseInt(inputAmout.value);
console.log(amount);

  if(amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputAmout.value = 0;
  }
  else {
    alert('Введіть значення від 1 до 100')
}
});

destroyBtn.addEventListener("click", () => {
  inputAmout.value = 0;
  boxes.innerHTML = '';
});

//  F U N C T I O N

function createBoxes(amount) {
    boxes.innerHTML = '';
    let fragment = document.createDocumentFragment();
    
    const increment = 10;
    let width = 30;
    let height = 30;

  for(let i = 0; i < amount; i++) {
    const boxItem = document.createElement("div");

      boxItem.style.width = `${width}px`;
      boxItem.style.height = `${height}px`;

      boxItem.style.backgroundColor = getRandomHexColor();

      fragment.appendChild(boxItem); 

      width += increment; 
      height += increment;
    }

    boxes.appendChild(fragment);
} 


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}