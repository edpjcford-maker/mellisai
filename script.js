// Initial Playlist - All 15 songs
let songs = [
    {
        title: "Singalathu Chinnakuyile",
        artist: "Ilaiyaraaja, S.P.B, K.S. Chithra",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497990/Singalathu_Chinnakuyile_Ilaiyaraaja_S.P._Balasubrahmanyam_K.S._Chithra._lpcjtf.mp3"
    },
    {
        title: "Rettaikiligal",
        artist: "Unknown Artist",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497988/Rettaikiligal_yuhvtg.mp3"
    },
    {
        title: "Sariyo Sariyo Naan",
        artist: "Unknown Artist",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497986/Sariyo_Sariyo_Naan_fm4wga.mp3"
    },
    {
        title: "Ye Rasaathi",
        artist: "Ilaiyaraaja, Malaysia Vasudevan, K.S. Chithra",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497975/Ye_Rasaathi_Ilaiyaraaja_Malaysia_Vasudevan_K.S._Chithra._c0cmlw.mp3"
    },
    {
        title: "Rathiriyil Poothirukkum",
        artist: "Thanga Magan",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497973/Rathiriyil_Poothirukkum_Thanga_Magan_Movie_Audio_Song_flxv97.mp3"
    },
    {
        title: "Sundari Neeyum",
        artist: "Ilaiyaraaja, Kamal Haasan, S. Janaki",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497971/Sundari_Neeyum_Ilaiyaraaja_Kamal_Haasan_S._Janaki_zqjgsd.mp3"
    },
    {
        title: "Thedum Kann Paarvai",
        artist: "S. P. Balasubrahmanyam, S. Janaki",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497971/Thedum_Kann_Paarvai_S._P._Balasubrahmanyam_S._Janaki_cml53e.mp3"
    },
    {
        title: "Thaalattudhe Vaanam",
        artist: "Unknown Artist",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497970/Thaalattudhe_Vaanam._fw1aes.mp3"
    },
    {
        title: "Sengamalam Sirikuthu",
        artist: "Isainani Ilaiyaraaja",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497969/Sengamalam_Sirikuthu_-_%E0%AE%9A%E0%AF%86%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AE%B2%E0%AE%AE%E0%AF%8D_%E0%AE%9A%E0%AE%BF%E0%AE%B0%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%A4%E0%AF%81_.isainaniilayaraja_ilayarajahitsongs._bpharr.mp3"
    },
    {
        title: "Ther Kondu",
        artist: "Unknown Artist",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497968/Ther_Kondu_wuncoz.mp3"
    },
    {
        title: "Solai Poovil Malai Thendral",
        artist: "Ilaiyaraaja, S.P.B, S. Janaki",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497968/Solai_Poovil_Malai_Thendral_Ilaiyaraaja_S.P._Balasubrahmanyam_S._Janaki._IsaiMani_qb9lpv.mp3"
    },
    {
        title: "Sandhana Kumba",
        artist: "Mano, Uma Ramanan",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497967/Sandhana_Kumba_._Singers_Mano_Uma_Ramanan._IsaiMani_faf2rz.mp3"
    },
    {
        title: "Semmeene Semmeene",
        artist: "Ilaiyaraaja",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497966/Semmeene_Semmeene_Ilayaraja_Super_Hit_Audio_Song_ih2kfm.mp3"
    },
    {
        title: "Roja Ondru",
        artist: "Ilaiyaraaja, S.P.B, S. Janaki",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497965/Roja_Ondru_Ilaiyaraaja_S.P._Balasubrahmanyam_S._Janaki_snxdea.mp3"
    },
    {
        title: "Un Manasula Paattuthaan",
        artist: "Ilaiyaraaja, Mano, K.S. Chithra",
        album: "Mellisai Essentials",
        dateAdded: "Oct 12, 2023",
        url: "https://res.cloudinary.com/df7mpkvzn/video/upload/v1778497965/Un_Manasula_Paattuthaan_Happy_Ilaiyaraaja_Mano_K.S._Chithra._b4bqnk.mp3"
    }
];

