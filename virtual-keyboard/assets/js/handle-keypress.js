import { getTextAndPos } from './typing.js';
import { unusedKeys } from './keys.js';
import state from './settings.js';
import { switchCaps, switchShift } from './switch-state.js';
import {
  changeLanguage, changeKeys,
} from './change-layout.js';

const keyDown = (event) => {
  const { type, target } = event;
  const code = type === 'keydown' ? event.code : target.classList[1];
  if (event.repeat || !code || unusedKeys.includes(code)) return;
  const key = document.querySelector(`.${code}`);
  if (event.ctrlKey && event.altKey) {
    changeLanguage();
  } else if (code === 'CapsLock') {
    switchCaps(key);
  } else if (code === 'ShiftLeft' || code === 'ShiftRight') {
    switchShift(key);
  } else {
    key.classList.add('keyboard__key--active');
    getTextAndPos(event, key.textContent);
  }
};

const keyUp = (event) => {
  const code = event.type === 'keyup' ? event.code : event.target.classList[1];
  if (!code || unusedKeys.includes(code)) return;
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    state.shift = 'normal';
    state.activeShift = false;
    changeKeys();
    if (state.activeCaps) changeKeys('toUpperCase');
  } else if (code === 'CapsLock') return;
  const el = document.querySelector(`.${code}`);
  el.classList.remove('keyboard__key--active');
};

export { keyUp, keyDown };
