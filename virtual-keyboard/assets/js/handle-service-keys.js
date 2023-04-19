const handleService = (keyCode, position, text, cursorAtEnd) => {
  const textarea = document.querySelector('.textarea');

  const action = (pos, input) => {
    textarea.value = input;
    textarea.setSelectionRange(pos, pos);
  };

  switch (keyCode) {
    case 'Backspace':
      if (cursorAtEnd) {
        textarea.value = textarea.value.slice(0, -1);
      } else {
        const newText = `${text.slice(0, position - 1)}${text.slice(position, text.length)}`;
        action(position - 1, newText);
      }
      break;
    case 'Tab':
      if (cursorAtEnd) {
        textarea.value += '    ';
      } else {
        const newText = `${text.slice(0, position)}    ${text.slice(position, text.length)}`;
        action(position + 4, newText);
      }
      break;
    case 'Delete':
      if (!cursorAtEnd) {
        const newText = `${text.slice(0, position)}${text.slice(position + 1, text.length)}`;
        action(position, newText);
      }
      break;
    case 'Enter':
      if (cursorAtEnd) {
        textarea.value += '\n';
      } else {
        const newText = `${text.slice(0, position)}\n${text.slice(position, text.length)}`;
        action(position + 1, newText);
      }
      break;
    case 'CapsLock':
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'ControlRight':
    case 'AltRight':
    case 'AltLeft':
    case 'MetaLeft':
    case 'ControlLeft':
      break;
    default:
  }
};

export default handleService;
