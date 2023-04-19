import { getTextAndPos } from './typing.js';
import { unusedKeys } from './keys.js';
import settings from './settings.js';
import {
  changeLanguage, capsCheck, shiftPress, capsSwitch,
} from './createBody.js';

const keyDown = (event) => {
  const { type, target } = event;
  if (event.repeat) return;
  const code = type === 'keydown' ? event.code : target.classList[1];
  if (!code) return;
  const isUnused = unusedKeys.some((key) => key === code);
  if (isUnused) return;
  const el = document.querySelector(`.${code}`);
  const capsKey = document.querySelector('.CapsLock');
  if (event.ctrlKey && event.altKey) {
    changeLanguage();
  } else if (code === 'CapsLock') {
    capsKey.classList.toggle('keyboard__key--active');
    settings.activeCaps = !settings.activeCaps;
    if (settings.activeShift && settings.activeCaps) {
      capsSwitch('toLowerCase');
    } else if (settings.activeShift && !settings.activeCaps) {
      capsSwitch('toUpperCase');
    } else {
      capsCheck();
    }
  } else if ((code === 'ShiftLeft' && !settings.activeShift)
    || (code === 'ShiftRight' && !settings.activeShift)) {
    el.classList.add('keyboard__key--active');
    settings.shift = 'shift';
    settings.activeShift = true;
    shiftPress();
    if (settings.activeCaps) capsSwitch('toLowerCase');
  } else {
    el.classList.add('keyboard__key--active');
    const keyValue = el.textContent;
    getTextAndPos(event, keyValue);
  }
};

const keyUp = (event) => {
  const code = event.type === 'keyup' ? event.code : event.target.classList[1];
  if (!code) return;
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    settings.shift = 'normal';
    settings.activeShift = false;
    shiftPress();
    if (settings.activeCaps) capsSwitch('toUpperCase');
  } else if (code === 'CapsLock') return;
  const isUnused = unusedKeys.some((key) => key === code);
  if (isUnused) return;
  const el = document.querySelector(`.${code}`);
  el.classList.remove('keyboard__key--active');
};

export { keyUp, keyDown };
