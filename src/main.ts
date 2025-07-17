import { startDetection } from './detection';
import { setupAnimations } from './animations';
import { rigFace } from './rig';
import { initDepth } from './depth';

export function main() {
  const video = document.getElementById('video') as HTMLVideoElement;
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  startDetection(video);
  initDepth(canvas);
  setupAnimations((window as any).cube);
  console.log(rigFace([{ x: 0, y: 0, z: 0 }]));
}

main();
