let timer; 
let time = 0; 
let running = false; 
let laps = []; 

function displayTime(time) {
  let hours = Math.floor(time / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);

  
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  document.getElementById('display').textContent = ${hours}:${minutes}:${seconds};
}
function startPause() {
  if (running) {
    clearInterval(timer);
    running = false;
    document.getElementById('startPause').textContent = 'Start';
  } else {
    timer = setInterval(function() {
      time += 1000;
      displayTime(time);
    }, 1000);
    running = true;
    document.getElementById('startPause').textContent = 'Pause';
  }
}

function reset() {
  clearInterval(timer);
  running = false;
  time = 0;
  displayTime(time);
  document.getElementById('startPause').textContent = 'Start';
  laps = [];
  updateLaps();
}
function lap() {
  if (running) {
    laps.push(time);
    updateLaps();
  }
}
function updateLaps() {
  const lapsList = document.getElementById('laps');
  lapsList.innerHTML = '';
  laps.forEach((lapTime, index) => {
    const li = document.createElement('li');
    const lapNumber = laps.length - index;
    const minutes = Math.floor((lapTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((lapTime % (1000 * 60)) / 1000);
    li.textContent = Lap ${lapNumber}: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};
    lapsList.appendChild(li);
  });
}