import handleService from './handleService.js';
import { serviceKeys } from './keys.js';

const doInput = (keyText, position, cursorAtEnd, text, keyCode) => {
  const textarea = document.querySelector('.textarea');
  const isService = serviceKeys.some((key) => key === keyCode);
  if (isService) {
    handleService(keyCode, position, text, cursorAtEnd);
  } else if (cursorAtEnd) {
    textarea.value += keyText;
  } else if (text.length > position) {
    const newText = text.slice(0, position) + keyText + text.slice(position, text.length);
    textarea.value = newText;
    textarea.setSelectionRange(position + 1, position + 1);
  }
  textarea.focus();
};

const typing = (event, position, cursorAtEnd, text, keyCode) => {
  const { target } = event;
  if (target.classList.contains('keyboard__key')) {
    const keyText = target.textContent;
    doInput(keyText, position, cursorAtEnd, text, keyCode);
  }
};

const getTextAndPos = (event) => {
  const textarea = document.querySelector('.textarea');
  const position = textarea.selectionStart;
  const text = textarea.value;
  const cursorAtEnd = text.length === position;
  if (event.type === 'click') {
    const keyCode = event.target.classList[1];
    typing(event, position, cursorAtEnd, text, keyCode);
  }
  if (event.type === 'keydown') {
    const keyText = event.key;
    const keyCode = event.code;
    doInput(keyText, position, cursorAtEnd, text, keyCode);
  }
};

export { typing, doInput, getTextAndPos };
