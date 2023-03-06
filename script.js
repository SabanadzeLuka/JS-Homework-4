const numbersEl = document.getElementById("cifrebi");
const buttonEl = document.getElementById("btn");
let speed = 400;

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 0;

function writeNumbers() {
  if (index < numbers.length) {
    numbersEl.innerText = numbers[index];
    index++;
    setTimeout(writeNumbers, speed);
  } else {
    setTimeout(decreaseNumbers, speed);
  }
}

function decreaseNumbers() {
  if (index > 0) {
    index--;
    numbersEl.innerText = numbers[index];
    setTimeout(decreaseNumbers, speed);
  } else {
    numbersEl.innerText = "Click to load";
    buttonEl.removeAttribute("disabled");
    buttonEl.classList.remove("disabled");
    buttonEl.removeAttribute("title");
  }
}

buttonEl.addEventListener("click", function () {
  if (!buttonEl.disabled) {
    writeNumbers();
    buttonEl.disabled = true;
    buttonEl.classList.add("disabled");
    buttonEl.setAttribute("title", "Please wait for the process to finish");
  }
});
