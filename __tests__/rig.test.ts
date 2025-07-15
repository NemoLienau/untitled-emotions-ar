import { rigFace } from '../src/rig'

test('rigFace returns object', () => {
  const output = rigFace({ landmarks: [] })
  expect(output).toEqual({})
})
