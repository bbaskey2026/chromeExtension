// Volume Booster - background.js
// Service worker for the Chrome extension

// Initialize extension on install
chrome.runtime.onInstalled.addListener(() => {
  // Set default volume
  chrome.storage.local.set({ volumeLevel: 100 });
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getVolume') {
    chrome.storage.local.get('volumeLevel', (result) => {
      sendResponse({ volume: result.volumeLevel || 100 });
    });
    return true;
  }

  if (request.action === 'setVolume') {
    chrome.storage.local.set({ volumeLevel: request.volume });
    sendResponse({ success: true });
  }
});

// Update volume across all tabs when it changes
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.volumeLevel) {
    const newVolume = changes.volumeLevel.newValue;

    // Send update to all tabs
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, {
          action: 'setVolume',
          volume: newVolume
        }).catch(() => {
          // Content script not available on this tab
        });
      });
    });
  }
});