const DEFAULT_CLOUDINARY_CLOUD_NAME = 'df7mpkvzn';
const DEFAULT_CLOUDINARY_API_KEY = '219494249645237';
const DEFAULT_CLOUDINARY_UPLOAD_PRESET = 'siashash';

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat all, 2: repeat one
let isUploading = false;

// Load songs from localStorage or use defaults
function loadSongsFromStorage() {
    const savedSongs = localStorage.getItem('mellisai_songs');
    if (savedSongs) {
        try {
            return JSON.parse(savedSongs);
        } catch (e) {
            console.log('Error loading saved songs:', e);
            return songs;
        }
    }
    return songs;
}

// Save songs to localStorage
function saveSongsToStorage() {
    try {
        localStorage.setItem('mellisai_songs', JSON.stringify(songs));
        console.log('Songs saved to storage');
    } catch (e) {
        console.log('Error saving songs:', e);
    }
}

// Load saved songs if available
songs = loadSongsFromStorage();

// Cloudinary Settings
let cloudinarySettings = {
    cloudName: DEFAULT_CLOUDINARY_CLOUD_NAME,
    uploadPreset: localStorage.getItem('cloudinary_upload_preset') || DEFAULT_CLOUDINARY_UPLOAD_PRESET,
    apiKey: DEFAULT_CLOUDINARY_API_KEY
};

if (looksLikeApiSecret(cloudinarySettings.uploadPreset)) {
    cloudinarySettings.uploadPreset = DEFAULT_CLOUDINARY_UPLOAD_PRESET;
    localStorage.removeItem('cloudinary_upload_preset');
}

localStorage.setItem('cloudinary_cloud_name', DEFAULT_CLOUDINARY_CLOUD_NAME);
localStorage.setItem('cloudinary_api_key', DEFAULT_CLOUDINARY_API_KEY);
localStorage.setItem('cloudinary_upload_preset', DEFAULT_CLOUDINARY_UPLOAD_PRESET);

// DOM Elements
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playAllBtn = document.getElementById('play-all-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const progressWrapper = document.getElementById('progress-wrapper');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const currentTitle = document.getElementById('current-title');
const currentArtist = document.getElementById('current-artist');
const volumeBar = document.getElementById('volume-bar');
const volumeWrapper = document.getElementById('volume-wrapper');
const volumeIcon = document.getElementById('volume-icon');
const songListContainer = document.getElementById('song-list');
const totalSongsEl = document.getElementById('total-songs');
const uploadInput = document.getElementById('upload-song');
const shuffleBtn = document.querySelector('.shuffle-btn');
const repeatBtn = document.querySelector('.repeat-btn');

// Modal Elements
const cloudinaryModal = document.getElementById('cloudinary-modal');
const uploadProgressModal = document.getElementById('upload-progress-modal');
const cloudinarySettingsBtn = document.getElementById('cloudinary-settings-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const cancelModalBtn = document.getElementById('cancel-modal-btn');
const saveSettingsBtn = document.getElementById('save-cloudinary-settings-btn');
const cloudinaryCloudNameInput = document.getElementById('cloudinary-cloud-name');
const cloudinaryUploadPresetInput = document.getElementById('cloudinary-upload-preset');
const cloudinaryApiKeyInput = document.getElementById('cloudinary-api-key');
const uploadProgressFill = document.getElementById('upload-progress-fill');
const uploadStatusText = document.getElementById('upload-status-text');
const uploadProgressTitle = document.getElementById('upload-progress-title');
const uploadProgressPercent = document.getElementById('upload-progress-percent');
const uploadDebugText = document.getElementById('upload-debug-text');
const startupDebugBanner = document.getElementById('startup-debug-banner');
const startupDebugList = document.getElementById('startup-debug-list');

// Mobile sidebar toggle
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');

// Menu functionality
menuBtn?.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeSidebarBtn?.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// Close sidebar when clicking on a nav item
document.querySelectorAll('.nav-item, .playlist-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
});

// Format Time
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Render Playlist
function renderPlaylist() {
    songListContainer.innerHTML = '';
    totalSongsEl.textContent = `${songs.length} songs`;
    
    songs.forEach((song, index) => {
        const songEl = document.createElement('div');
        songEl.classList.add('song-item');
        if (index === currentSongIndex && isPlaying) {
            songEl.classList.add('active');
        }
        
        songEl.innerHTML = `
            <div class="song-num">${index + 1}</div>
            <div class="song-info">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231db954;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%231aa34a;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-size='60' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='white' font-family='Arial'%3E♪%3C/text%3E%3C/svg%3E" alt="Cover" class="song-thumb" title="${song.album}">
                <div class="song-details-list">
                    <span class="song-title">${song.title}</span>
                    <span class="song-artist">${song.artist}</span>
                </div>
            </div>
            <div class="song-album desktop-only">${song.album}</div>
            <div class="song-date desktop-only">${song.dateAdded}</div>
            <div class="song-duration">-:--</div>
        `;
        
        songEl.addEventListener('click', () => {
            loadSong(index);
            playSong();
        });
        
        songListContainer.appendChild(songEl);
    });
}

// Load Song
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    audioPlayer.src = song.url;
    currentTitle.textContent = song.title;
    currentArtist.textContent = song.artist;
    
    // Update active class in playlist
    document.querySelectorAll('.song-item').forEach((item, i) => {
        if (i === index) item.classList.add('active');
        else item.classList.remove('active');
    });
}

