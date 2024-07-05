let timer; // To store setInterval function
let time = 0; // Current time in milliseconds
let running = false; // Flag to track if the stopwatch is running
let laps = []; // Array to store lap times

// Function to display the time in the format hh:mm:ss
function displayTime(time) {
  let hours = Math.floor(time / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);

  // Formatting to 2 digits
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  document.getElementById('display').textContent = ${hours}:${minutes}:${seconds};
}

// Function to start or pause the stopwatch
function startPause() {
  if (running) {
    // Pause the stopwatch
    clearInterval(timer);
    running = false;
    document.getElementById('startPause').textContent = 'Start';
  } else {
    // Start the stopwatch
    timer = setInterval(function() {
      time += 1000;
      displayTime(time);
    }, 1000);
    running = true;
    document.getElementById('startPause').textContent = 'Pause';
  }
}

// Function to reset the stopwatch
function reset() {
  clearInterval(timer);
  running = false;
  time = 0;
  displayTime(time);
  document.getElementById('startPause').textContent = 'Start';
  laps = [];
  updateLaps();
}

// Function to record lap time
function lap() {
  if (running) {
    laps.push(time);
    updateLaps();
  }
}

// Function to update lap list
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