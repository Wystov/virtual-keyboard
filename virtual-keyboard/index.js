import { createBody, capsCheck } from './assets/js/createBody.js';
import { keyUp, keyDown } from './assets/js/phys-keyboard.js';

createBody();

const capsKey = document.querySelector('.CapsLock');

capsKey.addEventListener('click', () => {
  capsKey.classList.toggle('keyboard__key--active');
  capsCheck();
});

document.addEventListener('keydown', (event) => keyDown(event));

document.addEventListener('keyup', (event) => keyUp(event));