// Play & Pause Functions
function playSong() {
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    playAllBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    audioPlayer.play().catch(err => console.log('Play error:', err));
    renderPlaylist();
}

function pauseSong() {
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    playAllBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    audioPlayer.pause();
    renderPlaylist();
}

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) pauseSong();
    else playSong();
});

playAllBtn.addEventListener('click', () => {
    if (isPlaying) pauseSong();
    else playSong();
});

// Next & Prev Functions
function nextSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Shuffle functionality
shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active');
});

// Repeat functionality
repeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    repeatBtn.classList.toggle('active', repeatMode > 0);
    
    if (repeatMode === 2) {
        repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i><span style="font-size: 10px; position: absolute; margin-top: 8px;">1</span>';
    } else {
        repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
    }
});

// Auto play next song when ended
audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 2) {
        audioPlayer.currentTime = 0;
        playSong();
    } else {
        nextSong();
    }
});

// Update Progress Bar
audioPlayer.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (duration ? (currentTime / duration) * 100 : 0);
    progressBar.style.width = `${progressPercent}%`;
    
    currentTimeEl.textContent = formatTime(currentTime);
    if (!isNaN(duration)) {
        totalTimeEl.textContent = formatTime(duration);
    }
});

audioPlayer.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(audioPlayer.duration);
    
    // Update duration in playlist
    const activeSongEl = document.querySelectorAll('.song-item')[currentSongIndex];
    if(activeSongEl) {
        const durationEl = activeSongEl.querySelector('.song-duration');
        if(durationEl) durationEl.textContent = formatTime(audioPlayer.duration);
    }
});

// Seek Progress
progressWrapper.addEventListener('click', (e) => {
    const width = progressWrapper.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    
    if (duration) {
        audioPlayer.currentTime = (clickX / width) * duration;
    }
});

// Volume Control
let currentVolume = 0.8;
audioPlayer.volume = currentVolume;
volumeBar.style.width = `${currentVolume * 100}%`;

volumeWrapper.addEventListener('click', (e) => {
    const width = volumeWrapper.clientWidth;
    const clickX = e.offsetX;
    currentVolume = Math.min(1, Math.max(0, clickX / width));
    
    audioPlayer.volume = currentVolume;
    volumeBar.style.width = `${currentVolume * 100}%`;
    updateVolumeIcon();
});

function updateVolumeIcon() {
    if (audioPlayer.volume === 0) {
        volumeIcon.className = 'fa-solid fa-volume-xmark';
    } else if (audioPlayer.volume < 0.5) {
        volumeIcon.className = 'fa-solid fa-volume-low';
    } else {
        volumeIcon.className = 'fa-solid fa-volume-high';
    }
}

volumeIcon.addEventListener('click', () => {
    if (audioPlayer.volume > 0) {
        currentVolume = audioPlayer.volume;
        audioPlayer.volume = 0;
        volumeBar.style.width = '0%';
    } else {
        audioPlayer.volume = currentVolume;
        volumeBar.style.width = `${currentVolume * 100}%`;
    }
    updateVolumeIcon();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.target === document.body || e.target.classList.contains('main-content')) {
        if (e.code === 'Space') {
            e.preventDefault();
            if (isPlaying) pauseSong();
            else playSong();
        }
    }
});

