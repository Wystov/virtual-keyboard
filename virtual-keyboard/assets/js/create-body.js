import { keys } from './keys.js';
import { getTextAndPos } from './typing.js';
import state from './settings.js';

const createBody = () => {
  const createEl = (type, className, text) => {
    const el = document.createElement(type);
    el.classList.add(...className);
    if (text) el.textContent = text;
    return el;
  };

  const wrapper = createEl('div', ['wrapper']);
  const title = createEl('h1', ['title'], 'RSS Virtual Keyboard');
  const textarea = createEl('textarea', ['textarea']);
  const keyboard = createEl('div', ['keyboard']);
  const description = createEl('p', ['description'], 'Keyboard was created in windows OS');
  const language = createEl('p', ['language'], 'For language switch use left CTRL + ALT');
  wrapper.append(title, textarea, keyboard, description, language);
  document.body.append(wrapper);

  keys[state.lang][state.shift].forEach((row, i) => {
    const keyboardRow = createEl('div', ['keyboard__row', `keyboard__row--${i + 1}`]);
    row.forEach((key, j) => {
      const code = keys.code[i][j];
      const keyBoardKey = createEl('div', ['keyboard__key', code]);
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
