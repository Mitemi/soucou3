const readjson = (url) => fetch(url)
    .then(response => response.json());

const script = await readjson("../content/scenarios/1-1.json");

const title = document.querySelector('.title-box');
const text = document.querySelector('.content-box');
const background = document.querySelector('.background');
const portrait1 = document.querySelector('.portrait1');
const portrait2 = document.querySelector('.portrait2');
const vnp = document.getElementById("vnparams");
const HTMLbranch = vnp.getAttribute("branch");
const JSONbranch = vnp.getAttribute("chapter");

document.addEventListener('click', () => click());

let i = 0;

function click() {
    const json = script[i];

    title.textContent = json.title || title.textContent;
    text.textContent = json.text || text.textContent;
    background.src = json.background || background.src;
    portrait1.src = json.portrait1 || portrait1.src;
    portrait2.src = json.portrait2 || portrait2.src;

    i++
};