// Cloudinary Modal Functions
function loadCloudinarySettings() {
    cloudinarySettings.cloudName = DEFAULT_CLOUDINARY_CLOUD_NAME;
    cloudinarySettings.apiKey = DEFAULT_CLOUDINARY_API_KEY;
    cloudinaryCloudNameInput.value = cloudinarySettings.cloudName;
    cloudinaryUploadPresetInput.value = cloudinarySettings.uploadPreset;
    cloudinaryApiKeyInput.value = cloudinarySettings.apiKey;
}

function openCloudinaryModal() {
    loadCloudinarySettings();
    cloudinaryModal.classList.add('show');
}

function closeCloudinaryModal() {
    cloudinaryModal.classList.remove('show');
}

function showUploadProgress() {
    uploadProgressTitle.textContent = 'Uploading to Cloudinary...';
    uploadProgressPercent.textContent = '0%';
    uploadProgressFill.style.width = '0%';
    uploadDebugText.textContent = '';
    uploadDebugText.classList.remove('show');
    uploadProgressModal.classList.add('show');
}

function hideUploadProgress() {
    uploadProgressModal.classList.remove('show');
}

function updateUploadProgress(percent, message) {
    const safePercent = Math.max(0, Math.min(100, Math.round(percent)));
    uploadProgressFill.style.width = `${safePercent}%`;
    uploadProgressPercent.textContent = `${safePercent}%`;
    uploadStatusText.textContent = message;
}

function setUploadState(uploading) {
    isUploading = uploading;
    uploadInput.disabled = uploading;
}

function addStartupDebug(message) {
    if (!startupDebugBanner || !startupDebugList) return;

    startupDebugBanner.hidden = false;

    const item = document.createElement('div');
    item.className = 'startup-debug-item';
    item.textContent = message;
    startupDebugList.appendChild(item);
}

function runStartupDiagnostics() {
    const stylesheetLink = document.querySelector('link[href="styles.css"]');
    const scriptTag = document.querySelector('script[src="script.js"]');
    const coverImages = document.querySelectorAll('img[src="assets/default_cover.png"]');

    if (!stylesheetLink) {
        addStartupDebug('styles.css link tag was not found in index.html.');
    }

    if (!scriptTag) {
        addStartupDebug('script.js script tag was not found in index.html.');
    }

    coverImages.forEach((image) => {
        image.addEventListener('error', () => {
            addStartupDebug(`Image failed to load: ${image.getAttribute('src')}. Check that /assets/default_cover.png exists on the server.`);
        }, { once: true });
    });

    window.addEventListener('error', (event) => {
        const filename = event.filename ? ` in ${event.filename}` : '';
        addStartupDebug(`JavaScript error${filename}: ${event.message}`);
    });

    window.addEventListener('unhandledrejection', (event) => {
        const reason = event.reason?.message || String(event.reason);
        addStartupDebug(`Unhandled promise rejection: ${reason}`);
    });

    const navTiming = performance.getEntriesByType?.('navigation')?.[0];
    if (navTiming && navTiming.type === 'reload') {
        addStartupDebug('Page reloaded successfully. If the UI still looks broken, check browser console/network for blocked CDN files.');
    }
}

function showUploadDebug(details) {
    if (!details) {
        uploadDebugText.textContent = '';
        uploadDebugText.classList.remove('show');
        return;
    }

    uploadDebugText.textContent = details;
    uploadDebugText.classList.add('show');
}

function looksLikeApiSecret(value) {
    return typeof value === 'string' && /^[A-Za-z0-9_-]{20,}$/.test(value);
}

function createSongFromUpload(file, uploadedUrl, response = {}) {
    const readableTitle = response.original_filename || file.name.replace(/\.[^/.]+$/, "");

    return {
        title: readableTitle || "Uploaded Song",
        artist: "Cloudinary Upload",
        album: "Your Uploads",
        dateAdded: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        url: uploadedUrl,
        publicId: response.public_id || '',
        bytes: response.bytes || file.size
    };
}

