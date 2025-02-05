const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);

textInput.addEventListener('input', () => {
    const inputValue = textInput.value.trim();
    textOutput.textContent = inputValue !== '' ? inputValue : 'Anonymous';
});