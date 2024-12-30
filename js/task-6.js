const changeAmout = document.querySelector('.changeAmout');
const incAmout = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const boxes = document.querySelector('#boxes');
const boxItems = '<div></div>';

const maxValue = 10;
const minValue = 0;

let width = 30; 
let height = 30; 
const increment = 10;

// L I S T E N E R  E V E N T S

changeAmout.addEventListener("input", (event) => {
  let newValue = event.target.value;

  if(newValue > maxValue) {
    changeAmout.value = '';
    alert('Введено максимальну допустиму кількість')
    return;
  }
  if(newValue < minValue) {
    changeAmout.value = '';
    alert('Введено відємне значення')
    return;
  }

  return newValue;
}
);

incAmout.addEventListener("click", handleSubmit);

destroyBtn.addEventListener("click", () => {
  while (boxes.firstChild) {
     boxes.removeChild(boxes.firstChild);
  }
  width = 30;
  height = 30;
});


//  F U N C T I O N

function handleSubmit() {
  
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
    width = 30;
    height = 30;
}
  for(let i = 0; i < changeAmout.value; i++) {

    const boxItem = document.createElement("div");
    boxItem.classList.add('box-element');

    
    boxItem.style.backgroundColor = getRandomHexColor();

  width += increment; 
  height += increment;

  boxItem.style.width = `${width}px`;
  boxItem.style.height = `${height}px`;

  
  boxes.append(boxItem);
} 
changeAmout.value = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}