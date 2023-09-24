const videoContent = document.getElementById('video-content');
const videoContainer = document.getElementById('video-container');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Define the scroll threshold (adjust as needed)
    const scrollThreshold = 100;

    if (scrollPosition >= scrollThreshold) {
        // Hide the movie text and move the video up
        videoContent.style.opacity = '0';
        videoContainer.style.transform = 'translateY(-50%)';
    } else {
        // Restore the original state
        videoContent.style.opacity = '1';
        videoContainer.style.transform = 'translateY(0)';
    }
});

// JavaScript code to hide the video description after a certain scroll event
// Add an event listener to the scroll event

window.addEventListener("scroll", function () {
    // Check the scroll position
    if (window.scrollY > 300) { // Adjust the scrollY value as needed
        // Add the class to hide the video description
        document.querySelector(".video-description").classList.add("hide-description");
    } else {
        // Remove the class to show the video description
        document.querySelector(".video-description").classList.remove("hide-description");
    }
});

