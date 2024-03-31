// Get the board element
const board = document.getElementById('board');

// Optimized touchstart event handler
const handleTouchStart = (event) => {
  // Prevent multiple touches from triggering multiple events
  if (event.touches.length === 1) {
    // Your code for handling the touchstart event
  }
};

// Add the optimized event listener to the board
board.addEventListener('touchstart', handleTouchStart, false);
