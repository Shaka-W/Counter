const decreaseBtn = document.querySelector('.btn-decrease');
const resetBtn = document.querySelector('.btn-reset');
const increaseBtn = document.querySelector('.btn-increase');

let numCount = document.querySelector('.count-num');
let counter = numCount.textContent;

decreaseBtn.addEventListener('click', () => {
  counter--;

  if (counter <= -1) {
    numCount.style.color = 'red';
  } 
  else if (counter == 0) {
    numCount.style.color = 'black';
  }

  numCount.textContent = counter;
});

resetBtn.addEventListener('click', () => {
  counter = 0;

  numCount.style.color = 'black';
  numCount.textContent = counter;
});

increaseBtn.addEventListener('click', () => {
  counter++;

  if (counter >= 1) {
    numCount.style.color = 'green';
  } 
  else if (counter == 0) {
    numCount.style.color = 'black';
  }

  numCount.textContent = counter;
});