const input = document.querySelector('#email');
const warnImg = document.querySelector('.warning-img');
const warnMessage = document.querySelector('.warningMessage');

const warningInput = () => {
    const email = input.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValid) {
        warnMessage.classList.add('invalid');
        warnImg.classList.add('invalid');
    } else if (!isValid) {
        warnMessage.classList.remove('invalid');
        warnImg.classList.remove('invalid');
    } 
};

document.addEventListener('input', warningInput);