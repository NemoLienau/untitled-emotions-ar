export function setupAnimations(mesh: { scale: { x: number; y: number; z: number } }) {
  let t = 0;
  function animate() {
    t += 0.05;
    const scale = 1 + Math.sin(t) * 0.05;
    mesh.scale.x = scale;
    mesh.scale.y = scale;
    mesh.scale.z = scale;
    requestAnimationFrame(animate);
  }
  animate();
}
