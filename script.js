const audio = document.getElementById('music-player');

const songs = [
    'music/why.mp3',
    'music/Garbage.mp3',
    'music/ode_to_sleep.mp3'
];

const songTitles = ['why', 'Garbage', 'Ode to Sleep'];


let currentSongIndex = 0;

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const songDisplay = document.querySelector('.screen p');

songDisplay.textContent = songTitles[currentSongIndex];

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

prevButton.addEventListener('click', function() {
    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    audio.src = songs[currentSongIndex];
    songDisplay.textContent = songTitles[currentSongIndex];
    audio.play();
});


const muteButton = document.querySelector('.mute');

muteButton.addEventListener('click', function() {
    audio.muted = !audio.muted;

if (audio.muted) {
    muteButton.textContent = 'Unmute';
} else {
    muteButton.textContent = 'Mute';
}
})

const terminalButton = document.querySelector('#terminal-button');

const terminalWindow = document.querySelector('#terminal-windows');

terminalButton.addEventListener('click', function() {
    terminalWindow.classList.toggle('open');
});



const terminalInput = document.querySelector('#terminal-input');
const terminalOutput = document.querySelector('#terminal-output');

const projects = {
    'Homepage': 'My personal website, built with HTML, CSS and JavaScript.',
    'AceOS': 'Status: Work in Progress',
    'My awesome KDE plasma NixOS': 'Isnt this simple KDE rice beatiful?'
};


terminalInput.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter') {
        return;
    }

    const command = terminalInput.value.trim();
    terminalInput.value = '';

    if (command === '') {
        return;
    }

    if (command.toLowerCase() === 'clear') {
        terminalOutput.textContent = '';
        return;
    }

    terminalOutput.append('guest@homepage:~$ ' + command + '\n');

    if (command.toLowerCase() === 'ls') {
        terminalOutput.append(Object.keys(projects).join('\n') + '\n');
    }

    else if (command.toLowerCase() === 'cat') {
        terminalOutput.append('Usage: cat <project>\n');
    }

    else if (command.toLowerCase().startsWith('cat ')) {
        const projectName = command.slice(4).trim();

        const foundProject = Object.keys(projects).find(function(name) {
            return name.toLowerCase() === projectName.toLowerCase();
        });

        if (foundProject) {
            
            if (projectImages[foundProject]) {
                const image = document.createElement('img');

                image.src = projectImages[foundProject];
                image.alt = foundProject + ' screenshot';

                terminalOutput.append(image);
            }

            terminalOutput.append(projects[foundProject] + '\n');
        } else {
            terminalOutput.append('cat: project not found\n');
        }
    }

    else if (command.toLowerCase() === 'help') {
        terminalOutput.append(
            'Available commands:\n' +
            'ls            List all projects\n' +
            'cat <project> View project information\n' +
            'help          Show available commands\n' +
            'clear         Clear terminal\n'
        );
    }

    else {
        terminalOutput.append(command + ': command not found\n');

    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
});

const projectImages = {
    'Homepage': 'homepage.png' ,    
    'AceOS' : 'aceos.png' ,
    'My awesome KDE plasma NixOS' : 'nixos.png'
}

const ipodCat = document.querySelector('.ipod-cat');
const cornerCat = document.querySelector('.corner-cat');

const evilMeow = new Audio('meow-evil.mp3');
const cuteMeow = new Audio('meow-cute.mp3');

ipodCat.addEventListener('click', function() {
    evilMeow.currentTime = 0;
    evilMeow.play();
});

cornerCat.addEventListener('click', function() {
    cuteMeow.currentTime = 0;
    cuteMeow.play();
});