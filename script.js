const audio = document.getElementById('music-player');

const songs = [
    'music/why.mp3',
    'music/Garbage.mp3',
    'music/ode_to_sleep.mp3'
];

let currentSongIndex = 0;

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const songDisplay = document.querySelector('.screen p');

songDisplay.textContent = songs[currentSongIndex];

// PLAY
playButton.addEventListener('click', function() {
    audio.play();
});

// PAUSE
pauseButton.addEventListener('click', function() {
    audio.pause();
});

// NEXT
nextButton.addEventListener('click', function() {
    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    audio.src = songs[currentSongIndex];
    songDisplay.textContent = songTitles[currentSongIndex];
    audio.play();
});

// PREVIOUS
prevButton.addEventListener('click', function() {
    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    audio.src = songs[currentSongIndex];
    songDisplay.textContent = songTitles[currentSongIndex];
    audio.play();
});

const songTitles = ['why', 'Garbage', 'Ode to Sleep'];

const muteButton = document.querySelector('.mute');

muteButton.addEventListener('click', function() {
    audio.muted = !audio.muted;

if (audio.muted) {
    muteButton.textContent = 'Unmute';
} else {
    muteButton.textContent = 'Mute';
}
});
