function counterMaker(incr) {
  let count = 0;
  return function () {
    count += incr;
    return count;
  }
}

const counterOne = counterMaker(1)
const counterTwo = counterMaker(1)

const advanceCounterOne = () => {
  document.getElementById('counterOneDisplay').innerText = counterOne();
}

const advanceCounterTwo = () => {
  document.getElementById('counterTwoDisplay').innerText = counterTwo();
}