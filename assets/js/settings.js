class Settings {
  constructor() {
    this.lang = localStorage.getItem('lang') || 'eng';
    this.shift = 'normal';
    this.activeShift = false;
    this.activeCaps = false;
  }
}

const state = new Settings();

export default state;
