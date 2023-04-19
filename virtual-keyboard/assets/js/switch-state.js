import state from './settings.js';
import {
  checkCaps, changeKeys,
} from './change-layout.js';

const switchCaps = (capsKey) => {
  capsKey.classList.toggle('keyboard__key--active');
  state.activeCaps = !state.activeCaps;
  if (state.activeShift) {
    const method = state.activeCaps ? 'toLowerCase' : 'toUpperCase';
    changeKeys(method);
  } else {
    checkCaps();
  }
};

const switchShift = (shiftKey) => {
  shiftKey.classList.add('keyboard__key--active');
  state.shift = 'shift';
  state.activeShift = true;
  const method = state.activeCaps ? 'toLowerCase' : null;
  changeKeys();
  if (state.activeCaps) changeKeys(method);
};

export { switchCaps, switchShift };
