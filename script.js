// ===== CONFIGURATION =====
// Tumhara Playlist ID (Ye wahi hai jo tumne diya tha)
const PLAYLIST_ID = 'PLPHrUvV7-X3lSCQXydccAnexseC45AmQk';

// ===== STATE =====
let player;
let playlist = [];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// ===== AUTO FETCH PLAYLIST (NO API KEY NEEDED) =====
async function fetchPlaylist() {
    try {
        // RSS Feed ko JSON mein convert karne wali service
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`;
        const apiUrl = `https://api.rss2json.com/an.json?rss_url=${encodeURIComponent(rssUrl)}&count=50`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 200) {
            // YouTube data ko hamare format mein lao
            playlist = data.items.map((item, index) => {
                // Video ID nikalo link se
                const videoId = item.link.split('v=')[1]; 
                
                return {
                    id: index + 1,
                    title: item.title,
                    artist: item.author,
                    videoId: videoId,
                    duration: "3:45", // Duration RSS mein nahi milta, default laga rahe hain
                    thumb: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
                };
            });

            console.log('Playlist Loaded:', playlist);
            renderPlaylist();
            if (playlist.length > 0) {
                loadSong();
            }
        } else {
            alert('Playlist load karne mein dikkat hai. Check your internet.');
        }
    } catch (error) {
        console.error('Error fetching playlist:', error);
        alert('Auto-fetch failed. Check console.');
    }
}

// ===== YOUTUBE PLAYER SETUP =====
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: '', // Pehle empty, baad mein load hoga
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0,
            'modestbranding': 1,
            'showinfo': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    fetchPlaylist(); // Page load hote hi playlist fetch karo
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

// ===== UI FUNCTIONS =====
function renderPlaylist() {
    const container = document.getElementById('playlistContainer');
    if (!container) return;
    container.innerHTML = '';

    playlist.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = `playlist-item ${index === currentSongIndex ? 'active' : ''}`;
        item.innerHTML = `
            <span class="song-number">${index === currentSongIndex && isPlaying ? '♪' : index + 1}</span>
            <img class="song-thumb" src="${song.thumb}" alt="${song.title}">
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

function loadSong() {
    if (playlist.length === 0) return;
    const song = playlist[currentSongIndex];
    if (player && player.loadVideoById) {
        player.loadVideoById(song.videoId);
    }
    updateNowPlaying();
    renderPlaylist();
}

function updateNowPlaying() {
    if (playlist.length === 0) return;
    const song = playlist[currentSongIndex];
    const npTitle = document.getElementById('npTitle');
    const npArtist = document.getElementById('npArtist');
    if (npTitle) npTitle.textContent = song.title;
    if (npArtist) npArtist.textContent = song.artist;
}

// ===== CONTROLS =====
function togglePlay() {
    if (!player) return;
    isPlaying ? player.pauseVideo() : player.playVideo();
}

function updatePlayButton() {
    const icon = document.getElementById('playIcon');
    if (icon) icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    renderPlaylist();
}

function nextSong() {
    if (playlist.length === 0) return;
    currentSongIndex = isShuffle ? Math.floor(Math.random() * playlist.length) : (currentSongIndex + 1) % playlist.length;
    loadSong();
}

function prevSong() {
    if (playlist.length === 0) return;
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong();
}

document.addEventListener('DOMContentLoaded', () => {
    const btnPlay = document.getElementById('btnPlay');
    const btnNext = document.getElementById('btnNext');
    const btnPrev = document.getElementById('btnPrev');
    const btnShuffle = document.getElementById('btnShuffle');
    const btnRepeat = document.getElementById('btnRepeat');

    if (btnPlay) btnPlay.addEventListener('click', togglePlay);
    if (btnNext) btnNext.addEventListener('click', nextSong);
    if (btnPrev) btnPrev.addEventListener('click', prevSong);
    
    if (btnShuffle) btnShuffle.addEventListener('click', function() {
        isShuffle = !isShuffle;
        this.style.color = isShuffle ? '#E74C3C' : '#ffffff';
    });
    
    if (btnRepeat) btnRepeat.addEventListener('click', function() {
        isRepeat = !isRepeat;
        this.style.color = isRepeat ? '#E74C3C' : '#ffffff';
    });
});

// ===== UTILS (Time & Online Count) =====
function simulateOnlineCount() {
    const count = 25 + Math.floor(Math.random() * 20);
    const el1 = document.getElementById('onlineCount');
    const el2 = document.getElementById('statOnline');
    if (el1) el1.textContent = count;
    if (el2) el2.textContent = count;
}
setInterval(simulateOnlineCount, 8000);
simulateOnlineCount();

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const mins = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const el = document.getElementById('currentTime');
    if (el) el.textContent = `${hours}:${mins} ${ampm}`;
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
