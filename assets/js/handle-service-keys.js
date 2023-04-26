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
      } else if (position === 0 && textarea.value) {
        break;
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
    case 'ArrowLeft':
      if (position) {
        textarea.setSelectionRange(position - 1, position - 1);
      }
      break;
    case 'ArrowRight':
      textarea.setSelectionRange(position + 1, position + 1);
      break;
    case 'ArrowDown': {
      const textareaWidth = parseInt(getComputedStyle(textarea).width, 10) - 30;
      const lettersInRow = Math.round(textareaWidth / 15.78);
      const rowDown = position + lettersInRow;
      textarea.setSelectionRange(rowDown, rowDown);
      break;
    }
    case 'ArrowUp': {
      const textareaWidth = parseInt(getComputedStyle(textarea).width, 10) - 30;
      const lettersInRow = Math.round(textareaWidth / 15.78);
      const rowUp = lettersInRow > position ? 0 : position - lettersInRow;
      textarea.setSelectionRange(rowUp, rowUp);
      break;
    }
    default:
  }
};

export default handleService;
