document.getElementById("boost").addEventListener("input", async (e) => {
  const boost = e.target.value;
  document.getElementById("value").textContent = boost + "%";

  
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    args: [boost],
    func: (boost) => {
      document.querySelectorAll("audio, video").forEach(el => {
        if (!el._booster) {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const source = ctx.createMediaElementSource(el);
          const gainNode = ctx.createGain();
          gainNode.gain.value = boost / 100;
          source.connect(gainNode).connect(ctx.destination);
          el._booster = { ctx, gainNode };
        } else {
          el._booster.gainNode.gain.value = boost / 100;
        }
      });
    }
  });
});
