// ===== STATE =====
let isPlaying = false;
let isRepeat = false;

// ===== AUDIO PLAYER =====
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('btnPlay');
const playIcon = document.getElementById('playIcon');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTimeDisplay');
const durationDisplay = document.getElementById('durationDisplay');

// ===== INITIALIZE =====
function initPlayer() {
    updateTime();
    simulateOnlineCount();
    
    // Load audio source
    const source = audioPlayer.querySelector('source');
    if (source) {
        audioPlayer.load();
    }
}

// ===== PLAY/PAUSE (FIXED) =====
function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play().then(() => {
            isPlaying = true;
            updatePlayButton();
        }).catch(error => {
            console.error("Play failed:", error);
        });
    } else {
        audioPlayer.pause();
        isPlaying = false;
        updatePlayButton();
    }
}

function updatePlayButton() {
    if (isPlaying) {
        playIcon.className = 'fas fa-pause';
    } else {
        playIcon.className = 'fas fa-play';
    }
}

// ===== CONTROLS (Skip 30 seconds) =====
function nextSong() {
    audioPlayer.currentTime += 30;
}

function prevSong() {
    audioPlayer.currentTime -= 30;
}

// ===== PROGRESS BAR =====
function updateProgress() {
    if (audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    }
}

function setProgress(e) {
    const width = e.target.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    if (duration) {
        audioPlayer.currentTime = (clickX / width) * duration;
    }
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    if (hours > 0) {
        return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    initPlayer();
    
    playBtn.addEventListener('click', togglePlay);
    document.getElementById('btnNext').addEventListener('click', nextSong);
    document.getElementById('btnPrev').addEventListener('click', prevSong);
    
    document.getElementById('btnRepeat').addEventListener('click', function() {
        isRepeat = !isRepeat;
        this.style.color = isRepeat ? '#E74C3C' : '#ffffff';
    });
    
    audioPlayer.addEventListener('timeupdate', updateProgress);
    
    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        updatePlayButton();
    });
    
    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayButton();
    });
    
    audioPlayer.addEventListener('ended', () => {
        if (isRepeat) {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else {
            isPlaying = false;
            updatePlayButton();
        }
    });
    
    audioPlayer.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });
    
    progressBar.addEventListener('input', setProgress);
});

// ===== ONLINE COUNT =====
function simulateOnlineCount() {
    const count = 52 + Math.floor(Math.random() * 15);
    document.getElementById('onlineCount').textContent = count;
    document.getElementById('statOnline').textContent = count;
}
setInterval(simulateOnlineCount, 8000);
simulateOnlineCount();

// ===== TIME =====
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const mins = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    document.getElementById('currentTime').textContent = `${hours}:${mins} ${ampm}`;
}
setInterval(updateTime, 1000);
updateTime();

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') { 
        e.preventDefault(); 
        togglePlay(); 
    }
    if (e.code === 'ArrowRight') {
        audioPlayer.currentTime += 30;
    }
    if (e.code === 'ArrowLeft') {
        audioPlayer.currentTime -= 30;
    }
});

console.log('🚌 Bus Wali Playlist Loaded - Single File Player Ready!');
