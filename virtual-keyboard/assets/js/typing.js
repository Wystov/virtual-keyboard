import handleService from './handleService.js';
import { serviceKeys } from './keys.js';

const typing = (event) => {
  const textarea = document.querySelector('.textarea');
  const { target } = event;
  const position = textarea.selectionStart;
  const text = textarea.value;
  const cursorAtEnd = text.length === position;
  if (target.classList.contains('keyboard__key')) {
    const keyText = target.textContent;
    const isService = serviceKeys.some((key) => key === keyText);
    if (isService) {
      handleService(keyText, position, text, cursorAtEnd);
    } else if (cursorAtEnd) {
      textarea.value += keyText;
    } else if (text.length > position) {
      const newText = text.slice(0, position) + keyText + text.slice(position, text.length);
      textarea.value = newText;
      textarea.setSelectionRange(position + 1, position + 1);
    }
  }
  textarea.focus();
};

export default typing;
