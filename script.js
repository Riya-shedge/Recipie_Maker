let currentSlide = 0;
const slides = document.querySelectorAll('.step');
const totalSlides = slides.length;

// Show the next slide
function showNextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Go back to the first slide
    }
    updateSliderPosition();
}

// Show the previous slide
function showPreviousSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; // Go to the last slide
    }
    updateSliderPosition();
}

// Update the slider position based on the current slide
function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Toggle Ingredients visibility
function toggleIngredients() {
    const ingredientsList = document.getElementById('ingredients-list');
    if (ingredientsList.style.display === 'none') {
        ingredientsList.style.display = 'block';
    } else {
        ingredientsList.style.display = 'none';
    }
}
