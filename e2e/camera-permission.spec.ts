import { test, expect } from '@playwright/test'

test('fps and camera permission', async ({ page, context }) => {
  await context.grantPermissions(['camera'])
  await page.goto('http://localhost:3000')
  const fps = await page.evaluate(() => new Promise<number>(resolve => {
    requestAnimationFrame(start => {
      requestAnimationFrame(end => {
        resolve(1000 / (end - start))
      })
    })
  }))
  expect(fps).toBeGreaterThanOrEqual(56)
})
