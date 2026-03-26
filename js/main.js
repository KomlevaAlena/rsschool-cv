const themeToggleBtn = document.querySelector('.name__btn');
console.log(themeToggleBtn);

function toggleTheme() {
    const htmlElement = document.documentElement; // Находим элемент html (корневой элемент страницы)
    const isDark = htmlElement.getAttribute('data-theme') === 'dark'; // Проверяем, есть ли уже атрибут data-theme="dark"

    if (isDark) {
        htmlElement.removeAttribute('data-theme');
        console.log('Включена светлая тема');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        console.log('Включена темная тема');
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);
