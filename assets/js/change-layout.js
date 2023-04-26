import { keys } from './keys.js';
import state from './settings.js';

const changeKeys = (method) => {
  const layout = keys[state.lang][state.shift];
  layout.forEach((row, i) => {
    const keyboardRow = document.querySelector(`.keyboard__row--${i + 1}`).children;
    row.forEach((key, j) => {
      if (!method) {
        keyboardRow[j].textContent = key;
      } else {
        const letters = /^[a-zA-Zа-яА-ЯёЁ]$/;
        if (letters.test(key)) {
          keyboardRow[j].textContent = key[method]();
        }
      }
    });
  });
};

const checkCaps = () => {
  if (!state.activeCaps) {
    changeKeys('toLowerCase');
  } else {
    changeKeys('toUpperCase');
  }
};

const changeLanguage = () => {
  state.lang = state.lang === 'eng' ? 'ru' : 'eng';
  changeKeys();
  checkCaps();
  localStorage.setItem('lang', state.lang);
};

export { changeKeys, checkCaps, changeLanguage };
