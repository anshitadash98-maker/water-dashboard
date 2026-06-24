const waterFlowVideo = document.querySelector('.water-flow-video');

if (waterFlowVideo) {
  let animationActive = true;

  window.addEventListener('scroll', () => {
    if (animationActive) {
      waterFlowVideo.style.animationPlayState = 'running';
    }
  });

  // Keep animation running continuously
  waterFlowVideo.style.animation = 'scrollFlow 20s linear infinite';
}
