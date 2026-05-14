# Mellisai - Cloudinary Integration Guide

## Setup Instructions

### Step 1: Create a Cloudinary Account

1. Go to [cloudinary.com](https://cloudinary.com)
2. Click "Sign Up" and create a free account
3. Verify your email
4. Log in to your Cloudinary Dashboard

### Step 2: Get Your Cloud Name

1. Open the Cloudinary Dashboard
2. You'll see your **Cloud Name** at the top of the page (e.g., `your-cloud-name`)
3. Copy this - you'll need it for the app

### Step 3: Create an Upload Preset (Recommended)

1. In Cloudinary Dashboard, go to **Settings** → **Upload**
2. Scroll to **Upload presets**
3. Click **"Add upload preset"**
4. Set the following:
   - **Name**: `mellisai` (or any name you prefer)
   - **Unsigned**: Toggle to **ON** (this allows uploads without authentication)
   - **Resource type**: Select **Auto** or **Video** (for audio files)
5. Click **Save**
6. Copy the preset name

### Step 4: Configure Mellisai App

1. Open the Mellisai music player in your browser
2. Click the **"Cloudinary Settings"** button in the sidebar
3. Fill in the fields:
   - **Cloud Name**: Your Cloud Name from Step 2
   - **Upload Preset**: The preset name from Step 3 (e.g., `mellisai`)
   - **API Key**: Leave empty (optional, for advanced features)
4. Click **"Save Settings"**
5. Your browser will remember these settings locally

### Step 5: Start Uploading!

1. Click **"Upload Song"** in the sidebar
2. Select an audio file (MP3, WAV, OGG, etc.)
3. The app will upload to Cloudinary and add it to your playlist
4. The song will be stored on Cloudinary servers and accessible anytime

---

## Features

### ✅ What Works
- Upload audio files (MP3, WAV, OGG, M4A, FLAC, etc.)
- Files stored on Cloudinary (not locally)
- Progress tracking during upload
- Auto-notification on success/error
- Drag & drop support
- Max file size: 100MB
- Songs persist across browser sessions

### 📝 File Types Supported
- Audio: MP3, WAV, OGG, M4A, FLAC, AAC, OPUS
- Bitrates: Any (auto-converted if needed)

### 🔒 Security
- Unsigned presets don't require API keys
- Files are stored on Cloudinary's secure servers
- Browser stores settings in localStorage
- No data sent to other servers except Cloudinary

---

## Troubleshooting

### ❌ "Upload Failed" Error
- **Problem**: Upload fails with error message
- **Solution**: 
  - Check your Cloud Name is spelled correctly
  - Try creating a new upload preset
  - Check file size isn't over 100MB
  - Verify your internet connection

### ❌ "Please configure Cloudinary settings"
- **Problem**: Settings not saved
- **Solution**:
  - Click "Cloudinary Settings" button
  - Enter your Cloud Name (required)
  - Upload Preset is optional
  - Click "Save Settings"

### ❌ Songs don't play after upload
- **Problem**: Song uploaded but won't play
- **Solution**:
  - Refresh the page
  - Check if the file was actually uploaded to Cloudinary
  - Try with a different audio file
  - Check browser console (F12) for error messages

### ⚠️ Upload Preset Issues
- **Problem**: "Upload preset not found" error
- **Solution**:
  - Make sure preset is set to "Unsigned"
  - Double-check preset name spelling
  - Try uploading without a preset (app uses default)

---

## Advanced Tips

### Using Without Upload Preset
If you don't create an upload preset, the app will use Cloudinary's default preset. This works fine for most users but may have restrictions based on your Cloudinary plan.

### Upgrading Your Cloudinary Plan
- **Free Plan**: Great for testing, good upload limits
- **Paid Plans**: More features, higher limits, better performance
- Visit [cloudinary.com/pricing](https://cloudinary.com/pricing) for details

### Managing Uploaded Files
To see all your uploaded files:
1. Log into Cloudinary Dashboard
2. Go to **Media Library**
3. You'll see all uploaded audio files
4. You can organize them in folders

### API Key Usage
Advanced users can add their API Key for signed uploads (more secure for production). Leave blank for unsigned uploads (fine for personal use).

---

## FAQ

**Q: Are my songs safe on Cloudinary?**
A: Yes! Cloudinary is a professional CDN used by many companies. Your files are backed up and secured.

**Q: Can I share uploaded songs with others?**
A: Yes! Cloudinary URLs can be shared directly or embedded in websites.

**Q: Do I have to pay for Cloudinary?**
A: Free plan includes plenty of storage (25GB bandwidth/month). Upgrade for more.

**Q: What happens if my browser storage clears?**
A: Your Cloudinary settings are stored locally. Clearing browser data removes them. Just re-enter your Cloud Name and preset.

**Q: Can I use the same preset for multiple apps?**
A: Yes! Presets are reusable across different applications.

**Q: What's the maximum file size?**
A: 100MB per file on standard plans (can be higher with paid plans).

---

## Support

- **Cloudinary Help**: Visit [cloudinary.com/support](https://cloudinary.com/support)
- **Mellisai Issues**: Check the README.md for general app help
- **Documentation**: Full Cloudinary API docs at [cloudinary.com/documentation](https://cloudinary.com/documentation)

---

**Happy uploading! 🎵**