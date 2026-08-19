// ===== YOUR PLAYLIST DATA =====
// Extracted from your YouTube URLs and matched with CSV
const playlist = [
    {
        id: 1,
        title: "Chand Se Parda Keejiye",
        artist: "Kumar Sanu",
        videoId: "P87IAiJmo4A",
        duration: "4:30",
        thumb: "https://img.youtube.com/vi/P87IAiJmo4A/mqdefault.jpg"
    },
    {
        id: 2,
        title: "Kisi Din Banoongi Main Raja Ki Rani",
        artist: "Madhuri Dixit",
        videoId: "o2Fs6KqBNX8",
        duration: "5:12",
        thumb: "https://img.youtube.com/vi/o2Fs6KqBNX8/mqdefault.jpg"
    },
    {
        id: 3,
        title: "Phool Mangu Na Bahar Mangu",
        artist: "Raja Songs",
        videoId: "_SiRjlYqlcE",
        duration: "5:45",
        thumb: "https://img.youtube.com/vi/_SiRjlYqlcE/mqdefault.jpg"
    },
    {
        id: 4,
        title: "Tujhe Na Dekhu Toh",
        artist: "Kumar Sanu, Alka Yagnik",
        videoId: "coZoSYJU1OY",
        duration: "6:02",
        thumb: "https://img.youtube.com/vi/coZoSYJU1OY/mqdefault.jpg"
    },
    {
        id: 5,
        title: "Dheere Dheere Se Meri Zindagi Mein Aana",
        artist: "Aashiqui",
        videoId: "KeyfUuXPOcY",
        duration: "5:20",
        thumb: "https://img.youtube.com/vi/KeyfUuXPOcY/mqdefault.jpg"
    },
    {
        id: 6,
        title: "Ek Tere Hi Chehre Pe Pyar Aaya",
        artist: "Anuradha Paudwal, Kumar Sanu",
        videoId: "QSFWw0O3Hzk",
        duration: "5:15",
        thumb: "https://img.youtube.com/vi/QSFWw0O3Hzk/mqdefault.jpg"
    },
    {
        id: 7,
        title: "Bas Ek Sanam Chahiye Aashiqui Ke Liye",
        artist: "Kumar Sanu",
        videoId: "fBylcT-TWZw",
        duration: "6:35",
        thumb: "https://img.youtube.com/vi/fBylcT-TWZw/mqdefault.jpg"
    },
    {
        id: 8,
        title: "Mera Dil Bhi Kitna Pagal Hai",
        artist: "Saajan",
        videoId: "FsNc7I33w60",
        duration: "5:48",
        thumb: "https://img.youtube.com/vi/FsNc7I33w60/mqdefault.jpg"
    },
    {
        id: 9,
        title: "Tumhein Apna Banane Ki Kasam",
        artist: "Kumar Sanu, Anuradha Paudwal",
        videoId: "tPNwGuu_rQ4",
        duration: "6:10",
        thumb: "https://img.youtube.com/vi/tPNwGuu_rQ4/mqdefault.jpg"
    },
    {
        id: 10,
        title: "Tum Dil Ki Dhadkan Mein",
        artist: "Dhadkan",
        videoId: "3Z_x7vBqr6E",
        duration: "5:30",
        thumb: "https://img.youtube.com/vi/3Z_x7vBqr6E/mqdefault.jpg"
    },
    {
        id: 11,
        title: "Dekhne Walon Ne Kya Kaha",
        artist: "Salman Khan, Rani Mukherjee",
        videoId: "q4toZ-XY7_w",
        duration: "5:25",
        thumb: "https://img.youtube.com/vi/q4toZ-XY7_w/mqdefault.jpg"
    },
    {
        id: 12,
        title: "Is Tarah Aashiqui Ka Asar Chod Jaunga",
        artist: "Kumar Sanu",
        videoId: "x8AIGcNTjvs",
        duration: "5:40",
        thumb: "https://img.youtube.com/vi/x8AIGcNTjvs/mqdefault.jpg"
    },
    {
        id: 13,
        title: "Tune Zindagi Mein",
        artist: "Humraaz",
        videoId: "a2SByvJ9HwY",
        duration: "5:55",
        thumb: "https://img.youtube.com/vi/a2SByvJ9HwY/mqdefault.jpg"
    },
    {
        id: 14,
        title: "Teri Umeed Tera Intezar",
        artist: "Deewana",
        videoId: "xvevXfFGPFY",
        duration: "6:15",
        thumb: "https://img.youtube.com/vi/xvevXfFGPFY/mqdefault.jpg"
    },
    {
        id: 15,
        title: "Aaye Ho Meri Zindagi Mein",
        artist: "Udit Narayan",
        videoId: "ixCnsZswdpU",
        duration: "6:05",
        thumb: "https://img.youtube.com/vi/ixCnsZswdpU/mqdefault.jpg"
    },
    {
        id: 16,
        title: "Kaash Koi Ladka Mujhe Pyar Karta",
        artist: "Kumar Sanu, Alka Yagnik",
        videoId: "4OkiYQOqMaQ",
        duration: "5:50",
        thumb: "https://img.youtube.com/vi/4OkiYQOqMaQ/mqdefault.jpg"
    },
    {
        id: 17,
        title: "Beshak Tum Meri Mohabbat Ho",
        artist: "Kumar Sanu, Alka Yagnik",
        videoId: "gUVfCsEhSes",
        duration: "5:35",
        thumb: "https://img.youtube.com/vi/gUVfCsEhSes/mqdefault.jpg"
    },
    {
        id: 18,
        title: "Aksar Is Duniya Mein",
        artist: "Dhadkan",
        videoId: "kYV4OzMLVJg",
        duration: "5:20",
        thumb: "https://img.youtube.com/vi/kYV4OzMLVJg/mqdefault.jpg"
    },
    {
        id: 19,
        title: "Jeeta Tha Jiske Liye",
        artist: "Dilwale",
        videoId: "fa5Yzxdh8e4",
        duration: "5:45",
        thumb: "https://img.youtube.com/vi/fa5Yzxdh8e4/mqdefault.jpg"
    },
    {
        id: 20,
        title: "Mujhe Jine Nahi Deti Hai Yaad Teri",
        artist: "Bomb Blast",
        videoId: "LMHICMFiCxw",
        duration: "5:10",
        thumb: "https://img.youtube.com/vi/LMHICMFiCxw/mqdefault.jpg"
    },
    {
        id: 21,
        title: "Mera Chand Mujhe Aaya Hai Nazar",
        artist: "Kumar Sanu",
        videoId: "9GJToQrlt4Y",
        duration: "5:00",
        thumb: "https://img.youtube.com/vi/9GJToQrlt4Y/mqdefault.jpg"
    },
    {
        id: 22,
        title: "Aankh Hai Bhari Bhari",
        artist: "Kumar Sanu",
        videoId: "lj4848922tk",
        duration: "5:30",
        thumb: "https://img.youtube.com/vi/lj4848922tk/mqdefault.jpg"
    },
    {
        id: 23,
        title: "Tu Meri Zindagi Hai",
        artist: "Aashiqui",
        videoId: "oEg_iXEWlt4",
        duration: "5:55",
        thumb: "https://img.youtube.com/vi/oEg_iXEWlt4/mqdefault.jpg"
    },
    {
        id: 24,
        title: "Aane Se Uske Aaye Bahar",
        artist: "Mohammed Rafi",
        videoId: "GNTNnp5rk5E",
        duration: "4:45",
        thumb: "https://img.youtube.com/vi/GNTNnp5rk5E/mqdefault.jpg"
    },
    {
        id: 25,
        title: "Gawah Hai Chand Tare",
        artist: "Kumar Sanu, Alka Yagnik",
        videoId: "xeJN83GiA7U",
        duration: "5:40",
        thumb: "https://img.youtube.com/vi/xeJN83GiA7U/mqdefault.jpg"
    },
    {
        id: 26,
        title: "Shikwa Nahin Kisi Se Naseeb",
        artist: "Govinda, Kumar Sanu",
        videoId: "F6swWL3BexY",
        duration: "5:25",
        thumb: "https://img.youtube.com/vi/F6swWL3BexY/mqdefault.jpg"
    },
    {
        id: 27,
        title: "Bepanah Pyar Hai Aaja",
        artist: "Shreya Ghoshal",
        videoId: "XUZWenAoKbo",
        duration: "5:15",
        thumb: "https://img.youtube.com/vi/XUZWenAoKbo/mqdefault.jpg"
    },
    {
        id: 28,
        title: "Chand Ke Paar Chalo",
        artist: "Saahib Chopra",
        videoId: "ZBRmHLVyw28",
        duration: "5:05",
        thumb: "https://img.youtube.com/vi/ZBRmHLVyw28/mqdefault.jpg"
    },
    {
        id: 29,
        title: "Sochenge Tumhe Pyar",
        artist: "Deewana",
        videoId: "lFdSi01tpYM",
        duration: "5:50",
        thumb: "https://img.youtube.com/vi/lFdSi01tpYM/mqdefault.jpg"
    },
    {
        id: 30,
        title: "Kasam Khake Kaho",
        artist: "Alka Yagnik, Kumar Sanu",
        videoId: "ZfZPVSiNasI",
        duration: "5:35",
        thumb: "https://img.youtube.com/vi/ZfZPVSiNasI/mqdefault.jpg"
    },
    {
        id: 31,
        title: "Chand Taron Main Nazar Aaye",
        artist: "Udit Narayan, Sadhana Sargam",
        videoId: "9Z-F02dmuCQ",
        duration: "5:20",
        thumb: "https://img.youtube.com/vi/9Z-F02dmuCQ/mqdefault.jpg"
    },
    {
        id: 32,
        title: "Kisi Se Tum Pyar Karo",
        artist: "Kumar Sanu, Alka Yagnik",
        videoId: "-lDmXk8pBNI",
        duration: "5:45",
        thumb: "https://img.youtube.com/vi/-lDmXk8pBNI/mqdefault.jpg"
    },
    {
        id: 33,
        title: "Aye Mere Humsafar",
        artist: "Udit Narayan, Alka Yagnik",
        videoId: "sWqjZpBtcxc",
        duration: "5:30",
        thumb: "https://img.youtube.com/vi/sWqjZpBtcxc/mqdefault.jpg"
    },
    {
        id: 34,
        title: "Jabse Tumko Dekha Hai",
        artist: "Ajay Devgn, Kavita Krishnamurthy",
        videoId: "j6wdJWUKDyo",
        duration: "5:15",
        thumb: "https://img.youtube.com/vi/j6wdJWUKDyo/mqdefault.jpg"
    },
    {
        id: 35,
        title: "Har Dil Jo Pyar Karega",
        artist: "Udit Narayan, Alka Yagnik",
        videoId: "V0jFYD0PirU",
        duration: "5:40",
        thumb: "https://img.youtube.com/vi/V0jFYD0PirU/mqdefault.jpg"
    },
    {
        id: 36,
        title: "Dil Ke Badle Sanam",
        artist: "Kyon Ki It's Fate",
        videoId: "fvwyPGBOEgY",
        duration: "5:25",
        thumb: "https://img.youtube.com/vi/fvwyPGBOEgY/mqdefault.jpg"
    },
    {
        id: 37,
        title: "Jhanjhariya",
        artist: "Abhijeet Bhattacharya",
        videoId: "6C34aCdjJtM",
        duration: "5:10",
        thumb: "https://img.youtube.com/vi/6C34aCdjJtM/mqdefault.jpg"
    },
    {
        id: 38,
        title: "Hoshwalon Ko Khabar Kya",
        artist: "Jagjit Singh",
        videoId: "ag3ENMEV89o",
        duration: "5:55",
        thumb: "https://img.youtube.com/vi/ag3ENMEV89o/mqdefault.jpg"
    },
    {
        id: 39,
        title: "Kitaben Bahut Si",
        artist: "Baazigar",
        videoId: "ieu6xnwJxdA",
        duration: "5:05",
        thumb: "https://img.youtube.com/vi/ieu6xnwJxdA/mqdefault.jpg"
    },
    {
        id: 40,
        title: "Pyaar Ki Ek Kahani",
        artist: "Sonu Nigam, Shreya Ghosal",
        videoId: "JLqyUKT1PZc",
        duration: "5:30",
        thumb: "https://img.youtube.com/vi/JLqyUKT1PZc/mqdefault.jpg"
    },
    {
        id: 41,
        title: "Paas Woh Aane Lage",
        artist: "Kumar Sanu, Alka Yagnik",
        videoId: "plB0ytzIlqI",
        duration: "5:20",
        thumb: "https://img.youtube.com/vi/plB0ytzIlqI/mqdefault.jpg"
    },
    {
        id: 42,
        title: "Dil Hai Ki Manta Nahin",
        artist: "Anuradha Paudwal, Kumar Sanu",
        videoId: "C9efe0rjDlE",
        duration: "5:45",
        thumb: "https://img.youtube.com/vi/C9efe0rjDlE/mqdefault.jpg"
    },
    {
        id: 43,
        title: "Aapke Pyaar Mein",
        artist: "Alka Yagnik",
        videoId: "L6bSHDaDLyc",
        duration: "5:15",
        thumb: "https://img.youtube.com/vi/L6bSHDaDLyc/mqdefault.jpg"
    },
    {
        id: 44,
        title: "Saajan Saajan O Mere Sajan",
        artist: "Alka Yagnik, Kumar Sanu",
        videoId: "s7qOjXlW7d4",
        duration: "5:35",
        thumb: "https://img.youtube.com/vi/s7qOjXlW7d4/mqdefault.jpg"
    },
    {
        id: 45,
        title: "Pehla Pehla Pyar Hai",
        artist: "Hum Aapke Hain Koun",
        videoId: "w2iozAbNXAo",
        duration: "5:50",
        thumb: "https://img.youtube.com/vi/w2iozAbNXAo/mqdefault.jpg"
    },
    {
        id: 46,
        title: "Tu Shayar Hain Main Teri Shayari",
        artist: "Alka Yagnik",
        videoId: "Fjzzvbskhu4",
        duration: "5:25",
        thumb: "https://img.youtube.com/vi/Fjzzvbskhu4/mqdefault.jpg"
    },
    {
        id: 47,
        title: "Badi Mushkil Baba Badi Mushkil",
        artist: "Lajja",
        videoId: "6pvrkOyKenI",
        duration: "5:10",
        thumb: "https://img.youtube.com/vi/6pvrkOyKenI/mqdefault.jpg"
    },
    {
        id: 48,
        title: "Humko Aaj Kal Hai Intezaar",
        artist: "Bappi Lahiri, Madhuri",
        videoId: "Po68CWcHP8",
        duration: "5:40",
        thumb: "https://img.youtube.com/vi/Po68CWcHP8/mqdefault.jpg"
    },
    {
        id: 49,
        title: "O Re Piya",
        artist: "Rahat Fateh Ali Khan",
        videoId: "iv7lcUkFVSc",
        duration: "5:30",
        thumb: "https://img.youtube.com/vi/iv7lcUkFVSc/mqdefault.jpg"
    },
    {
        id: 50,
        title: "Tumse Milne Ki Tamanna Hai",
        artist: "Saajan",
        videoId: "thjRNwjmAdQ",
        duration: "5:20",
        thumb: "https://img.youtube.com/vi/thjRNwjmAdQ/mqdefault.jpg"
    },
    {
        id: 51,
        title: "Tere Ishq Mein Pagal Ho Gaya",
        artist: "Humko Tumse Pyaar Hai",
        videoId: "vN_7VqXe_0U",
        duration: "5:15",
        thumb: "https://img.youtube.com/vi/vN_7VqXe_0U/mqdefault.jpg"
    },
    {
        id: 52,
        title: "Pehli Pehli Baar Mohabbat Ki Hai",
        artist: "Kumar Sanu, Alka Yagnik",
        videoId: "cBGDDBHN22U",
        duration: "5:45",
        thumb: "https://img.youtube.com/vi/cBGDDBHN22U/mqdefault.jpg"
    },
    {
        id: 53,
        title: "Kyon Ki Itna Pyar",
        artist: "Kyon Ki It's Fate",
        videoId: "vnCIjfkPooo",
        duration: "5:05",
        thumb: "https://img.youtube.com/vi/vnCIjfkPooo/mqdefault.jpg"
    },
    {
        id: 54,
        title: "Jeena Sirf Mere Liye",
        artist: "Alka Yagnik, Babul Supriyo",
        videoId: "2NN4zD16MUw",
        duration: "5:30",
        thumb: "https://img.youtube.com/vi/2NN4zD16MUw/mqdefault.jpg"
    },
    {
        id: 55,
        title: "Dil Hai Tumhaara",
        artist: "Alka Yagnik, Kumar Sanu",
        videoId: "iIqou2YxDDw",
        duration: "5:25",
        thumb: "https://img.youtube.com/vi/iIqou2YxDDw/mqdefault.jpg"
    },
    {
        id: 56,
        title: "Waada Raha Sanam",
        artist: "Alka Yagnik, Abhijeet",
        videoId: "9b0iydtDZLU",
        duration: "5:40",
        thumb: "https://img.youtube.com/vi/9b0iydtDZLU/mqdefault.jpg"
    },
    {
        id: 57,
        title: "Saathiya Tune Kya Kiya",
        artist: "Love",
        videoId: "9J_isuHe8bw",
        duration: "5:15",
        thumb: "https://img.youtube.com/vi/9J_isuHe8bw/mqdefault.jpg"
    },
    {
        id: 58,
        title: "Ghoonghat Ki Aad Se",
        artist: "Hum Hain Rahi Pyar Ke",
        videoId: "cBw4H6Dx4vc",
        duration: "5:35",
        thumb: "https://img.youtube.com/vi/cBw4H6Dx4vc/mqdefault.jpg"
    },
    {
        id: 59,
        title: "Chori Chori Dil Tera Churayenge",
        artist: "Kumar Sanu",
        videoId: "B8MSjHTo154",
        duration: "5:20",
        thumb: "https://img.youtube.com/vi/B8MSjHTo154/mqdefault.jpg"
    },
    {
        id: 60,
        title: "Aankhon Mein Base Ho Tum",
        artist: "Alka Yagnik",
        videoId: "w2nAmviVtbE",
        duration: "5:10",
        thumb: "https://img.youtube.com/vi/w2nAmviVtbE/mqdefault.jpg"
    },
    {
        id: 61,
        title: "Dil Mein Dard Sa Jaga Hai",
        artist: "Alka Yagnik, Udit Narayan",
        videoId: "zm4HlFRQ6uE",
        duration: "5:45",
        thumb: "https://img.youtube.com/vi/zm4HlFRQ6uE/mqdefault.jpg"
    },
    {
        id: 62,
        title: "Tu Dharti Pe Chaahe Jahan Bhi Rahegi",
        artist: "Kumar Sanu, Alka Yagnik",
        videoId: "RQqYw5nJK7A",
        duration: "5:30",
        thumb: "https://img.youtube.com/vi/RQqYw5nJK7A/mqdefault.jpg"
    },
    {
        id: 63,
        title: "Pucho Zara Pucho",
        artist: "Raja Hindustani",
        videoId: "GBRifFvAJX8",
        duration: "5:25",
        thumb: "https://img.youtube.com/vi/GBRifFvAJX8/mqdefault.jpg"
    },
    {
        id: 64,
        title: "Odhani Odh Ke Nachu",
        artist: "Udit Narayan, Alka Yagnik",
        videoId: "RX3Xenjc-GE",
        duration: "5:15",
        thumb: "https://img.youtube.com/vi/RX3Xenjc-GE/mqdefault.jpg"
    },
    {
        id: 65,
        title: "Meri Mehbooba",
        artist: "Kumar Sanu, Alka Yagnik",
        videoId: "k2CuG5E4OAo",
        duration: "5:40",
        thumb: "https://img.youtube.com/vi/k2CuG5E4OAo/mqdefault.jpg"
    },
    {
        id: 66,
        title: "Kyo Kisi Ko",
        artist: "Udit Narayan, Himesh Reshammiya",
        videoId: "iCZfjggJg3M",
        duration: "5:05",
        thumb: "https://img.youtube.com/vi/iCZfjggJg3M/mqdefault.jpg"
    },
    {
        id: 67,
        title: "Wadiye Ishq Se Aaya Hai Mera Shahzada",
        artist: "Romantic Song",
        videoId: "RPRRqOJ1nUw",
        duration: "5:35",
        thumb: "https://img.youtube.com/vi/RPRRqOJ1nUw/mqdefault.jpg"
    }
];

