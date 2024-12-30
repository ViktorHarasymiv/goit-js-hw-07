const bodyTag = document.querySelector('body');
const spanContent = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');
const textBlock = document.querySelector('.style-bar');

const reset = document.querySelector('.reset');

spanContent.textContent = 'Here will be a random value for background color';
spanContent.style.cssText = 'text-decoration: underline';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonChange.addEventListener("click", handleClick);

reset.addEventListener("click", (event) => {
  spanContent.textContent = 'Here will be a random value for background color';
  bodyTag.style.backgroundColor = 'rgba(255, 255, 255, 1)';
})

function handleClick(event) {
  const changeColor = getRandomHexColor();
  
  spanContent.textContent = changeColor;
  bodyTag.style.backgroundColor = changeColor;
  bodyTag.style.backgroundColor = changeColor;
  textBlock.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
}

