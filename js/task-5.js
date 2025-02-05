function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const coloredItem = document.querySelector('body');
const changeButton = document.querySelector('.change-color');
const colorInfo = document.querySelector('span.color');

changeButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    coloredItem.style.backgroundColor = randomColor;
    colorInfo.textContent = randomColor;
});
