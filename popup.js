// ===== Volume Booster - popup.js =====

const boostSlider = document.getElementById('boost');
const valueDisplay = document.getElementById('value');
const multiplierDisplay = document.getElementById('multiplier');
const boostPercentDisplay = document.getElementById('boost-percent');
const sliderTrack = document.getElementById('sliderTrack');

const MIN = 100;
const MAX = 1000;

/* ===== Update UI ===== */
function updateUI(value) {
  const percentage = ((value - MIN) / (MAX - MIN)) * 100;
  const multiplier = (value / 100).toFixed(1);

  valueDisplay.textContent = value;
  multiplierDisplay.textContent = multiplier + 'x';
  boostPercentDisplay.textContent = Math.round(value - 100) + '%';

  sliderTrack.style.setProperty('--percentage', percentage + '%');
}

/* ===== Save Volume ===== */
function saveVolume(value) {
  if (chrome?.storage?.local) {
    chrome.storage.local.set({ volumeLevel: value });
  } else {
    localStorage.setItem('volumeLevel', value);
  }
}

/* ===== Send Volume to Active Tab ===== */
function sendVolumeToTab(value) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || !tabs.length) return;

    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: 'setVolume', volume: value },
      () => {
        // Ignore errors if content script not injected
        if (chrome.runtime.lastError) return;
      }
    );
  });
}

/* ===== Slider Change ===== */
function handleSliderChange() {
  const value = parseInt(boostSlider.value, 10);

  updateUI(value);
  saveVolume(value);
  sendVolumeToTab(value);
}

/* ===== Load Saved Volume ===== */
function loadSavedVolume() {
  if (chrome?.storage?.local) {
    chrome.storage.local.get('volumeLevel', (result) => {
      const value = result.volumeLevel || 100;
      boostSlider.value = value;
      updateUI(value);
      sendVolumeToTab(value);
    });
  } else {
    const value = parseInt(localStorage.getItem('volumeLevel')) || 100;
    boostSlider.value = value;
    updateUI(value);
  }
}

/* ===== Event Listeners ===== */
boostSlider.addEventListener('input', handleSliderChange);
document.addEventListener('DOMContentLoaded', loadSavedVolume);
