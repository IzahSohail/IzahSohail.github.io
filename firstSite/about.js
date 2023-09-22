document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Function to show a specific slide
    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            item.style.transform = `rotateY(${(i - index) * 120}deg)`; // Adjust rotation angle
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    // Handle next slide button click
    document.querySelector('.carousel-control-next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    });

    // Handle previous slide button click
    document.querySelector('.carousel-control-prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    });
});
