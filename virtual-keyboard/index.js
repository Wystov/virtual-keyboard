import { createBody, changeLanguage, capsCheck } from './assets/js/createBody.js';
import { keyUp, keyDown } from './assets/js/phys-keyboard.js';

createBody();

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey) {
    changeLanguage();
  } else if (event.code === 'CapsLock') {
    capsCheck();
  } else {
    keyDown(event);
  }
});

const capsKey = document.querySelector('.CapsLock');
capsKey.addEventListener('click', capsCheck);
document.addEventListener('keyup', (event) => keyUp(event));
