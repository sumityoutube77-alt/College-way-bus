// ===== COMPLETE 67 SONGS PLAYLIST FROM CSV =====
const playlist = [
    { id: 1, title: "Chand Se Parda Keejiye", artist: "Kumar Sanu", duration: "4:30" },
    { id: 2, title: "Kisi Din Banoongi Main Raja Ki Rani", artist: "Madhuri Dixit", duration: "5:12" },
    { id: 3, title: "Phool Mangu Na Bahar Mangu", artist: "Madhuri Dixit, Sanjay Kapoor", duration: "5:45" },
    { id: 4, title: "Tujhe Na Dekhu Toh", artist: "Kumar Sanu, Alka Yagnik", duration: "6:02" },
    { id: 5, title: "Dheere Dheere Se Meri Zindagi Mein Aana", artist: "Aashiqui", duration: "5:20" },
    { id: 6, title: "Ek Tere Hi Chehre Pe Pyar Aaya", artist: "Anuradha Paudwal, Kumar Sanu", duration: "5:15" },
    { id: 7, title: "Bas Ek Sanam Chahiye Aashiqui Ke Liye", artist: "Kumar Sanu", duration: "6:35" },
    { id: 8, title: "Mera Dil Bhi Kitna Pagal Hai", artist: "Saajan", duration: "5:48" },
    { id: 9, title: "Tumhein Apna Banane Ki Kasam", artist: "Kumar Sanu, Anuradha Paudwal", duration: "6:10" },
    { id: 10, title: "Tum Dil Ki Dhadkan Mein", artist: "Dhadkan", duration: "5:30" },
    { id: 11, title: "Dekhne Walon Ne Kya Kaha", artist: "Salman Khan, Rani Mukherjee", duration: "5:25" },
    { id: 12, title: "Is Tarah Aashiqui Ka Asar Chod Jaunga", artist: "Kumar Sanu", duration: "5:40" },
    { id: 13, title: "Tune Zindagi Mein", artist: "Humraaz", duration: "5:55" },
    { id: 14, title: "Teri Umeed Tera Intezar", artist: "Deewana", duration: "6:15" },
    { id: 15, title: "Aaye Ho Meri Zindagi Mein", artist: "Udit Narayan", duration: "6:05" },
    { id: 16, title: "Kaash Koi Ladka Mujhe Pyar Karta", artist: "Kumar Sanu, Alka Yagnik", duration: "5:50" },
    { id: 17, title: "Beshak Tum Meri Mohabbat Ho", artist: "Kumar Sanu, Alka Yagnik", duration: "5:35" },
    { id: 18, title: "Aksar Is Duniya Mein", artist: "Dhadkan", duration: "5:20" },
    { id: 19, title: "Jeeta Tha Jiske Liye", artist: "Dilwale", duration: "5:45" },
    { id: 20, title: "Mujhe Jine Nahi Deti Hai Yaad Teri", artist: "Bomb Blast", duration: "5:10" },
    { id: 21, title: "Mera Chand Mujhe Aaya Hai Nazar", artist: "Kumar Sanu", duration: "5:00" },
    { id: 22, title: "Aankh Hai Bhari Bhari", artist: "Kumar Sanu", duration: "5:30" },
    { id: 23, title: "Tu Meri Zindagi Hai", artist: "Aashiqui", duration: "5:55" },
    { id: 24, title: "Aane Se Uske Aaye Bahar", artist: "Mohammed Rafi", duration: "4:45" },
    { id: 25, title: "Gawah Hai Chand Tare", artist: "Kumar Sanu, Alka Yagnik", duration: "5:40" },
    { id: 26, title: "Shikwa Nahin Kisi Se Naseeb", artist: "Govinda, Mamta Kulkarni", duration: "5:25" },
    { id: 27, title: "Bepanah Pyar Hai Aaja", artist: "Shreya Ghoshal", duration: "5:15" },
    { id: 28, title: "Chand Ke Paar Chalo", artist: "Saahib Chopra", duration: "5:05" },
    { id: 29, title: "Sochenge Tumhe Pyar", artist: "Deewana", duration: "5:50" },
    { id: 30, title: "Kasam Khake Kaho", artist: "Alka Yagnik, Kumar Sanu", duration: "5:35" },
    { id: 31, title: "Chand Taron Main Nazar Aaye", artist: "Udit Narayan, Sadhana Sargam", duration: "5:20" },
    { id: 32, title: "Kisi Se Tum Pyar Karo", artist: "Kumar Sanu, Alka Yagnik", duration: "5:45" },
    { id: 33, title: "Aye Mere Humsafar", artist: "Udit Narayan, Alka Yagnik", duration: "5:30" },
    { id: 34, title: "Jabse Tumko Dekha Hai", artist: "Ajay Devgn, Kavita Krishnamurthy", duration: "5:15" },
    { id: 35, title: "Har Dil Jo Pyar Karega", artist: "Udit Narayan, Alka Yagnik", duration: "5:40" },
    { id: 36, title: "Dil Ke Badle Sanam", artist: "Kyon Ki It's Fate", duration: "5:25" },
    { id: 37, title: "Jhanjhariya", artist: "Abhijeet Bhattacharya", duration: "5:10" },
    { id: 38, title: "Hoshwalon Ko Khabar Kya", artist: "Jagjit Singh", duration: "5:55" },
    { id: 39, title: "Kitaben Bahut Si", artist: "Baazigar", duration: "5:05" },
    { id: 40, title: "Pyaar Ki Ek Kahani", artist: "Sonu Nigam, Shreya Ghoshal", duration: "5:30" },
    { id: 41, title: "Paas Woh Aane Lage", artist: "Kumar Sanu, Alka Yagnik", duration: "5:20" },
    { id: 42, title: "Dil Hai Ki Manta Nahin", artist: "Anuradha Paudwal, Kumar Sanu", duration: "5:45" },
    { id: 43, title: "Aapke Pyaar Mein", artist: "Alka Yagnik", duration: "5:15" },
    { id: 44, title: "Saajan Saajan O Mere Sajan", artist: "Alka Yagnik, Kumar Sanu", duration: "5:35" },
    { id: 45, title: "Pehla Pehla Pyar Hai", artist: "Hum Aapke Hain Koun", duration: "5:50" },
    { id: 46, title: "Tu Shayar Hain Main Teri Shayari", artist: "Alka Yagnik", duration: "5:25" },
    { id: 47, title: "Badi Mushkil Baba Badi Mushkil", artist: "Lajja", duration: "5:10" },
    { id: 48, title: "Humko Aaj Kal Hai Intezaar", artist: "Bappi Lahiri, Madhuri", duration: "5:40" },
    { id: 49, title: "O Re Piya", artist: "Rahat Fateh Ali Khan", duration: "5:30" },
    { id: 50, title: "Tumse Milne Ki Tamanna Hai", artist: "Saajan", duration: "5:20" },
    { id: 51, title: "Tere Ishq Mein Pagal Ho Gaya", artist: "Humko Tumse Pyaar Hai", duration: "5:15" },
    { id: 52, title: "Pehli Pehli Baar Mohabbat Ki Hai", artist: "Kumar Sanu, Alka Yagnik", duration: "5:45" },
    { id: 53, title: "Kyon Ki Itna Pyar", artist: "Kyon Ki It's Fate", duration: "5:05" },
    { id: 54, title: "Jeena Sirf Mere Liye", artist: "Alka Yagnik, Babul Supriyo", duration: "5:30" },
    { id: 55, title: "Dil Hai Tumhaara", artist: "Alka Yagnik, Kumar Sanu", duration: "5:25" },
    { id: 56, title: "Waada Raha Sanam", artist: "Alka Yagnik, Abhijeet", duration: "5:40" },
    { id: 57, title: "Saathiya Tune Kya Kiya", artist: "Love", duration: "5:15" },
    { id: 58, title: "Ghoonghat Ki Aad Se", artist: "Hum Hain Rahi Pyar Ke", duration: "5:35" },
    { id: 59, title: "Chori Chori Dil Tera Churayenge", artist: "Kumar Sanu", duration: "5:20" },
    { id: 60, title: "Aankhon Mein Base Ho Tum", artist: "Alka Yagnik", duration: "5:10" },
    { id: 61, title: "Dil Mein Dard Sa Jaga Hai", artist: "Alka Yagnik, Udit Narayan", duration: "5:45" },
    { id: 62, title: "Tu Dharti Pe Chaahe Jahan Bhi Rahegi", artist: "Kumar Sanu, Alka Yagnik", duration: "5:30" },
    { id: 63, title: "Pucho Zara Pucho", artist: "Raja Hindustani", duration: "5:25" },
    { id: 64, title: "Odhani Odh Ke Nachu", artist: "Udit Narayan, Alka Yagnik", duration: "5:15" },
    { id: 65, title: "Meri Mehbooba", artist: "Kumar Sanu, Alka Yagnik", duration: "5:40" },
    { id: 66, title: "Kyo Kisi Ko", artist: "Udit Narayan, Himesh Reshammiya", duration: "5:05" },
    { id: 67, title: "Wadiye Ishq Se Aaya Hai Mera Shahzada", artist: "Romantic Song", duration: "5:35" }
];

