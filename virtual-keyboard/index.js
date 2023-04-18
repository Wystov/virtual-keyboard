import { createBody, changeLanguage } from './assets/js/createBody.js';
import { keyUp, keyDown } from './assets/js/phys-keyboard.js';

createBody();

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey) {
    changeLanguage();
  } else {
    keyDown(event);
  }
});
document.addEventListener('keyup', (event) => keyUp(event));
