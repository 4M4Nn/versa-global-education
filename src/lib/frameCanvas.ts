// Draws a preloaded frame onto a canvas, cover-fit and centered, at the
// canvas's current CSS size and device pixel ratio (capped for performance).
export function renderFrame(canvas: HTMLCanvasElement, img: HTMLImageElement) {
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const width = canvas.clientWidth
  const height = canvas.clientHeight
  const targetWidth = Math.round(width * dpr)
  const targetHeight = Math.round(height * dpr)

  if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
    canvas.width = targetWidth
    canvas.height = targetHeight
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = "high"

  const imgRatio = img.naturalWidth / img.naturalHeight
  const canvasRatio = width / height
  let drawWidth: number
  let drawHeight: number

  if (imgRatio > canvasRatio) {
    drawHeight = height
    drawWidth = drawHeight * imgRatio
  } else {
    drawWidth = width
    drawHeight = drawWidth / imgRatio
  }

  const offsetX = (width - drawWidth) / 2
  const offsetY = (height - drawHeight) / 2

  ctx.clearRect(0, 0, width, height)
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
}
