import createBody from './assets/js/create-body.js';
import { keyUp, keyDown } from './assets/js/handle-keypress.js';

createBody();

const capsKey = document.querySelector('.CapsLock');
const leftShiftKey = document.querySelector('.ShiftLeft');
const rightShiftKey = document.querySelector('.ShiftRight');

capsKey.addEventListener('click', (event) => keyDown(event));
leftShiftKey.addEventListener('mousedown', (event) => keyDown(event));
leftShiftKey.addEventListener('mouseup', (event) => keyUp(event));
rightShiftKey.addEventListener('mousedown', (event) => keyDown(event));
rightShiftKey.addEventListener('mouseup', (event) => keyUp(event));
document.addEventListener('keydown', (event) => keyDown(event));
document.addEventListener('keyup', (event) => keyUp(event));
