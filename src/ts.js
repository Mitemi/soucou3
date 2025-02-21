const play = document.getElementById('play');
const settings = document.getElementById('settings');
const lang = document.getElementById('lang');

play.addEventListener('click', () => clickPlay());
settings.addEventListener('click', () => clickSettings());

function clickPlay() {
    location = ('../soucou3/content/chapters/1/1-1.html');
}

function clickSettings() {
    location = ('../soucou3/content/settings.html');
}