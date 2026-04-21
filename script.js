// 1. Function to switch between pages
function nextStep(stepNumber) {
    // Hide all pages by removing 'active' class
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    // Show the target page
    const next = document.getElementById('step' + stepNumber);
    if (next) {
        next.classList.add('active');
    }
}

// 2. Special function for the Music Screen
function startMusic() {
    const audio = document.getElementById('birthdaySong');
    if (audio) {
        audio.load(); // Force the browser to find the file
        audio.play().then(() => {
            console.log("Playing!");
        }).catch(err => {
            console.log("Error playing audio:", err);
            // If it fails, we still move to the next page
        });
    }
    nextStep(3); // Moves to the photos page
}

    // Automatically move to the next step (The Photos)
    nextStep(3);
}

// 3. Floating Hearts Animation (Extra Sparkle)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Run the heart animation every 300ms
setInterval(createHeart, 300);
