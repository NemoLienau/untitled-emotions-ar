import * as THREE from 'three';

let cube: THREE.Mesh;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

export function initDepth(canvas: HTMLCanvasElement) {
  scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, 1, 0.01, 10);
  camera.position.z = 1;

  cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.2, 0.2),
    new THREE.MeshNormalMaterial()
  );
  scene.add(cube);

  (window as any).cube = cube;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}
