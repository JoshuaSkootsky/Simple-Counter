function counterMaker(incr) {
  let count = 0;
  return function () {
    count += incr;
    return count;
  }
}

const counter = counterMaker(1)

const advanceCounter = () => {
  document.getElementById('counterDisplay').innerText = counter();
}