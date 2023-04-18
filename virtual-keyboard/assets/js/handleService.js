const handleService = (keyText, position, text, cursorAtEnd) => {
  const textarea = document.querySelector('.textarea');
  switch (keyText) {
    case 'Backspace':
      if (cursorAtEnd) {
        textarea.value = textarea.value.slice(0, -1);
      } else {
        const newText = `${text.slice(0, position - 1)}${text.slice(position, text.length)}`;
        textarea.value = newText;
        textarea.setSelectionRange(position - 1, position - 1);
      }
      break;
    case 'Tab':
      if (cursorAtEnd) {
        textarea.value += '    ';
      } else {
        const newText = `${text.slice(0, position)}    ${text.slice(position, text.length)}`;
        textarea.value = newText;
        textarea.setSelectionRange(position + 4, position + 4);
      }
      break;
    case 'Del':
      if (!cursorAtEnd) {
        const newText = `${text.slice(0, position)}${text.slice(position + 1, text.length)}`;
        textarea.value = newText;
        textarea.setSelectionRange(position, position);
      }
      break;
    case 'Enter':
      if (cursorAtEnd) {
        textarea.value += '\n';
      } else {
        const newText = `${text.slice(0, position)}\n${text.slice(position, text.length)}`;
        textarea.value = newText;
        textarea.setSelectionRange(position + 1, position + 1);
      }
      break;
    default:
  }
};

export default handleService;
