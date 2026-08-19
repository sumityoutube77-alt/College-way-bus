// ===== SIMPLE ONLINE COUNT =====
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

console.log('%c🚌 College Way — Bus Playlist', 'color: #E74C3C; font-size: 20px; font-weight: bold;');
console.log('%cUse Brave Browser for Ad-Free Experience', 'color: #2ecc71; font-size: 14px;');