function addUploadedSongToPlaylist(song) {
    songs.unshift(song);
    currentSongIndex = 0;
    saveSongsToStorage();
    renderPlaylist();
    loadSong(currentSongIndex);
}

// Cloudinary Settings Event Listeners
cloudinarySettingsBtn.addEventListener('click', openCloudinaryModal);
closeModalBtn.addEventListener('click', closeCloudinaryModal);
cancelModalBtn.addEventListener('click', closeCloudinaryModal);

saveSettingsBtn.addEventListener('click', () => {
    cloudinarySettings.uploadPreset = cloudinaryUploadPresetInput.value.trim();
    cloudinarySettings.cloudName = DEFAULT_CLOUDINARY_CLOUD_NAME;
    cloudinarySettings.apiKey = DEFAULT_CLOUDINARY_API_KEY;
    
    if (!cloudinarySettings.cloudName) {
        alert('Please enter your Cloudinary Cloud Name');
        return;
    }

    if (!cloudinarySettings.uploadPreset) {
        showNotification('Please enter your unsigned upload preset', 'error');
        cloudinaryUploadPresetInput.focus();
        return;
    }

    if (looksLikeApiSecret(cloudinarySettings.uploadPreset)) {
        showNotification('That looks like an API secret, not an upload preset. Use the unsigned preset name from Cloudinary Settings -> Upload.', 'error');
        cloudinaryUploadPresetInput.focus();
        return;
    }
    
    localStorage.setItem('cloudinary_cloud_name', cloudinarySettings.cloudName);
    localStorage.setItem('cloudinary_upload_preset', cloudinarySettings.uploadPreset);
    localStorage.setItem('cloudinary_api_key', cloudinarySettings.apiKey);
    
    showNotification('Cloudinary upload preset saved!', 'success');
    closeCloudinaryModal();
});

// Close modal when clicking outside
cloudinaryModal.addEventListener('click', (e) => {
    if (e.target === cloudinaryModal) {
        closeCloudinaryModal();
    }
});

