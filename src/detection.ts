export async function startDetection(video: HTMLVideoElement) {
  const overlay = document.getElementById('overlay') as HTMLElement | null;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    await video.play();
    if (overlay) overlay.style.display = 'block';
  } catch (err) {
    console.error('Camera start failed', err);
  }
}
