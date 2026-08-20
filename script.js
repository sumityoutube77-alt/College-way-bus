// ===== STATE =====
let isPlaying = false;
let isRepeat = false;
let isShuffle = false;

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
    
    // Load audio
    audioPlayer.load();
    
    console.log(' Bus Wali Playlist - Player Initialized');
    console.log('🎵 Audio source:', audioPlayer.src);
}

// ===== PLAY/PAUSE =====
function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play().then(() => {
            isPlaying = true;
            updatePlayButton();
            console.log('▶️ Playing...');
        }).catch(error => {
            console.error('❌ Play failed:', error);
            alert('Audio load hone mein problem ho rahi hai. Page refresh karo!');
        });
    } else {
        audioPlayer.pause();
        isPlaying = false;
        updatePlayButton();
        console.log('⏸️ Paused');
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
    if (audioPlayer.duration) {
        audioPlayer.currentTime = Math.min(audioPlayer.currentTime + 30, audioPlayer.duration);
        console.log('⏩ Forward 30s');
    }
}

function prevSong() {
    audioPlayer.currentTime = Math.max(audioPlayer.currentTime - 30, 0);
    console.log(' Backward 30s');
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
    if (isNaN(seconds)) return '0:00';
    
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
    
    // Button event listeners
    playBtn.addEventListener('click', togglePlay);
    document.getElementById('btnNext').addEventListener('click', nextSong);
    document.getElementById('btnPrev').addEventListener('click', prevSong);
    
    document.getElementById('btnShuffle').addEventListener('click', function() {
        isShuffle = !isShuffle;
        this.style.color = isShuffle ? '#E74C3C' : '#ffffff';
        console.log('🔀 Shuffle:', isShuffle);
    });
    
    document.getElementById('btnRepeat').addEventListener('click', function() {
        isRepeat = !isRepeat;
        this.style.color = isRepeat ? '#E74C3C' : '#ffffff';
        console.log('🔁 Repeat:', isRepeat);
    });
    
    // Audio events
    audioPlayer.addEventListener('timeupdate', updateProgress);
    
    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        updatePlayButton();
    });
    
    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayButton();
    });
    
    audioPlayer.addEventListener('loadedmetadata', () => {
        console.log(' Audio loaded - Duration:', formatTime(audioPlayer.duration));
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });
    
    audioPlayer.addEventListener('canplay', () => {
        console.log('✅ Audio can play now');
    });
    
    audioPlayer.addEventListener('ended', () => {
        console.log('⏹️ Ended');
        if (isRepeat) {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else {
            isPlaying = false;
            updatePlayButton();
        }
    });
    
    audioPlayer.addEventListener('error', (e) => {
        console.error('❌ Audio Error:', e);
        console.error('Error code:', audioPlayer.error?.code);
        console.error('Error message:', audioPlayer.error?.message);
    });
    
    progressBar.addEventListener('input', setProgress);
    
    console.log('✅ DOM Loaded - Player Ready');
});

// ===== ONLINE COUNT =====
function simulateOnlineCount() {
    const count = 75 + Math.floor(Math.random() * 15);
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
        nextSong();
    }
    if (e.code === 'ArrowLeft') {
        prevSong();
    }
});

console.log('🚌 Bus Wali Playlist Loaded - 67 Songs Ready!');
console.log('🎵 Use Space to Play/Pause, Arrows to Skip');
