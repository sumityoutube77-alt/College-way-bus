// ===== PLAYLIST DATA (Real YouTube Videos) =====
const playlist = [
    {
        id: 1,
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        videoId: "IJq0ywvRz7U",
        duration: "4:22",
        thumb: "https://img.youtube.com/vi/IJq0ywvRz7U/mqdefault.jpg"
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
        artist: "Jubin Nautiyal, Asees Kaur",
        videoId: "VxG0aRjKw4k",
        duration: "3:58",
        thumb: "https://img.youtube.com/vi/VxG0aRjKw4k/mqdefault.jpg"
    },
    {
        id: 5,
        title: "Agar Tum Saath Ho",
        artist: "Alka Yagnik, Arijit Singh",
        videoId: "kffHf7sKSHM",
        duration: "5:41",
        thumb: "https://img.youtube.com/vi/kffHf7sKSHM/mqdefault.jpg"
    },
    {
        id: 6,
        title: "Pehla Nasha",
        artist: "Udit Narayan, Sadhana Sargam",
        videoId: "3XKHKBKkf8E",
        duration: "5:12",
        thumb: "https://img.youtube.com/vi/3XKHKBKkf8E/mqdefault.jpg"
    },
    {
        id: 7,
        title: "Tere Bina",
        artist: "A.R. Rahman, Chinmayi",
        videoId: "yOmNeYpDIx0",
        duration: "5:55",
        thumb: "https://img.youtube.com/vi/yOmNeYpDIx0/mqdefault.jpg"
    },
    {
        id: 8,
        title: "Gerua",
        artist: "Arijit Singh, Antara Mitra",
        videoId: "u1iNf5g5w4w",
        duration: "4:55",
        thumb: "https://img.youtube.com/vi/u1iNf5g5w4w/mqdefault.jpg"
    },
    {
        id: 9,
        title: "Bolna",
        artist: "Arijit Singh, Asees Kaur",
        videoId: "D70wCBXGZ8c",
        duration: "3:35",
        thumb: "https://img.youtube.com/vi/D70wCBXGZ8c/mqdefault.jpg"
    },
    {
        id: 10,
        title: "Hawayein",
        artist: "Arijit Singh",
        videoId: "JFcgOboQZ08",
        duration: "4:02",
        thumb: "https://img.youtube.com/vi/JFcgOboQZ08/mqdefault.jpg"
    }
];

// ===== STATE =====
let player;
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// ===== YOUTUBE IFRAME API =====
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: playlist[0].videoId,
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0,
            'modestbranding': 1,
            'showinfo': 0,
            'iv_load_policy': 3
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
    container.innerHTML = '';
    
    playlist.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = `playlist-item ${index === currentSongIndex ? 'active' : ''}`;
        item.innerHTML = `
            <span class="song-number">${index === currentSongIndex && isPlaying ? '♪' : index + 1}</span>
            <img class="song-thumb" src="${song.thumb}" alt="${song.title}" 
                 onerror="this.src='https://via.placeholder.com/60x45/E74C3C/FFFFFF?text=🎵'">
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

// ===== UPDATE NOW PLAYING =====
function updateNowPlaying() {
    const song = playlist[currentSongIndex];
    document.getElementById('npTitle').textContent = song.title;
    document.getElementById('npArtist').textContent = song.artist;
}

// ===== PLAY/PAUSE =====
function togglePlay() {
    if (!player) return;
    
    if (isPlaying) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}

function updatePlayButton() {
    const icon = document.getElementById('playIcon');
    icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    renderPlaylist();
}

// ===== NEXT/PREV =====
function nextSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * playlist.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
    }
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

// ===== SIMULATE ONLINE COUNT =====
function simulateOnlineCount() {
    function updateCount() {
        const baseCount = 25;
        const variation = Math.floor(Math.random() * 20);
        const count = baseCount + variation;
        
        document.getElementById('onlineCount').textContent = count;
        document.getElementById('statOnline').textContent = count;
    }
    
    updateCount();
    setInterval(updateCount, 8000);
}

// ===== UPDATE TIME =====
function updateTime() {
    function update() {
        const now = new Date();
        let hours = now.getHours();
        const mins = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        document.getElementById('currentTime').textContent = `${hours}:${mins} ${ampm}`;
    }
    
    update();
    setInterval(update, 1000);
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowRight':
            nextSong();
            break;
        case 'ArrowLeft':
            prevSong();
            break;
    }
});

// ===== CONSOLE MESSAGE =====
console.log('%c College Way — Bus Playlist', 'color: #E74C3C; font-size: 20px; font-weight: bold;');
console.log('%cUse Brave Browser for Ad-Free Experience ', 'color: #2ecc71; font-size: 14px;');
console.log('%cKeyboard: Space (Play/Pause), Arrows (Skip)', 'color: #F39C12; font-size: 12px;');
