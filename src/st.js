const flag = document.getElementById('flag')
const lang = document.getElementById('lang')
const goBack = document.getElementById('return')

lang.addEventListener('click', () => clickFlag());
flag.addEventListener('click', () => clickFlag());
goBack.addEventListener('click', () => clickGoBack());

let flagState = localStorage.lang == "fr";
function clickFlag() {
    console.log("Language changed.")
    flagState ^= 1;
    localStorage.lang = (flagState ? "fr" : "en");
    changeFlag()
}

function changeFlag() {
    if (localStorage.lang == "fr") {
        flag.src = "../assets//lang/qc.webp";
    } else if (localStorage.lang == "en") {
        flag.src = "../assets//lang/uk.webp"
    }
}

function clickGoBack() {
    location = ('../index.html');
}

lang.addEventListener('click', () => changeLang());

function changeLang() {
    if (localStorage.lang == "fr") {
        lang.textContent = "Langue"
        goBack.textContent = "Retour"
    } else if (localStorage.lang == "en") {
        lang.textContent = "Language"
        goBack.textContent = "Go Back"
    }
}

changeLang();
changeFlag();