// ===== DOWNLOADED SONGS PLAYLIST =====
const playlist = [
    { 
        id: 1, 
        title: "Chand Se Parda Keejiye", 
        artist: "Kumar Sanu", 
        audioFile: "audio/01-chand-se-parda-keejiye.mp3",
        duration: "4:30",
        thumb: "https://via.placeholder.com/300x300/E74C3C/FFFFFF?text=Chand+Se+Parda"
    },
    { 
        id: 2, 
        title: "Kisi Din Banoongi Main Raja Ki Rani", 
        artist: "Madhuri Dixit", 
        audioFile: "audio/02-kisi-din-banoongi-main-raja-ki-rani.mp3",
        duration: "5:12",
        thumb: "https://via.placeholder.com/300x300/F39C12/FFFFFF?text=Raja+Ki+Rani"
    },
    { 
        id: 3, 
        title: "Phool Mangu Na Bahar Mangu", 
        artist: "Raja Songs", 
        audioFile: "audio/03-phool-mangu-na-bahar-mangu.mp3",
        duration: "5:45",
        thumb: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Phool+Mangu"
    },
    { 
        id: 4, 
        title: "Tujhe Na Dekhu Toh", 
        artist: "Kumar Sanu, Alka Yagnik", 
        audioFile: "audio/04-tujhe-na-dekhu-toh.mp3",
        duration: "6:02",
        thumb: "https://via.placeholder.com/300x300/3498DB/FFFFFF?text=Tujhe+Na+Dekhu"
    },
    { 
        id: 5, 
        title: "Dheere Dheere Se Meri Zindagi Mein Aana", 
        artist: "Aashiqui", 
        audioFile: "audio/05-dheere-dheere-se.mp3",
        duration: "5:20",
        thumb: "https://via.placeholder.com/300x300/1ABC9C/FFFFFF?text=Dheere+Dheere"
    },
    { 
        id: 6, 
        title: "Ek Tere Hi Chehre Pe Pyar Aaya", 
        artist: "Anuradha Paudwal, Kumar Sanu", 
        audioFile: "audio/06-ek-tere-hi-chehre-pe.mp3",
        duration: "5:15",
        thumb: "https://via.placeholder.com/300x300/E67E22/FFFFFF?text=Ek+Tere+Hi"
    },
    { 
        id: 7, 
        title: "Bas Ek Sanam Chahiye Aashiqui Ke Liye", 
        artist: "Kumar Sanu", 
        audioFile: "audio/07-bas-ek-sanam-chahiye.mp3",
        duration: "6:35",
        thumb: "https://via.placeholder.com/300x300/E74C3C/FFFFFF?text=Bas+Ek+Sanam"
    },
    { 
        id: 8, 
        title: "Mera Dil Bhi Kitna Pagal Hai", 
        artist: "Saajan", 
        audioFile: "audio/08-mera-dil-bhi-kitna.mp3",
        duration: "5:48",
        thumb: "https://via.placeholder.com/300x300/F39C12/FFFFFF?text=Mera+Dil+Bhi"
    },
    { 
        id: 9, 
        title: "Tumhein Apna Banane Ki Kasam", 
        artist: "Kumar Sanu, Anuradha Paudwal", 
        audioFile: "audio/09-tumhein-apna-banane.mp3",
        duration: "6:10",
        thumb: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Tumhein+Apna"
    },
    { 
        id: 10, 
        title: "Tum Dil Ki Dhadkan Mein", 
        artist: "Dhadkan", 
        audioFile: "audio/10-tum-dil-ki-dhadkan.mp3",
        duration: "5:30",
        thumb: "https://via.placeholder.com/300x300/3498DB/FFFFFF?text=Tum+Dil+Ki"
    }
    // ... Add remaining 57 songs in same format
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
    currentSongIndex = isShuffle ? Math.floor(Math.random() * playlist.length) : (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
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
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
    const count = 25 + Math.floor(Math.random() * 20);
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
    if (e.code === 'ArrowRight') nextSong();
    if (e.code === 'ArrowLeft') prevSong();
});

console.log('🚌 College Way — Downloaded Songs Player Loaded');
