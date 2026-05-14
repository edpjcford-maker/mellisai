# Mellisai - Spotify-like Music Player

A modern, fully-featured music player web application inspired by Spotify with a clean UI and extensive features.

## Features

### 🎵 Core Features
- **Now Playing Display**: Shows current song with artist information
- **Playback Controls**: Play, pause, next, previous buttons
- **Progress Tracking**: Real-time progress bar with seek capability
- **Volume Control**: Adjustable volume with visual feedback
- **Playlist Management**: View all songs in an organized list
- **Song Counter**: Displays total number of songs

### 🎚️ Advanced Controls
- **Shuffle**: Randomly shuffle through songs
- **Repeat Modes**: 
  - No repeat (default)
  - Repeat all songs
  - Repeat single song
- **Auto-Next**: Automatically plays next song when current ends
- **Keyboard Shortcuts**: Press spacebar to play/pause

### 📱 Mobile Features
- **Responsive Design**: Works perfectly on all screen sizes
- **Mobile Navigation**: Hamburger menu for sidebar on mobile
- **Touch-Friendly**: Optimized touch targets and controls
- **Adaptive Layout**: Changes layout based on screen size

### 📤 Upload Features
- **Cloudinary Integration**: Upload songs directly to Cloudinary
- **Cloud Storage**: Songs stored securely on Cloudinary servers
- **Persistent URLs**: Uploaded songs accessible anytime
- **File Validation**: Checks file size (max 100MB)
- **Instant Playback**: Play uploaded songs immediately
- **Drag & Drop**: Drag music files directly into the app
- **Progress Tracking**: Real-time upload progress display
- **Notifications**: Success/error notifications

### 🎨 Design Features
- **Spotify-like Theme**: Dark mode with green accent color
- **Album Art Integration**: Default album covers with gradient
- **Smooth Animations**: Subtle transitions and hover effects
- **Responsive Typography**: Text scales with screen size
- **Custom Scrollbars**: Styled scrollbars matching theme

## Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Flexbox, Grid, Custom Properties, Media Queries
- **JavaScript (Vanilla)**: No dependencies, pure ES6+
- **Cloudinary**: Cloud storage and CDN for uploaded audio files
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

## Usage

### Opening the App
1. Download all files to a folder
2. Open `index.html` in a web browser
3. Start playing music!

### Playing Music
1. Click on any song in the playlist to play it
2. Use the play button at the bottom to start/stop
3. Click next/previous to navigate songs

### Uploading Music
1. Click "Upload Song" in the sidebar
2. Select an audio file from your device
3. Confirm to play immediately or add to playlist

### Controls
- **Play/Pause**: Click the large play button
- **Previous/Next**: Click the arrow buttons
- **Seek**: Click anywhere on the progress bar
- **Volume**: Click on the volume bar to adjust
- **Shuffle**: Click shuffle icon to randomize order
- **Repeat**: Click repeat icon to cycle through repeat modes
- **Spacebar**: Quick play/pause

## Pre-loaded Playlist

The app comes with 15 curated Tamil film songs including:
- Singalathu Chinnakuyile
- Ye Rasaathi
- Ther Kondu
- And 12 more!

## Browser Compatibility

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- Mobile browsers: ✅ Full support

## Cloudinary Setup

Mellisai uses **Cloudinary** for cloud-based music uploads. To enable this feature:

1. **Create a Cloudinary account**: Visit [cloudinary.com](https://cloudinary.com) and sign up (free tier available)
2. **Get your Cloud Name**: Find it on your Cloudinary Dashboard
3. **Create an Upload Preset**: Go to Settings → Upload → Add upload preset (set to Unsigned)
4. **Configure in Mellisai**: Click "Cloudinary Settings" button and enter your Cloud Name and preset
5. **Start uploading!**: Use "Upload Song" to upload to cloud storage

For detailed setup instructions, see **CLOUDINARY_SETUP.md**

## Tips & Tricks

1. **Create Playlists**: Click on playlist names in sidebar to organize songs
2. **Search**: Use the search feature (coming soon)
3. **Keyboard Control**: Use spacebar for quick play/pause
4. **Batch Upload**: Drag multiple files for faster uploading
5. **Device Sync**: Uploaded songs persist during your session

## File Structure

```
Mellisai/
├── index.html              # Main HTML with Cloudinary modals
├── styles.css              # Complete styling + modal UI
├── script.js               # Cloudinary integration + all features
├── assets/
│   └── generate_cover.html # Album cover generator
├── README.md               # This file
└── CLOUDINARY_SETUP.md     # Cloudinary setup guide
```

## Future Enhancements

- [ ] Search functionality
- [ ] Favorites/Liked songs
- [ ] Playlists management
- [ ] Last.fm integration
- [ ] Lyrics display
- [ ] Equalizer
- [ ] Dark/Light theme toggle

## Credits

**App Name**: Mellisai (Tamil for "sweetness" or "harmony")
**Inspired by**: Spotify
**Created**: 2024

## License

Free to use and modify for personal projects.

---

**Enjoy your music with Mellisai! 🎵**