function startJourney() {
    const audio = document.getElementById('birthdaySong');
    
    // Attempt to play the music
    if (audio) {
        audio.volume = 1.0; // Ensure volume is up
        audio.play().then(() => {
            console.log("Playing jbl.mp3");
        }).catch(e => {
            console.log("Playback error. Make sure jbl.mp3 is in the main folder:", e);
        });
    }

    // Switch to the next page
    nextStep(2);
}

function nextStep(stepNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const next = document.getElementById('step' + stepNumber);
    if (next) {
        next.classList.add('active');
    }
}
