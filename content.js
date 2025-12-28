let audioCtx;
let gainNode;

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action !== 'setVolume') return;

  const volume = msg.volume / 100;

  if (!audioCtx) {
    audioCtx = new AudioContext();
    gainNode = audioCtx.createGain();
    gainNode.connect(audioCtx.destination);
  }

  gainNode.gain.value = volume;
});
