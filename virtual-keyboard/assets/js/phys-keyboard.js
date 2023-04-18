import { getTextAndPos } from './typing.js';
import { unusedKeys } from './keys.js';

const keyDown = (event) => {
  const { code } = event;
  const isUnused = unusedKeys.some((key) => key === code);
  if (isUnused) return;
  const el = document.querySelector(`.${code}`);
  el.classList.add('keyboard__key--active');
  getTextAndPos(event);
};

const keyUp = (event) => {
  const { code } = event;
  if (code === 'CapsLock') return;
  const isUnused = unusedKeys.some((key) => key === code);
  if (isUnused) return;
  const el = document.querySelector(`.${code}`);

  el.classList.remove('keyboard__key--active');
};

export { keyUp, keyDown };
