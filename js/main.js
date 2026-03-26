const themeToggleBtn = document.querySelector('.name__btn');

function setTheme(theme) {
    const htmlElement = document.documentElement;
    
    if (theme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        htmlElement.removeAttribute('data-theme');
    }
}

function toggleTheme() {
    const htmlElement = document.documentElement;
    const isDark = htmlElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    setTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; //проверяем какая тема включена в системе
    if (prefersDark) {
        setTheme('dark');
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}
