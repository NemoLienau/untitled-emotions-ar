export interface LandmarkPoint { x: number; y: number; z: number }

export function rigFace(landmarks: LandmarkPoint[]): { nose?: LandmarkPoint } {
  if (!Array.isArray(landmarks) || landmarks.length === 0) return {}
  const nose = landmarks[0]
  return { nose }
}
