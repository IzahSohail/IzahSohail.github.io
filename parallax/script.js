//typing animation 
document.addEventListener('DOMContentLoaded', function () {
    const introText = document.querySelector('.typing-animation');

    // Remove the typing animation class after animation completes
    introText.addEventListener('animationend', function () {
        introText.classList.remove('typing-animation');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    const flagSection = document.getElementById("flag");
    const mosqueSection = document.getElementById("mosque");
    const northSection = document.getElementById("North");
    const foodSection = document.getElementById("Food");
    const peopleSection = document.getElementById("people");

    // Function to update the background position of a section based on scroll position
    function updateParallax(section, scrollPosition) {
        const offset = section.offsetTop;
        section.style.backgroundPositionY = `${-scrollPosition / 2 + offset / 2}px`;
    }

    // Function to handle scroll events
    function handleScroll() {
        const scrollPosition = window.scrollY;

        // Update the background positions of each parallax section
        updateParallax(flagSection, scrollPosition);
        updateParallax(mosqueSection, scrollPosition);
        updateParallax(northSection, scrollPosition);
        updateParallax(foodSection, scrollPosition);
        updateParallax(peopleSection, scrollPosition);
    }

    // Add a scroll event listener to trigger the parallax effect
    window.addEventListener("scroll", handleScroll);

    // Initial call to set the initial background positions
    handleScroll();
});
