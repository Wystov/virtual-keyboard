import { keys } from './keys.js';
import { getTextAndPos } from './typing.js';

const createBody = () => {
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

  keys.eng.forEach((row, i) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row', `keyboard__row--${i + 1}`);
    row.forEach((key, j) => {
      const code = keys.code[i][j];
      const keyBoardKey = document.createElement('div');
      keyBoardKey.classList.add('keyboard__key', code);
      keyBoardKey.textContent = key;
      keyboardRow.append(keyBoardKey);
    });
    keyboard.append(keyboardRow);
  });

  document.querySelector('.Space').textContent = ' ';

  document.addEventListener('keydown', (event) => event.preventDefault());
  keyboard.addEventListener('mousedown', (event) => event.preventDefault());
  keyboard.addEventListener('click', (event) => getTextAndPos(event));
};

export default createBody;
