import { getTextAndPos } from './typing.js';
import { unusedKeys } from './keys.js';
import state from './settings.js';
import { switchCaps, switchShift } from './switch-state.js';
import {
  changeLanguage, changeKeys,
} from './change-layout.js';

const keyDown = (event) => {
  const { type, target, repeat } = event;
  const code = type === 'keydown' ? event.code : target.classList[1];
  if ((repeat && event.shiftKey) || (event.repeat && code === 'CapsLock')
    || !code || unusedKeys.includes(code)) return;
  const key = document.querySelector(`.${code}`);
  if (event.ctrlKey && code === 'AltLeft') {
    key.classList.add('keyboard__key--active');
    changeLanguage();
  } else if (code === 'CapsLock') {
    switchCaps(key);
  } else if (code === 'ShiftLeft') {
    switchShift(key);
  } else {
    key.classList.add('keyboard__key--active');
    getTextAndPos(event, key.textContent);
  }
};

const keyUp = (event) => {
  const code = event.type === 'keyup' ? event.code : event.target.classList[1];
  if (!code || unusedKeys.includes(code)) return;
  if (!event.shiftKey && state.activeShift) {
    state.shift = 'normal';
    state.activeShift = false;
    changeKeys();
    if (state.activeCaps) changeKeys('toUpperCase');
  } else if (code === 'CapsLock') return;
  const el = document.querySelector(`.${code}`);
  el.classList.remove('keyboard__key--active');
};

export { keyUp, keyDown };
