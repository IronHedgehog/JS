const inputText = prompt('Введите слово');
let message;
if (inputText === null || inputText.trim() === '') {
    alert('invalid value');
} else {
    if (inputText.length % 2 === 0) {
        message = inputText.slice(inputText.length / 2 - 1, inputText.length / 2 + 1);
        alert(message);
    } else {
        message = inputText.slice(
    (inputText.length - 1) / 2, 
    (inputText.length - 1) / 2 + 1
    );
        alert(message);
    } 
}


