// Get the "main-content" element
const mainContent = document.querySelector('.main-content');

// Calculate the offset from the top of the page where you want the div to start moving
const scrollOffset = 20; // Adjust this value as needed

// Listen to the scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollY = window.scrollY;

  // Calculate the new position for the "main-content" element
  const newPosition = Math.max(0, scrollY - scrollOffset);

  // Apply the new position as a style to move the element up
  mainContent.style.transform = `translateY(-${newPosition}px)`;
});