uploadProgressModal.addEventListener('click', (e) => {
    if (e.target === uploadProgressModal) {
        return; // Don't close while uploading
    }
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `upload-notification ${type}`;
    notification.innerHTML = `
        <i class="fa-solid fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span style="margin-left: 8px;">${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

function formatCloudinaryErrorMessage(error) {
    const message = error?.message || 'Upload failed.';

    if (/upload preset/i.test(message) || /unsigned/i.test(message)) {
        return 'Upload failed: invalid unsigned upload preset. Create one in Cloudinary Settings -> Upload -> Upload presets.';
    }

    if (/resource|format|file/i.test(message)) {
        return `Upload failed: ${message}`;
    }

    return `Upload failed: ${message}`;
}

function buildCloudinaryDebugDetails(status, responseText) {
    const parts = [];

    if (status) {
        parts.push(`HTTP status: ${status}`);
    }

    if (responseText) {
        parts.push(`Response: ${responseText}`);
    }

    return parts.join('\n');
}

// Upload to Cloudinary
async function uploadToCloudinary(file) {
    console.log('Starting upload for file:', file.name);
    
    if (!cloudinarySettings.cloudName) {
        console.error('No Cloud Name configured');
        showNotification('Please configure Cloudinary settings first', 'error');
        return false;
    }

    if (!cloudinarySettings.uploadPreset) {
        showNotification('Please configure your unsigned upload preset first', 'error');
        return false;
    }

    if (looksLikeApiSecret(cloudinarySettings.uploadPreset)) {
        showNotification('The saved upload preset looks invalid. Please enter your unsigned preset name.', 'error');
        openCloudinaryModal();
        return false;
    }
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinarySettings.uploadPreset);
    
    try {
        console.log('Showing upload progress modal');
        setUploadState(true);
        showUploadProgress();
        updateUploadProgress(0, 'Preparing upload...');
        
        const xhr = new XMLHttpRequest();
        
        // Track upload progress
        xhr.upload.addEventListener('progress', (e) => {
            if (e.lengthComputable) {
                const percent = (e.loaded / e.total) * 90; // 90% for upload
                console.log('Upload progress:', Math.round(percent) + '%');
                updateUploadProgress(percent, `Uploading... ${Math.round(percent)}%`);
            }
        });
        
        return await new Promise((resolve, reject) => {
            xhr.addEventListener('load', () => {
                console.log('Upload completed with status:', xhr.status);
                if (xhr.status === 200) {
                    updateUploadProgress(95, 'Processing...');
                    const response = JSON.parse(xhr.responseText);
                    console.log('Upload response:', response);
                    uploadProgressTitle.textContent = 'Upload complete';
                    updateUploadProgress(100, `"${response.original_filename || file.name}" added to playlist`);
                    
                    setTimeout(() => {
                        hideUploadProgress();
                        setUploadState(false);
                        resolve(response);
                    }, 900);
                } else {
                    try {
                        const error = JSON.parse(xhr.responseText);
                        const uploadError = new Error(error.error?.message || `Upload failed with status ${xhr.status}`);
                        uploadError.debugDetails = buildCloudinaryDebugDetails(xhr.status, xhr.responseText);
                        reject(uploadError);
                    } catch (e) {
                        const uploadError = new Error(`Upload failed with status ${xhr.status}`);
                        uploadError.debugDetails = buildCloudinaryDebugDetails(xhr.status, xhr.responseText);
                        reject(uploadError);
                    }
                }
            });
            
            xhr.addEventListener('error', () => {
                console.error('Upload network error');
                const uploadError = new Error('Network error during upload');
                uploadError.debugDetails = 'The request did not reach Cloudinary or the browser blocked it.';
                reject(uploadError);
            });
            
            xhr.addEventListener('abort', () => {
                console.error('Upload aborted');
                const uploadError = new Error('Upload was aborted');
                uploadError.debugDetails = 'The upload request was aborted before Cloudinary returned a response.';
                reject(uploadError);
            });
            
            const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudinarySettings.cloudName}/video/upload`;
            console.log('Uploading to:', uploadUrl);
            xhr.open('POST', uploadUrl);
            xhr.send(formData);
        });
    } catch (error) {
        console.error('Upload error:', error);
        const friendlyError = formatCloudinaryErrorMessage(error);
        uploadProgressTitle.textContent = 'Upload failed';
        updateUploadProgress(100, friendlyError);
        showUploadDebug(error.debugDetails || error.message);
        setUploadState(false);
        setTimeout(() => {
            hideUploadProgress();
            showNotification(friendlyError, 'error');
            if (/upload preset/i.test(friendlyError) || /unsigned/i.test(friendlyError)) {
                openCloudinaryModal();
            }
        }, 1200);
        return false;
    }
}

// Updated Upload Input Handler
uploadInput.addEventListener('change', async function(e) {
    if (isUploading) {
        uploadInput.value = '';
        return;
    }

    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file size (max 100MB for Cloudinary)
    const maxSize = 100 * 1024 * 1024;
    if (file.size > maxSize) {
        showNotification('File size must be less than 100MB', 'error');
        uploadInput.value = '';
        return;
    }
    
    if (!cloudinarySettings.cloudName) {
        showNotification('Please configure Cloudinary settings first', 'error');
        uploadInput.value = '';
        return;
    }

    if (!cloudinarySettings.uploadPreset) {
        showNotification('Add your unsigned Cloudinary upload preset first', 'error');
        openCloudinaryModal();
        uploadInput.value = '';
        return;
    }
    
    // Upload to Cloudinary
    const uploadResult = await uploadToCloudinary(file);
    
    if (uploadResult?.secure_url) {
        const newSong = createSongFromUpload(file, uploadResult.secure_url, uploadResult);
        addUploadedSongToPlaylist(newSong);
        playSong();
        showNotification(`"${newSong.title}" uploaded and loaded into the playlist.`, 'success');
    }
    
    // Reset input
    uploadInput.value = '';
});

// Handle drag and drop
document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('audio/')) {
        uploadInput.files = files;
        uploadInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
});

// Initialize
runStartupDiagnostics();
renderPlaylist();
loadSong(currentSongIndex);
updateVolumeIcon();
