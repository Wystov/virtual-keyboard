const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'RSS Virtual Keyboard';
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
const description = document.createElement('p');
description.classList.add('description');
description.textContent = 'Keyboard was created in windows OS';
const language = document.createElement('p');
language.classList.add('language');
language.textContent = 'For language switch use left SHIFT + ALT';

wrapper.append(title, textarea, keyboard, description, language);
document.body.append(wrapper);

const keys = {
  eng: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  ru: [],
};

keys.eng.forEach((row, i) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.classList.add('keyboard__row', `keyboard__row--${i + 1}`);
  row.forEach((key) => {
    const keyBoardKey = document.createElement('div');
    keyBoardKey.classList.add('keyboard__key', `keyboard__key--${key}`);
    keyBoardKey.textContent = key;
    keyboardRow.append(keyBoardKey);
  });
  keyboard.append(keyboardRow);
});
