const colorsArray = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020"
]

function getRandom() {
    const randomColor = Math.floor(Math.random() * colorsArray.length);
    return randomColor;
}

const body = document.querySelector("body");
const hexCodeSpan = document.getElementById("hex-code");

function changeBackgroundColor() {
    const color = colorsArray[getRandom()];

    hexCodeSpan.innerText = color;
    body.style.backgroundColor = color;
}

const button = documnet.getElementById("btn");

button.onclick = changeBackgroundColor;