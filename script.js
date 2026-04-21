
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
        // This 'plays' the jbl.mp3 file
        audio.play().then(() => {
            console.log("Music is playing!");
        }).catch(err => {
            console.log("Audio error:", err);
        });
    }
    // Automatically move to the next step (The Photos)
    nextStep(3);
}

// 3. Floating Hearts Animation (Extra Sparkle)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // You can change this to 🎈 or ✨
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.body.appendChild(heart);

    // Remove heart after it floats away to keep the site fast
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start hearts as soon as the site loads
setInterval(createHeart, 300);
<script src="script.js"></script>
</body>
</html>
