const play = document.getElementById('play')
const settings = document.getElementById('settings')
const lang = document.getElementById('lang')

play.addEventListener('click', () => clickPlay());
settings.addEventListener('click', () => clickSettings());
lang.addEventListener('click', () => clickLang());

function clickPlay() {
    location = ('../content/1-1.html');
}

function clickSettings() {
    location = ('../content/settings.html');
}

function clickLang() {
    lang.style.backgroundColor = "red" = lang.style.backgroundColor = "blue"
}