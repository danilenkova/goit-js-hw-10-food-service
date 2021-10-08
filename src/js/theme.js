const refs = {
    themeToggle: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
    Theme: {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
    },
    defaultTheme() {
        if (!localStorage.getItem('Theme')) {
            localStorage.setItem('Theme', this.Theme.LIGHT);
            this.body.classList = localStorage.getItem('Theme');
        } else if (localStorage.getItem('Theme') === 'dark-theme') {
            document.querySelector('#theme-switch-toggle').checked = true;
            this.body.classList = localStorage.getItem('Theme');
        }
    },
}

refs.themeToggle.addEventListener('change', themeChange);

refs.defaultTheme();
  
function themeChange(event) {
    if (refs.themeToggle.checked === true) {
        refs.body.classList.replace(refs.Theme.LIGHT, refs.Theme.DARK);
        localStorage.setItem('Theme', refs.Theme.DARK);
    } else {
        refs.body.classList.replace(refs.Theme.DARK, refs.Theme.LIGHT);
        localStorage.setItem('Theme', refs.Theme.LIGHT);
    }
}
