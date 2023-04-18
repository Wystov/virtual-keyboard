import createBody from './assets/js/createBody.js';
import { keyUp, keyDown } from './assets/js/phys-keyboard.js';

createBody();

document.addEventListener('keydown', (event) => keyDown(event));
document.addEventListener('keyup', (event) => keyUp(event));
