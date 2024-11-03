const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
    const trimmedValue = input.value.trim();
    output.textContent = trimmedValue.length > 0 ? trimmedValue : 'Anonymous';
});
