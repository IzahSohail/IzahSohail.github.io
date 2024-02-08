const videoContent = document.getElementById('video-content');
const videoContainer = document.getElementById('video-container');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Define the scroll threshold 
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

window.addEventListener("scroll", function () {
    // Check the scroll position
    if (window.scrollY > 300) { 
        // Add the class to hide the video description
        document.querySelector(".video-description").classList.add("hide-description");
    } else {
        // Remove the class to show the video description
        document.querySelector(".video-description").classList.remove("hide-description");
    }
});

