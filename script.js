// ===== MANUAL PLAYLIST (Working Video IDs) =====
const playlist = [
    {
        id: 1,
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        videoId: "YBHQwOzOeKE",
        duration: "4:22",
        thumb: "https://img.youtube.com/vi/YBHQwOzOeKE/mqdefault.jpg"
    },
    {
        id: 2,
        title: "Channa Mereya",
        artist: "Arijit Singh",
        videoId: "iK50aEYz5aA",
        duration: "4:49",
        thumb: "https://img.youtube.com/vi/iK50aEYz5aA/mqdefault.jpg"
    },
    {
        id: 3,
        title: "Kesariya",
        artist: "Arijit Singh",
        videoId: "DJ7ZP41pGhI",
        duration: "4:28",
        thumb: "https://img.youtube.com/vi/DJ7ZP41pGhI/mqdefault.jpg"
    },
    {
        id: 4,
        title: "Raataan Lambiyan",
        artist: "Jubin Nautiyal",
        videoId: "VxG0aRjKw4k",
        duration: "3:58",
        thumb: "https://img.youtube.com/vi/VxG0aRjKw4k/mqdefault.jpg"
    },
    {
        id: 5,
        title: "Agar Tum Saath Ho",
        artist: "Arijit Singh",
        videoId: "kffHf7sKSHM",
        duration: "5:41",
        thumb: "https://img.youtube.com/vi/kffHf7sKSHM/mqdefault.jpg"
    }
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

// ===== FUNCTIONS =====
function renderPlaylist() {
    // Agar tum chaaho toh yahan playlist dikhane ka code add kar sakte ho
    console.log('Playlist loaded:', playlist.length, 'songs');
}

function loadSong() {
    const song = playlist[currentSongIndex];
    if (player && player.loadVideoById) {
        player.loadVideoById(song.videoId);
    }
    updateNowPlaying();
}

function updateNowPlaying() {
    const song = playlist[currentSongIndex];
    document.getElementById('npTitle').textContent = song.title;
    document.getElementById('npArtist').textContent = song.artist;
}

function togglePlay() {
    if (!player) return;
    isPlaying ? player.pauseVideo() : player.playVideo();
}

function updatePlayButton() {
    document.getElementById('playIcon').className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
}

function nextSong() {
    currentSongIndex = isShuffle ? Math.floor(Math.random() * playlist.length) : (currentSongIndex + 1) % playlist.length;
    loadSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong();
}

// ===== CONTROLS =====
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

// ===== UTILS =====
function simulateOnlineCount() {
    const count = 25 + Math.floor(Math.random() * 20);
    document.getElementById('onlineCount').textContent = count;
    document.getElementById('statOnline').textContent = count;
}
setInterval(simulateOnlineCount, 8000);
simulateOnlineCount();

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
