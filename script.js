function startMusic() {
    const audio = document.getElementById('birthdaySong');
    if (audio) {
        audio.play().then(() => {
            console.log("Music playing!");
        }).catch(err => {
            console.log("Error playing music:", err);
        });
    }
    // After starting music, move to the photo gallery
    nextStep(3);
}

function nextStep(stepNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const next = document.getElementById('step' + stepNumber);
    if (next) {
        next.classList.add('active');
    }
}
