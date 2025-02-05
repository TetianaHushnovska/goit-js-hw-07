const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function addBoxes(amount) {
    boxes.innerHTML = '';
    const element = document.createDocumentFragment();

    for (let i = 0; i <= amount; i++){
        const box = document.createElement('div');
        const size = 30 + i * 10;

        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.style.padding = '32px';
        boxes.style.gap = '44px';

        element.appendChild(box);
    };

    boxes.appendChild(element);
}

    function destroyBoxes() {
        boxes.innerHTML = '';
        boxes.style.padding = '0';
        boxes.style.gap = '0';
}

createBtn.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount >= 1 && amount <= 100) {
        addBoxes(amount);
        input.value = '';
    }
});

destroyBtn.addEventListener('click', destroyBoxes);