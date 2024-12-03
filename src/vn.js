const readjson = (url) => fetch(url)
    .then(response => response.json());

const script = await readjson("../content/scenarios/1-1.json");

const titleContainer = document.querySelector('.title-box');
const textContainer = document.querySelector('.content-box');
const choice = document.querySelector('.choice-box');
const pauseMenu = document.querySelector('.pause-menu');
const menu = document.querySelector('.menu');
const title = document.querySelector('.title-text');
const text = document.querySelector('.content-text');
const background = document.querySelector('.background');
const portrait1 = document.querySelector('.portrait1');
const portrait2 = document.querySelector('.portrait2');
const vnp = document.getElementById("vnparams");
const HTMLbranch = vnp.getAttribute("branch");
const JSONbranch = vnp.getAttribute("chapter");

background.addEventListener('click', () => click());
portrait1.addEventListener('click', () => click());
portrait2.addEventListener('click', () => click());
titleContainer.addEventListener('click', () => click());
textContainer.addEventListener('click', () => click());
menu.addEventListener('click', () => clickMenu());

document.addEventListener('keydown', (event) => {
    console.log(event.code, event.key, event.keyCode);
    if (event.key === 'Escape') clickMenu(); else click();
});


let i = 0;
function click() {
    const json = script[i];

    title.textContent = json.title || title.textContent;
    text.textContent = json.text || text.textContent;
    background.src = json.background || background.src;
    portrait1.style.backgroundImage = json.portrait1 || portrait1.src;
    portrait2.src = json.portrait2 || portrait2.src;

    i == script.length - 1;

    i++
};

let pauseToggle = false;
function clickMenu() {
    pauseToggle = !pauseToggle;
    console.log(pauseToggle)
    pauseMenu.style.visibility = pauseToggle ? "visible": "hidden";
}