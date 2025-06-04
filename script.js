class CustError extends Error {
    constructor(mess) {
        super(mess);
        this.name = 'custError';
    }
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
    try {
        e.preventDefault();
        let output = document.querySelector('output');
        let firstNum = document.querySelector('#first-num').value;
        let secondNum = document.querySelector('#second-num').value;
        let operator = document.querySelector('#operator').value;

        if (firstNum === "" || secondNum === "") {
            throw new CustError("Both inputs must be filled!");
        }

        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (err) {
        console.error(err);
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

function assertFunc() {
    console.assert()
}