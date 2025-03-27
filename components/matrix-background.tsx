"use client"

import { useEffect, useRef } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let cols = (canvas.width = window.innerWidth)
    let rows = (canvas.height = window.innerHeight)

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const charArray = chars.split("")
    const fontSize = 10
    const columns = Math.floor(cols / fontSize)
    const drops = Array.from({ length: columns }).fill(1)
    let zoom = 1

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, cols, rows)

      // Pulsating green effect with more subtle opacity
      const opacity = Math.sin(Date.now() / 1000) * 0.3 + 0.4
      ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`
      ctx.font = `${fontSize}px monospace`

      // Slow zoom effect
      ctx.setTransform(zoom, 0, 0, zoom, (cols / 2) * (1 - zoom), (rows / 2) * (1 - zoom))

      for (let i = 0; i < drops.length; i++) {
        // Only render some columns for a more sparse, elegant effect
        if (Math.random() > 0.3) {
          const text = charArray[Math.floor(Math.random() * charArray.length)]
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        }

        if (drops[i] * fontSize > rows && Math.random() > 0.98) {
          drops[i] = 0
        }
        drops[i]++
      }

      zoom += 0.0005 // Slower, more subtle zoom
      if (zoom > 1.05) zoom = 1 // Reset zoom at a lower threshold
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      cols = canvas.width = window.innerWidth
      rows = canvas.height = window.innerHeight
      ctx.setTransform(1, 0, 0, 1, 0, 0) // Reset transform on resize
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" aria-hidden="true" />
}

