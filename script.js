function startJourney() {
    // Play the music
    const audio = document.getElementById('birthdaySong');
    audio.play().catch(error => {
        console.log("Autoplay blocked. Music will play after interaction.");
    });

    // Move to the next screen
    nextStep(2);
}

function nextStep(stepNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const currentStep = document.getElementById('step' + stepNumber);
    if (currentStep) {
        currentStep.classList.add('active');
    }
}
