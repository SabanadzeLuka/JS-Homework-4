const cifrebiEl = document.getElementById("cifrebi");
const buttonEL = document.getElementById("btn");

const numbers = "0 1 2 3 4 5 6 7 8 9 10";

let index = 1;
let speed = 200;

buttonEL.addEventListener("click", function () {
  function writeNumbers() {
    cifrebiEl.innerText = numbers.slice(0, index);
    if (index < numbers.length) {
      index++;
      setTimeout(writeNumbers, speed);
    } else {
      setTimeout(decreaseNumbers, speed);
    }
  }

  function decreaseNumbers() {
    cifrebiEl.innerText = numbers.slice(0, index);
    if (index > 0) {
      index--;
      setTimeout(decreaseNumbers, speed);
    }
  }

  writeNumbers();
});
