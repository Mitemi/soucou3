const play = document.getElementById('play');
const settings = document.getElementById('settings');
const lang = document.getElementById('lang');

play.addEventListener('click', () => clickPlay());
settings.addEventListener('click', () => clickSettings());

function clickPlay() {
    location = ('../content/chapters/1/1-1.html');
}

function clickSettings() {
    location = ('../content/settings.html');
}