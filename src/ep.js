const restart = document.getElementById('restart')

restart.addEventListener('click', () => clickRestart());

function clickRestart() {
    location = ('../../index.html');
}

if (localStorage.lang == "fr") {
    restart.textContent = "Recommencer"
} else if (localStorage.lang == "en") {
    restart.textContent = "Restart"
}