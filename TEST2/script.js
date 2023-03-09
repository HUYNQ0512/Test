const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);

function getHex() {
    let hexCol = '#';
    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol += hexNumbers[random];
    }
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}
const buttonRandom = document.querySelector(".button-random");
const colors = [
  "#00aefd",
  "#ffa400",
  "#07a787",
  "#ff7870",
  "black",
  "pink",
  "yellow",
  "#e74c3c",
  "#2979ff",
];
buttonRandom.addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});