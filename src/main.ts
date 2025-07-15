import { startDetection } from './detection';
import { setupAnimations } from './animations';
import { rigFace } from './rig';
import { initDepth } from './depth';

export function main() {
  startDetection();
  setupAnimations();
  initDepth();
  console.log(rigFace([]));
}

main();
