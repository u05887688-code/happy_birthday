function nextStep(stepNumber) {
    console.log("Moving to step: " + stepNumber);
    
    // 1. Hide all sections
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none'; // Force hide
    });

    // 2. Show the target section
    const next = document.getElementById('step' + stepNumber);
    if (next) {
        next.classList.add('active');
        next.style.display = 'block'; // Force show
        console.log("Successfully showed step" + stepNumber);
    } else {
        console.error("Could not find element with ID: step" + stepNumber);
    }
}

function startMusic() {
    const audio = document.getElementById('birthdaySong');
    if (audio) {
        audio.play().catch(err => console.log("Audio play blocked or failed:", err));
    }
    nextStep(3);
}

// Keep your heart animation below this if you want it
