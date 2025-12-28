# Super Volume Booster - Quick Start Guide

A professional Chrome extension to amplify audio and video volume up to 1000%.

## ⚡ Quick Setup

### Installation
1. Open `chrome://extensions/`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked**
4. Select the extension folder
5. Done! 🎉

## 🎚️ How to Use

1. Click the **Volume Booster icon** in your Chrome toolbar
2. **Drag the slider** to adjust volume (100% - 1000%)
3. Volume updates **instantly** on the current page
4. Settings are **saved automatically**

## 📁 Project Structure

```
volume-booster/
├── manifest.json       # Extension config
├── popup.html          # UI (this file)
├── popup.js            # Popup logic
├── content.js          # Audio/video handler
├── background.js       # Service worker
└── icons/              # Extension icons
    ├── icon-16.png
    ├── icon-48.png
    ├── icon-128.png
    └── icon-512.png
```

## 🎯 Features

✅ Boost audio & video up to **1000%**  
✅ Works on **all websites** (YouTube, Spotify, Twitch, etc.)  
✅ **Real-time** volume adjustment  
✅ Shows **multiplier** (1.0x - 10.0x)  
✅ Professional **dark UI**  
✅ **Auto-saves** your preference  
✅ Works on **iframes** and embedded players  

## 📊 Display Information

| Item | Meaning |
|------|---------|
| **Current Level** | Volume percentage (100-1000%) |
| **Multiplier** | Audio amplification ratio |
| **Boost** | Extra volume above baseline |

**Example:** 550% = 5.5x multiplier = 450% boost

## 🔧 Files Explained

**manifest.json** - Tells Chrome how to run the extension

**popup.html** - The UI you see when you click the icon

**popup.js** - Handles slider and saves your volume preference

**content.js** - Applies volume boost to audio/video on websites

**background.js** - Service worker that syncs volume across tabs

## ⚙️ Technical Requirements

- Chrome 90+
- All permissions in manifest.json
- Font Awesome icons (CDN)
- Modern browser with Web Audio API support

## 🚀 What It Supports

- ✅ YouTube, Spotify, Twitch
- ✅ Podcasts, SoundCloud
- ✅ Netflix, Disney+
- ✅ Local audio files
- ✅ Embedded players
- ✅ Video with audio tracks

## ⚠️ Safety Tips

- Maximum volume (1000%) can damage hearing
- Start at lower levels and increase gradually
- Don't use maximum for extended periods
- Extension includes audio limiting for protection

## 🐛 Troubleshooting

### Volume not changing?
1. Reload the webpage
2. Check if content.js is loaded
3. Try a different website
4. Reinstall the extension

### Extension icon missing?
1. Check `chrome://extensions/`
2. Make sure extension is enabled
3. Reload Chrome

### Storage error?
- Already fixed! Uses fallback localStorage
- Check console (F12) for details

## 💾 How It Works

1. **You adjust slider** → volume updates popup display
2. **Saves to Chrome storage** (syncs across tabs)
3. **Sends to content.js** → applies to all audio/video
4. **Automatically detects** new audio elements added to page

## 📱 Browser Support

✅ Chrome 90+  
✅ Edge 90+  
✅ Brave  
✅ Opera  
✅ Any Chromium-based browser  

## 🎵 Tips & Tricks

- Volume persists across browser sessions
- Works on multiple tabs simultaneously
- Applies to iframes (YouTube embeds, etc.)
- Hover slider for smooth adjustment
- Real-time stats show multiplier value

## 📝 Permissions Explained

- **storage** - Saves your volume preference
- **tabs** - Sends volume to active tabs
- **scripting** - Injects audio boosting
- **host_permissions** - Runs on all websites

## 🔄 Update Your Extension

After making changes to code:
1. Go to `chrome://extensions/`
2. Click the **reload** button next to your extension
3. Changes take effect immediately

## 📞 Need Help?

1. Open DevTools (F12)
2. Check Console for error messages
3. Verify all files exist in folder
4. Try reinstalling extension
5. Check manifest.json syntax

## 🎨 Customize

**Change colors?** Edit popup.html CSS section

**Change volume range?** Edit input max/min values

**Change extension name?** Edit manifest.json "name"

---

**Enjoy your enhanced audio experience! 🎵**
