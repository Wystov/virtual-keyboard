const state = {
  lang: localStorage.getItem('lang') || 'eng',
  shift: 'normal',
  activeShift: false,
  activeCaps: false,
};

export default state;
