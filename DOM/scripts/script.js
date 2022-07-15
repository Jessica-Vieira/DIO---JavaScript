let titulo = document.getElementById('page-title');
let botao = document.getElementById('mode-selector');
let corpo = document.getElementsByTagName('body')[0];
let darkModeClass = 'dark-mode';

function trocarModo() {
    trocarClasse();
    trocarTexto();
}

function trocarClasse() {
    titulo.classList.toggle(darkModeClass);
    botao.classList.toggle(darkModeClass);
    corpo.classList.toggle(darkModeClass);
}

function trocarTexto() {
    const lightMode = 'Light mode';
    const darkMode = 'Dark mode';

    if (botao.classList.contains(darkModeClass)) {
        botao.innerHTML = lightMode;
        titulo.innerHTML = darkMode + ' ON';
        return;
    }
    botao.innerHTML = darkMode;
    titulo.innerHTML = lightMode + ' ON';
}

botao.addEventListener('click', trocarModo);