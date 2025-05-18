"use client"

import { useEffect, useRef } from "react"

interface TVProduct {
  id: string
  name: string
  source: string
  color: string
  position: { x: number; y: number }
  specs: {
    resolution: string
    size: string
    price: string
    brand: string
    model: string
  }
}

export default function ProductMatchingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const labelsRef = useRef<HTMLDivElement>(null)

  // Animation effect
  useEffect(() => {
    const canvas = canvasRef.current
    const labelsContainer = labelsRef.current
    if (!canvas || !labelsContainer) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Clear existing labels
    labelsContainer.innerHTML = ""

    // TV Icon SVG
    const tvIconSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
      </svg>
    `

    // CommerciCore Logo (simplified)
    const logoSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
        <path d="M12 5a7 7 0 1 1-7 7 7 7 0 0 1 7-7"></path>
        <path d="M12 3v4"></path>
        <path d="M12 17v4"></path>
        <path d="M3 12h4"></path>
        <path d="M17 12h4"></path>
      </svg>
    `

    // Sample TV products from different sources - exactly 3 as requested
    const tvProducts: TVProduct[] = [
      {
        id: "tv1",
        name: 'Samsung 55" 4K QLED Smart TV',
        source: "Vendor A",
        color: "#3563E9",
        position: { x: 0, y: 0 },
        specs: {
          resolution: "4K UHD",
          size: '55"',
          price: "$799",
          brand: "Samsung",
          model: "QN55Q60B",
        },
      },
      {
        id: "tv2",
        name: "Samsung Q60B Series 55-inch QLED TV",
        source: "Vendor B",
        color: "#00C39A",
        position: { x: 0, y: 0 },
        specs: {
          resolution: "3840 x 2160",
          size: "55-inch",
          price: "$849.99",
          brand: "Samsung",
          model: "QN55Q60B",
        },
      },
      {
        id: "tv3",
        name: 'Samsung 55" Class Q60B QLED 4K Smart TV',
        source: "Vendor C",
        color: "#8B5CF6",
        position: { x: 0, y: 0 },
        specs: {
          resolution: "4K Ultra HD",
          size: "55-inch Class",
          price: "$799.99",
          brand: "Samsung",
          model: "QN55Q60B",
        },
      },
    ]

    // Add title banner for the animation
    const titleBanner = document.createElement("div")
    titleBanner.className =
      "absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-lg shadow-md z-30 text-center"
    titleBanner.innerHTML = `
      <div class="text-sm font-medium text-gray-600">Product Matching Process</div>
    `
    labelsContainer.appendChild(titleBanner)

    // Calculate positions - vertically arranged
    const centerX = canvas.width / 2
    const topY = canvas.height * 0.15
    const middleY = canvas.height * 0.5
    const bottomY = canvas.height * 0.85
    const spreadX = canvas.width * 0.25 // How far to spread the source cards horizontally

    // Position products in row at the top
    tvProducts.forEach((product, index) => {
      // Position evenly across the top
      const leftEdge = centerX - spreadX
      const rightEdge = centerX + spreadX
      const step = (rightEdge - leftEdge) / (tvProducts.length - 1)

      product.position.x = leftEdge + step * index
      product.position.y = topY
    })

    // Processing engine in the middle
    const processingEngine = {
      x: centerX,
      y: middleY,
      size: 40,
      color: "#2447C2",
    }

    // Create product cards
    tvProducts.forEach((product) => {
      const card = document.createElement("div")
      card.id = `source-card-${product.id}`
      card.className =
        "absolute w-52 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-10"
      card.style.left = `${product.position.x}px`
      card.style.top = `${product.position.y}px`

      // Card content
      card.innerHTML = `
        <div class="p-3 border-b border-gray-100" style="background-color: ${product.color}15">
          <div class="text-xs font-bold text-gray-600">${product.source}</div>
          <div class="text-sm font-medium truncate">${product.name}</div>
        </div>
        <div class="p-2 pb-3">
          <div class="flex justify-center p-2 mb-2 text-gray-400">
            ${tvIconSVG}
          </div>
          <div class="text-xs space-y-1">
            <div class="flex justify-between">
              <span class="text-gray-500">Size:</span>
              <span>${product.specs.size}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Resolution:</span>
              <span>${product.specs.resolution}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Price:</span>
              <span class="font-semibold">${product.specs.price}</span>
            </div>
          </div>
        </div>
      `

      labelsContainer.appendChild(card)
    })

    // Create CommerciCore processing engine card
    const processingCard = document.createElement("div")
    processingCard.className =
      "absolute w-44 h-44 bg-white rounded-full shadow-xl border-2 border-primary transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center"
    processingCard.style.left = `${processingEngine.x}px`
    processingCard.style.top = `${processingEngine.y}px`

    // Processing engine content
    processingCard.innerHTML = `
      <div class="text-primary mb-2">${logoSVG}</div>
      <div class="text-sm font-bold text-primary">CommerciCore</div>
      <div class="text-xs text-gray-500 mt-1">MDM Engine</div>
      <div class="loading-indicator mt-2">
        <div class="dot-loader flex space-x-1">
          <div class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style="animation-delay: 0ms"></div>
          <div class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style="animation-delay: 300ms"></div>
          <div class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style="animation-delay: 600ms"></div>
        </div>
      </div>
    `

    labelsContainer.appendChild(processingCard)

    // Create unified product card - positioned at the bottom
    const unifiedCard = document.createElement("div")
    unifiedCard.className =
      "absolute w-72 bg-white rounded-lg shadow-2xl border-2 border-primary transform -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 transition-all duration-700"
    unifiedCard.style.left = `${centerX}px`
    unifiedCard.style.top = `${bottomY}px`
    unifiedCard.style.transform = "translate(-50%, -50%) scale(0.9)"

    // Card content for unified product - improved styling
    unifiedCard.innerHTML = `
      <div class="p-3 border-b border-gray-100 bg-gradient-to-r from-primary/20 to-primary/5">
        <div class="flex items-center justify-between">
          <div class="text-xs font-bold text-primary">MASTER RECORD</div>
          <div class="bg-primary text-white text-xs px-2 py-0.5 rounded">Unified</div>
        </div>
        <div class="text-md font-medium mt-1">Samsung 55" Q60B QLED 4K Smart TV</div>
      </div>
      <div class="flex p-3 items-center">
        <div class="bg-primary/10 p-2 rounded-full mr-3 text-primary">
          ${tvIconSVG}
        </div>
        <div>
          <div class="text-sm font-medium">Samsung</div>
          <div class="text-xs text-gray-500">Model QN55Q60B</div>
        </div>
      </div>
      <div class="p-3 pt-0 text-sm space-y-2">
        <div class="flex justify-between">
          <span class="text-gray-500">Size:</span>
          <span class="font-medium">55"</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Resolution:</span>
          <span class="font-medium">4K UHD (3840 x 2160)</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Price Range:</span>
          <span class="font-medium">$799 - $849.99</span>
        </div>
        <div class="border-t border-dashed border-gray-200 mt-3 pt-3">
          <div class="flex items-center">
            <div class="flex space-x-1.5">
              <span class="w-2 h-2 rounded-full" style="background-color: #3563E9"></span>
              <span class="w-2 h-2 rounded-full" style="background-color: #00C39A"></span>
              <span class="w-2 h-2 rounded-full" style="background-color: #8B5CF6"></span>
            </div>
            <div class="text-xs text-gray-600 ml-2">
              Data unified from 3 vendor sources
            </div>
          </div>
        </div>
      </div>
    `

    labelsContainer.appendChild(unifiedCard)

    // Animation variables
    let animationFrame: number
    let startTime = Date.now()
    let isSourcesAnimated = false
    let isProcessingAnimated = false
    let isUnifiedAnimated = false
    let isAnimationComplete = false

    // Draw function for animation
    const draw = () => {
      const elapsedTime = Date.now() - startTime
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Phase 1: Initial placement and animation of source cards (0-2000ms)
      if (elapsedTime < 2000) {
        // No special animation in this phase, just showing the source cards
        if (!isSourcesAnimated) {
          isSourcesAnimated = true
        }
      }
      // Phase 2: Data flowing to processing engine (2000-6000ms)
      else if (elapsedTime < 6000) {
        // Draw connections from source products to processing engine
        tvProducts.forEach((product) => {
          ctx.beginPath()
          ctx.moveTo(product.position.x, product.position.y)
          ctx.lineTo(processingEngine.x, processingEngine.y)
          ctx.strokeStyle = `${product.color}60` // semi-transparent
          ctx.lineWidth = 2
          ctx.stroke()

          // Animate data packets flowing to center
          const packetCount = 3
          for (let i = 0; i < packetCount; i++) {
            const progress = ((elapsedTime - 2000) / 3000 + i * 0.3) % 1

            if (progress >= 0 && progress <= 1) {
              const packetX =
                product.position.x +
                (processingEngine.x - product.position.x) * progress
              const packetY =
                product.position.y +
                (processingEngine.y - product.position.y) * progress

              ctx.beginPath()
              ctx.arc(packetX, packetY, 4, 0, Math.PI * 2)
              ctx.fillStyle = product.color
              ctx.fill()
            }
          }
        })

        // Draw processing engine with pulsing effect
        const pulseSize = Math.sin((elapsedTime - 2000) / 600) * 3 + 5

        // Outer halo
        ctx.beginPath()
        ctx.arc(
          processingEngine.x,
          processingEngine.y,
          processingEngine.size + pulseSize,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = "rgba(36, 71, 194, 0.15)"
        ctx.fill()
      }
      // Phase 3: Processing data (6000-8000ms)
      else if (elapsedTime < 8000) {
        if (!isProcessingAnimated) {
          // Fade and scale source cards
          tvProducts.forEach((_, index) => {
            const card = document.getElementById(
              `source-card-${tvProducts[index].id}`
            )
            if (card) {
              card.style.transform = "translate(-50%, -50%) scale(0.85)"
              card.style.opacity = "0.7"
            }
          })

          isProcessingAnimated = true
        }

        // Strong pulse for processing
        const processingPulse = 10 + Math.sin((elapsedTime - 6000) / 200) * 6

        // Bright processing halo
        ctx.beginPath()
        ctx.arc(
          processingEngine.x,
          processingEngine.y,
          processingEngine.size + processingPulse,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = "rgba(36, 71, 194, 0.3)"
        ctx.fill()

        // Inner glow
        ctx.beginPath()
        ctx.arc(
          processingEngine.x,
          processingEngine.y,
          processingEngine.size - 5 + Math.sin((elapsedTime - 6000) / 150) * 4,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = "rgba(36, 71, 194, 0.4)"
        ctx.fill()

        // Scale processing card with pulse
        processingCard.style.transform = `translate(-50%, -50%) scale(${
          1 + processingPulse * 0.005
        })`
      }
      // Phase 4: Result flowing to unified card (8000-10000ms)
      else if (elapsedTime < 10000) {
        // Draw connection from processing center to unified card
        ctx.beginPath()
        ctx.moveTo(processingEngine.x, processingEngine.y)
        ctx.lineTo(centerX, bottomY)
        ctx.strokeStyle = "rgba(36, 71, 194, 0.6)"
        ctx.lineWidth = 3
        ctx.stroke()

        // Animate unified data packet flowing to unified card
        const unifiedProgress = Math.min(1, (elapsedTime - 8000) / 2000)
        const packetX = processingEngine.x
        const packetY =
          processingEngine.y + (bottomY - processingEngine.y) * unifiedProgress

        ctx.beginPath()
        ctx.arc(packetX, packetY, 6, 0, Math.PI * 2)
        ctx.fillStyle = "#2447C2"
        ctx.fill()

        // Add glow to the packet
        ctx.beginPath()
        ctx.arc(packetX, packetY, 10, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(36, 71, 194, 0.3)"
        ctx.fill()

        // Reset processing card transform
        processingCard.style.transform = "translate(-50%, -50%)"
      }
      // Phase 5: Show unified record (10000ms+)
      else {
        if (!isUnifiedAnimated) {
          // Reveal unified card with animation
          unifiedCard.style.opacity = "1"
          unifiedCard.style.transform = "translate(-50%, -50%) scale(1)"

          // Draw permanent connection
          ctx.beginPath()
          ctx.moveTo(processingEngine.x, processingEngine.y)
          ctx.lineTo(centerX, bottomY)
          ctx.strokeStyle = "rgba(36, 71, 194, 0.4)"
          ctx.lineWidth = 2
          ctx.stroke()

          isUnifiedAnimated = true
        }

        // If animation is complete, keep the final state
        if (!isAnimationComplete && elapsedTime > 12000) {
          isAnimationComplete = true
        }
      }

      // Continue animation loop
      animationFrame = requestAnimationFrame(draw)
    }

    // Start animation
    draw()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="relative w-full h-full min-h-[500px]">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div
        ref={labelsRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
    </div>
  )
}
