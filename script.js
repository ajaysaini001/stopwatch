// Variables to hold the stopwatch state
let startTime;
let elapsedTime = 0;
let timerInterval;

// Get DOM elements
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Format time as HH:MM:SS
function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Update the display with the elapsed time
function updateDisplay() {
  const elapsedTimeFormatted = formatTime(elapsedTime);
  display.textContent = elapsedTimeFormatted;
}

// Start the stopwatch
function start() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

// Stop the stopwatch
function stop() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// Reset the stopwatch
function reset() {
  stop();
  elapsedTime = 0;
  updateDisplay();
}

// Attach event listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
