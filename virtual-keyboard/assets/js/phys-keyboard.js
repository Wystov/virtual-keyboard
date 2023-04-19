import { getTextAndPos } from './typing.js';
import { unusedKeys } from './keys.js';
import {
  changeLanguage, capsCheck, shiftPress, capsSwitch,
} from './createBody.js';
import settings from './settings.js';

const keyDown = (event) => {
  const { code } = event;
  const isUnused = unusedKeys.some((key) => key === code);
  if (isUnused) return;
  const el = document.querySelector(`.${code}`);
  const capsKey = document.querySelector('.CapsLock');
  if (event.ctrlKey && event.altKey) {
    changeLanguage();
  } else if (event.code === 'CapsLock') {
    capsKey.classList.toggle('keyboard__key--active');
    settings.activeCaps = !settings.activeCaps;
    if (settings.activeShift && settings.activeCaps) {
      capsSwitch('toLowerCase');
    } else if (settings.activeShift && !settings.activeCaps) {
      capsSwitch('toUpperCase');
    } else {
      capsCheck();
    }
  } else if (event.shiftKey && !settings.activeShift) {
    el.classList.add('keyboard__key--active');
    settings.shift = 'shift';
    settings.activeShift = true;
    shiftPress();
    if (settings.activeCaps) capsSwitch('toLowerCase');
  } else {
    el.classList.add('keyboard__key--active');
    getTextAndPos(event);
  }
};

const keyUp = (event) => {
  const { code } = event;
  if (code === 'ShiftLeft') {
    settings.shift = 'normal';
    settings.activeShift = false;
    shiftPress();
    if (settings.activeCaps) capsSwitch('toUpperCase');
  }
  if (code === 'CapsLock') return;
  const isUnused = unusedKeys.some((key) => key === code);
  if (isUnused) return;
  const el = document.querySelector(`.${code}`);

  el.classList.remove('keyboard__key--active');
};

export { keyUp, keyDown };