// ===== STATE =====
let player;
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// ===== YOUTUBE PLAYER SETUP =====
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
            'showinfo': 0
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
                 onerror="this.src='https://via.placeholder.com/60x45/E74C3C/FFFFFF?text='">
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
    const npTitle = document.getElementById('npTitle');
    const npArtist = document.getElementById('npArtist');
    
    if (npTitle) npTitle.textContent = song.title;
    if (npArtist) npArtist.textContent = song.artist;
}

// ===== CONTROLS =====
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
    if (icon) {
        icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    }
    renderPlaylist();
}

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

// Event Listeners for Controls
document.addEventListener('DOMContentLoaded', () => {
    const btnPlay = document.getElementById('btnPlay');
    const btnNext = document.getElementById('btnNext');
    const btnPrev = document.getElementById('btnPrev');
    const btnShuffle = document.getElementById('btnShuffle');
    const btnRepeat = document.getElementById('btnRepeat');
    
    if (btnPlay) btnPlay.addEventListener('click', togglePlay);
    if (btnNext) btnNext.addEventListener('click', nextSong);
    if (btnPrev) btnPrev.addEventListener('click', prevSong);
    
    if (btnShuffle) {
        btnShuffle.addEventListener('click', function() {
            isShuffle = !isShuffle;
            this.style.color = isShuffle ? '#E74C3C' : '#ffffff';
        });
    }
    
    if (btnRepeat) {
        btnRepeat.addEventListener('click', function() {
            isRepeat = !isRepeat;
            this.style.color = isRepeat ? '#E74C3C' : '#ffffff';
        });
    }
});

// ===== ONLINE COUNT (Simulated) =====
function simulateOnlineCount() {
    const count = 25 + Math.floor(Math.random() * 20);
    const el1 = document.getElementById('onlineCount');
    const el2 = document.getElementById('statOnline');
    
    if (el1) el1.textContent = count;
    if (el2) el2.textContent = count;
}

setInterval(simulateOnlineCount, 8000);
simulateOnlineCount();

// ===== UPDATE TIME =====
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

console.log('%c🚌 College Way — Bus Playlist', 'color: #E74C3C; font-size: 20px; font-weight: bold;');
console.log('%c67 Songs Loaded | Use Brave Browser for Ad-Free Experience', 'color: #2ecc71; font-size: 14px;');
