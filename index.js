import createBody from './assets/js/create-body.js';
import { keyUp, keyDown } from './assets/js/handle-keypress.js';
import { switchBacklight } from './assets/js/switch-state.js';

createBody();

const capsKey = document.querySelector('.CapsLock');
const leftShiftKey = document.querySelector('.ShiftLeft');
const backlight = document.querySelector('.Backlight');

capsKey.addEventListener('click', (event) => keyDown(event));
leftShiftKey.addEventListener('mousedown', (event) => keyDown(event));
leftShiftKey.addEventListener('mouseup', (event) => keyUp(event));
backlight.addEventListener('click', (event) => switchBacklight(event.target));
document.addEventListener('keydown', (event) => keyDown(event));
document.addEventListener('keyup', (event) => keyUp(event));