// ===== STATE =====
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

// ===== INITIALIZE =====
function initPlayer() {
    renderPlaylist();
    updateTime();
    simulateOnlineCount();
    
    // Load audio source
    const source = audioPlayer.querySelector('source');
    if (source) {
        audioPlayer.load();
    }
}

// ===== RENDER PLAYLIST =====
function renderPlaylist() {
    const container = document.getElementById('playlistContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    playlist.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        item.innerHTML = `
            <span class="song-number">${index + 1}</span>
            <img class="song-thumb" src="audio/bus-cover.jpg" alt="${song.title}">
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <span class="song-duration">${song.duration}</span>
            <i class="fas fa-play play-icon"></i>
        `;
        
        item.addEventListener('click', () => {
            // Calculate timestamp based on song position
            const estimatedTime = index * 300; // Approx 5 min per song
            audioPlayer.currentTime = estimatedTime;
            if (!isPlaying) {
                audioPlayer.play().then(() => {
                    isPlaying = true;
                    updatePlayButton();
                }).catch(err => console.log(err));
            }
        });
        
        container.appendChild(item);
    });
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

// ===== CONTROLS =====
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
    
    document.getElementById('btnShuffle').addEventListener('click', function() {
        isShuffle = !isShuffle;
        this.style.color = isShuffle ? '#E74C3C' : '#ffffff';
    });
    
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

console.log('🚌 Bus Wali Playlist Loaded - 67 Songs Ready!');
