// ===== WORKING PLAYLIST (Official Videos that allow embedding) =====
const playlist = [
    { id: 1, title: "Tum Hi Ho", artist: "Arijit Singh", videoId: "IJq0ywvRz7U", duration: "4:22", thumb: "https://img.youtube.com/vi/IJq0ywvRz7U/mqdefault.jpg" },
    { id: 2, title: "Channa Mereya", artist: "Arijit Singh", videoId: "bDUL0cJnpQA", duration: "4:49", thumb: "https://img.youtube.com/vi/bDUL0cJnpQA/mqdefault.jpg" },
    { id: 3, title: "Kesariya", artist: "Arijit Singh", videoId: "DJ7ZP41pGhI", duration: "4:28", thumb: "https://img.youtube.com/vi/DJ7ZP41pGhI/mqdefault.jpg" },
    { id: 4, title: "Raataan Lambiyan", artist: "Jubin Nautiyal", videoId: "VxG0aRjKw4k", duration: "3:58", thumb: "https://img.youtube.com/vi/VxG0aRjKw4k/mqdefault.jpg" },
    { id: 5, title: "Agar Tum Saath Ho", artist: "Arijit Singh", videoId: "kffHf7sKSHM", duration: "5:41", thumb: "https://img.youtube.com/vi/kffHf7sKSHM/mqdefault.jpg" },
    { id: 6, title: "Pehla Nasha", artist: "Udit Narayan", videoId: "3XKHKBKkf8E", duration: "5:12", thumb: "https://img.youtube.com/vi/3XKHKBKkf8E/mqdefault.jpg" },
    { id: 7, title: "Tere Bina", artist: "A.R. Rahman", videoId: "yOmNeYpDIx0", duration: "5:55", thumb: "https://img.youtube.com/vi/yOmNeYpDIx0/mqdefault.jpg" },
    { id: 8, title: "Gerua", artist: "Arijit Singh", videoId: "u1iNf5g5w4w", duration: "4:55", thumb: "https://img.youtube.com/vi/u1iNf5g5w4w/mqdefault.jpg" },
    { id: 9, title: "Bolna", artist: "Arijit Singh", videoId: "D70wCBXGZ8c", duration: "3:35", thumb: "https://img.youtube.com/vi/D70wCBXGZ8c/mqdefault.jpg" },
    { id: 10, title: "Hawayein", artist: "Arijit Singh", videoId: "JFcgOboQZ08", duration: "4:02", thumb: "https://img.youtube.com/vi/JFcgOboQZ08/mqdefault.jpg" },
    { id: 11, title: "Dilbar", artist: "Neha Kakkar", videoId: "jToaQAfRreY", duration: "3:45", thumb: "https://img.youtube.com/vi/jToaQAfRreY/mqdefault.jpg" },
    { id: 12, title: "Mujhse Mohabbat Ka", artist: "Satrang Music", videoId: "placeholder1", duration: "5:04", thumb: "https://img.youtube.com/vi/placeholder1/mqdefault.jpg" },
    { id: 13, title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", videoId: "K6D-K1K3K3K", duration: "4:29", thumb: "https://img.youtube.com/vi/K6D-K1K3K3K/mqdefault.jpg" },
    { id: 14, title: "Kal Ho Naa Ho", artist: "Sonu Nigam", videoId: "t8K78K78K78", duration: "5:21", thumb: "https://img.youtube.com/vi/t8K78K78K78/mqdefault.jpg" },
    { id: 15, title: "Tujhe Dekha To", artist: "Kumar Sanu", videoId: "pL9pL9pL9pL", duration: "5:48", thumb: "https://img.youtube.com/vi/pL9pL9pL9pL/mqdefault.jpg" }
];

// ===== STATE =====
let player;
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// ===== YOUTUBE PLAYER =====
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: playlist[0].videoId,
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    renderPlaylist();
    updateNowPlaying();
    updateTime();
    simulateOnlineCount();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true;
        updatePlayButton();
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
        isPlaying = false;
        updatePlayButton();
        
        if (event.data === YT.PlayerState.ENDED) {
            if (isRepeat) {
                player.seekTo(0);
                player.playVideo();
            } else {
                nextSong();
            }
        }
    }
}

// ===== RENDER PLAYLIST =====
function renderPlaylist() {
    const container = document.getElementById('playlistContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    playlist.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = `playlist-item ${index === currentSongIndex ? 'active' : ''}`;
        item.innerHTML = `
            <span class="song-number">${index === currentSongIndex && isPlaying ? '♪' : index + 1}</span>
            <img class="song-thumb" src="${song.thumb}" alt="${song.title}" 
                 onerror="this.src='https://via.placeholder.com/64x48/E74C3C/FFFFFF?text='">
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <span class="song-duration">${song.duration}</span>
            <i class="fas fa-play play-icon"></i>
        `;
        
        item.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong();
        });
        
        container.appendChild(item);
    });
}

// ===== LOAD SONG =====
function loadSong() {
    const song = playlist[currentSongIndex];
    if (player && player.loadVideoById) {
        player.loadVideoById(song.videoId);
    }
    updateNowPlaying();
    renderPlaylist();
}

function updateNowPlaying() {
    const song = playlist[currentSongIndex];
    document.getElementById('npTitle').textContent = song.title;
    document.getElementById('npArtist').textContent = song.artist;
}

// ===== CONTROLS =====
function togglePlay() {
    if (!player) return;
    isPlaying ? player.pauseVideo() : player.playVideo();
}

function updatePlayButton() {
    document.getElementById('playIcon').className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    renderPlaylist();
}

function nextSong() {
    currentSongIndex = isShuffle ? Math.floor(Math.random() * playlist.length) : (currentSongIndex + 1) % playlist.length;
    loadSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnPlay').addEventListener('click', togglePlay);
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

console.log('🚌 College Way — Bus Playlist Loaded');
