import { createWriteStream } from 'fs'
import { get } from 'https'

const url = 'https://storage.googleapis.com/mediapipe-tasks/vision/face_landmarker.task'
const dest = 'public/models/face_landmarker.task'

get(url, res => {
  res.pipe(createWriteStream(dest))
})
