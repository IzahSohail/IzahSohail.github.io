// Get the "main-content" element
const mainContent = document.querySelector('.main-content');

// Calculate the offset from the top of the page where you want the div to start moving
const scrollOffset = 20; 

// Calculate the maximum scroll limit
const maxScroll = 100; 

// Listen to the scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollY = window.scrollY;

  // Calculate the new position for the "main-content" element
  let newPosition = Math.max(0, scrollY - scrollOffset);

  // Limit the scrolling to a maximum scroll limit
  newPosition = Math.min(newPosition, maxScroll);

  // Apply the new position as a style to move the element up
  mainContent.style.transform = `translateY(-${newPosition}px)`;
});
