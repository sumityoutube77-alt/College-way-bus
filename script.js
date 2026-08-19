// ===== SINGLE MIXED PLAYLIST FILE =====
const playlist = [
    { 
        id: 1, 
        title: "The Ultimate Indian Bus Driver Playlist", 
        artist: "Various Artists • 67 Songs Mix", 
        audioFile: "audio/The Ultimate Indian Bus Driver Playlist ( Timestamps) ࿐ ࿔ ･ﾟ.mp3",
        duration: "5:30:00",
        thumb: "https://via.placeholder.com/300x300/E74C3C/FFFFFF?text=Bus+Playlist"
    }
];

// ===== STATE =====
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// ===== AUDIO PLAYER =====
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('btnPlay');
const playIcon = document.getElementById('playIcon');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTimeDisplay');
const durationDisplay = document.getElementById('durationDisplay');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumArt = document.getElementById('albumArt');

// ===== INITIALIZE =====
function initPlayer() {
    loadSong(currentSongIndex);
    updateTime();
    simulateOnlineCount();
}

// ===== LOAD SONG =====
function loadSong(index) {
    const song = playlist[index];
    audioPlayer.src = song.audioFile;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    albumArt.src = song.thumb;
    durationDisplay.textContent = song.duration;
    progressBar.value = 0;
    currentTimeDisplay.textContent = "0:00";
    
    if (isPlaying) {
        audioPlayer.play().catch(error => {
            console.log("Auto-play prevented:", error);
            isPlaying = false;
            updatePlayButton();
        });
    }
}

// ===== PLAY/PAUSE =====
function togglePlay() {
    if (!audioPlayer.src) return;
    
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play().catch(error => {
            console.log("Play failed:", error);
        });
    }
}

function updatePlayButton() {
    playIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
}

// ===== CONTROLS =====
function nextSong() {
    // Single file playlist - just restart
    currentSongIndex = 0;
    loadSong(currentSongIndex);
}

function prevSong() {
    // Single file playlist - just restart
    currentSongIndex = 0;
    loadSong(currentSongIndex);
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
    audioPlayer.currentTime = (clickX / width) * duration;
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
    
    document.getElementById('btnShuffle').addEventListener('click', function() {
        isShuffle = !isShuffle;
        this.style.color = isShuffle ? '#E74C3C' : '#ffffff';
    });
    
    document.getElementById('btnRepeat').addEventListener('click', function() {
        isRepeat = !isRepeat;
        this.style.color = isRepeat ? '#E74C3C' : '#ffffff';
    });
    
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', () => {
        if (isRepeat) {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else {
            // Auto-restart for single file
            nextSong();
        }
    });
    
    audioPlayer.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });
    
    progressBar.addEventListener('input', setProgress);
});

// ===== ONLINE COUNT =====
function simulateOnlineCount() {
    const count = 43 + Math.floor(Math.random() * 15);
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
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    if (e.code === 'ArrowRight') {
        audioPlayer.currentTime += 30; // Skip 30 seconds forward
    }
    if (e.code === 'ArrowLeft') {
        audioPlayer.currentTime -= 30; // Skip 30 seconds backward
    }
});

console.log('🚌 College Way — Ultimate Bus Driver Playlist Loaded (5.5 Hours Mix)');
