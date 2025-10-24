class ThemeSwitcher {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.themeIcon = this.themeToggle.querySelector('.theme-toggle__icon');
    this.currentTheme = localStorage.getItem('theme') || 'light'; // eslint-disable-line no-undef

    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);

    this.themeToggle.addEventListener('click', () => {
      this.toggleTheme();
    });
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(this.currentTheme);
    this.saveTheme();
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'dark') {
      this.themeIcon.textContent = '☀️';
    } else {
      this.themeIcon.textContent = '🌙';
    }
  }

  saveTheme() {
    localStorage.setItem('theme', this.currentTheme); // eslint-disable-line no-undef
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});