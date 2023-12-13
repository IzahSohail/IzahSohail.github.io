document.addEventListener("DOMContentLoaded", function () {
    var changingRole = document.getElementById("changingRole");
    var roles = ["student", "researcher", "designer"];
    var currentRoleIndex = 0;

    function typeOutWord(word, index) {
        if (index < word.length) {
            changingRole.textContent += word.charAt(index);
            setTimeout(function () {
                typeOutWord(word, index + 1);
            }, 100); // Adjust typing speed (100 milliseconds between letters)
        } else {
            setTimeout(function () {
                deleteWord();
            }, 2000); // Wait for 2 seconds after typing the whole word
        }
    }

    function deleteWord() {
        var currentText = changingRole.textContent;
        if (currentText.length > 0) {
            changingRole.textContent = currentText.slice(0, -1);
            setTimeout(function () {
                deleteWord();
            }, 50); // Adjust deletion speed (50 milliseconds between letters)
        } else {
            setTimeout(function () {
                nextRole();
            }, 1000); // Wait for 1 second after deleting the whole word
        }
    }

    function nextRole() {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        changingRole.textContent = "";
        setTimeout(function () {
            typeOutWord(roles[currentRoleIndex], 0);
        }, 500); // Wait for 0.5 seconds before typing the next word
    }

    // Start the typewriter effect
    typeOutWord(roles[currentRoleIndex], 0);
});


// project-slider.js

document.addEventListener('DOMContentLoaded', function () {
    // Get all project elements and the next button
    var projects = document.querySelectorAll('.project');
    var nextButton = document.getElementById('nextButton');

    // Index to keep track of the currently displayed project
    var currentIndex = 0;

    // Function to show the current project
    function showProject() {
        // Hide all projects
        projects.forEach(function (project) {
            project.style.display = 'none';
        });

        // Display the current project
        projects[currentIndex].style.display = 'block';
    }

    // Function to handle the next button click
    function nextProject() {
        // Increment the index, and loop back to the first project if necessary
        currentIndex = (currentIndex + 1) % projects.length;

        // Show the updated project
        showProject();
    }

    // Add click event listener to the next button
    nextButton.addEventListener('click', nextProject);

    // Show the initial project
    showProject();
});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var introText = document.getElementById("introText");

        // Calculate the scroll position
        var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        // Adjust the visibility of the intro text based on the scroll position
        if (scrollPosition > introText.offsetTop - window.innerHeight / 2) {
            introText.classList.remove("hidden");
            introText.style.transition = "transform 0.5s ease-out"; // Add transition property here
            introText.style.transform = "translateX(0)"; // Move the text back to its original position
        } else {
            introText.style.transform = "translateX(-180%)"; // Move the text to the left when not visible
        }
    });
});
