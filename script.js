let timerInterval;
let totalSeconds = 0;

// Function to update the timer display
function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  document.getElementById('timer').textContent = formattedTime;
}

// Start the timer based on the selected duration
document.getElementById('start').addEventListener('click', () => {
  // Get the user-specified duration (in minutes) and convert to seconds
  const duration = Number(document.getElementById('duration').value) * 60;
  // Clear any existing interval
  clearInterval(timerInterval);
  totalSeconds = duration;
  updateDisplay(totalSeconds);

  // Start interval timer that updates every second
  timerInterval = setInterval(() => {
    totalSeconds--;
    updateDisplay(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      // Play the bell sound when timer finishes
      document.getElementById('bell').play();
    }
  }, 1000);
});

// Optional: Stop the timer when the "Stop" button is clicked
document.getElementById('stop').addEventListener('click', () => {
  clearInterval(timerInterval);
});
