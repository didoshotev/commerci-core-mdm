"use client"

import { useEffect, useRef, useState } from "react"

interface DataPoint {
  x: number
  y: number
  size: number
  color: string
  speed: number
  animationDelay: number
  label: string
}

interface Product {
  id: string
  name: string
  source: string
  color: string
  position: { x: number; y: number }
  specs: string[]
}

export default function DataFlowAnimation() {
  const dataFlowCanvasRef = useRef<HTMLCanvasElement>(null)
  const dataFlowLabelsRef = useRef<HTMLDivElement>(null)
  const productUnificationCanvasRef = useRef<HTMLCanvasElement>(null)
  const productUnificationLabelsRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<"dataFlow" | "productUnification">(
    "dataFlow"
  )

  // Data Flow Animation
  useEffect(() => {
    if (activeTab !== "dataFlow") return

    const canvas = dataFlowCanvasRef.current
    const labelsContainer = dataFlowLabelsRef.current
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

    // Add simplified title
    const title = document.createElement("div")
    title.className =
      "absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg text-center z-10"
    title.innerHTML = `<h3 class="text-lg font-semibold text-gray-800">Unified Data Flow</h3>`
    labelsContainer.appendChild(title)

    // Create data points (vendors)
    const vendorLabels = [
      "Vendor 1",
      "Vendor 2",
      "Vendor 3",
      "Vendor 4",
      "Vendor 5",
      "Vendor 6",
      "Vendor 7",
    ]

    const vendorCount = vendorLabels.length
    const dataPoints: DataPoint[] = []

    // Color palette
    const colors = [
      "#3563E9",
      "#00C39A",
      "#0EA5E9",
      "#6366F1",
      "#8B5CF6",
      "#EC4899",
      "#F97316",
    ]

    for (let i = 0; i < vendorCount; i++) {
      // Distribute points around center
      const angle = (Math.PI * 2 * i) / vendorCount
      const distanceFromCenter = Math.min(canvas.width, canvas.height) * 0.38

      const x = canvas.width / 2 + Math.cos(angle) * distanceFromCenter * 0.8
      const y = canvas.height / 2 + Math.sin(angle) * distanceFromCenter * 0.8

      // Create minimal vendor label
      const label = document.createElement("div")
      label.className =
        "absolute text-xs font-medium px-2 py-1 bg-white/90 rounded shadow-sm transform -translate-x-1/2 -translate-y-1/2 z-10"
      label.textContent = vendorLabels[i]
      label.style.left = `${x}px`
      label.style.top = `${y - 20}px`

      labelsContainer.appendChild(label)

      dataPoints.push({
        x,
        y,
        size: 10 + Math.random() * 4,
        color: colors[i % colors.length],
        speed: 0.15 + Math.random() * 0.2,
        animationDelay: i * 400,
        label: vendorLabels[i],
      })
    }

    // Center point (MDM system)
    const centerPoint = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: 30,
      color: "#2447C2",
    }

    // Create central MDM label
    const mdmLabel = document.createElement("div")
    mdmLabel.className =
      "absolute text-xs font-semibold px-3 py-1 bg-[#2447C2] text-white rounded transform -translate-x-1/2 z-20"
    mdmLabel.textContent = "CommerciCore MDM"
    mdmLabel.style.left = `${centerPoint.x}px`
    mdmLabel.style.top = `${centerPoint.y + 20}px`
    labelsContainer.appendChild(mdmLabel)

    // Animation variables
    let animationStartTime = Date.now()
    let animationFrame: number

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate elapsed time
      const elapsedTime = Date.now() - animationStartTime

      // Draw connections
      dataPoints.forEach((point) => {
        const pointTime = elapsedTime - point.animationDelay
        if (pointTime > 0) {
          // Draw line from data point to center
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(centerPoint.x, centerPoint.y)
          ctx.strokeStyle = `${point.color}40` // 25% opacity
          ctx.lineWidth = 1.5
          ctx.stroke()

          // Add animated data packets
          const packetCount = 2
          for (let i = 0; i < packetCount; i++) {
            const packetProgress =
              ((pointTime / 2000) * point.speed + i * 0.33) % 1
            const packetX = point.x + (centerPoint.x - point.x) * packetProgress
            const packetY = point.y + (centerPoint.y - point.y) * packetProgress

            // Draw data packet
            ctx.beginPath()
            ctx.arc(packetX, packetY, 4, 0, Math.PI * 2)
            ctx.fillStyle = point.color
            ctx.fill()
          }
        }
      })

      // Draw center point with subtle pulsing
      const pulseSize = Math.sin(elapsedTime / 1000) * 3 + 5

      // Outer halo
      ctx.beginPath()
      ctx.arc(
        centerPoint.x,
        centerPoint.y,
        centerPoint.size + pulseSize,
        0,
        Math.PI * 2
      )
      ctx.fillStyle = "rgba(36, 71, 194, 0.1)"
      ctx.fill()

      // Draw center point
      ctx.beginPath()
      ctx.arc(
        centerPoint.x,
        centerPoint.y,
        centerPoint.size - 5,
        0,
        Math.PI * 2
      )
      ctx.fillStyle = centerPoint.color
      ctx.fill()

      // Draw data points (vendors)
      dataPoints.forEach((point) => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
        ctx.fillStyle = point.color
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [activeTab])

  // Product Unification Animation
  useEffect(() => {
    if (activeTab !== "productUnification") return

    const canvas = productUnificationCanvasRef.current
    const labelsContainer = productUnificationLabelsRef.current
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

    // Add title
    const title = document.createElement("div")
    title.className =
      "absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg text-center z-10"
    title.innerHTML = `<h3 class="text-lg font-semibold text-gray-800">AI-Powered Product Matching</h3>`
    labelsContainer.appendChild(title)

    // Define product sources with different specifications
    const sources = [
      { name: "Vendor A", color: "#3563E9" },
      { name: "Vendor B", color: "#00C39A" },
      { name: "Vendor C", color: "#8B5CF6" },
    ]

    // Create product instances (same TV from different sources)
    const products: Product[] = [
      {
        id: "tv1",
        name: "4K Smart TV",
        source: sources[0].name,
        color: sources[0].color,
        position: { x: canvas.width * 0.2, y: canvas.height * 0.33 },
        specs: ["55-inch", "4K UHD", "Model X500"],
      },
      {
        id: "tv2",
        name: '55" Ultra HD TV',
        source: sources[1].name,
        color: sources[1].color,
        position: { x: canvas.width * 0.2, y: canvas.height * 0.66 },
        specs: ["55-inch", "Smart TV", "X-500 Series"],
      },
      {
        id: "tv3",
        name: "X500 Smart Television",
        source: sources[2].name,
        color: sources[2].color,
        position: { x: canvas.width * 0.2, y: canvas.height * 0.5 },
        specs: ['55"', "Ultra HD", "X500"],
      },
    ]

    // Create unified product
    const unifiedProduct = {
      position: { x: canvas.width * 0.75, y: canvas.height * 0.5 },
      size: 40,
      color: "#2447C2",
    }

    // Add source labels and product cards
    products.forEach((product) => {
      // Create product card
      const card = document.createElement("div")
      card.className =
        "absolute bg-white rounded-lg shadow-md p-3 transform -translate-x-1/2 -translate-y-1/2 border-l-4 w-48 z-10"
      card.style.borderLeftColor = product.color
      card.style.left = `${product.position.x}px`
      card.style.top = `${product.position.y}px`

      card.innerHTML = `
        <div class="text-xs font-semibold mb-1" style="color:${
          product.color
        }">${product.source}</div>
        <div class="text-sm font-bold mb-1">${product.name}</div>
        <div class="text-xs text-gray-600">${product.specs.join(", ")}</div>
      `

      labelsContainer.appendChild(card)
    })

    // Add unified product card
    const unifiedCard = document.createElement("div")
    unifiedCard.className =
      "absolute bg-white rounded-lg shadow-md p-3 transform -translate-x-1/2 -translate-y-1/2 border-l-4 w-48 z-20"
    unifiedCard.style.borderLeftColor = unifiedProduct.color
    unifiedCard.style.left = `${unifiedProduct.position.x}px`
    unifiedCard.style.top = `${unifiedProduct.position.y}px`

    unifiedCard.innerHTML = `
      <div class="text-xs font-semibold mb-1" style="color:${unifiedProduct.color}">Unified Record</div>
      <div class="text-sm font-bold mb-1">X500 4K Smart TV</div>
      <div class="text-xs text-gray-600">55-inch, 4K UHD, Smart TV</div>
    `

    labelsContainer.appendChild(unifiedCard)

    // Add AI matching explanation
    const aiExplanation = document.createElement("div")
    aiExplanation.className =
      "absolute bg-gray-100/90 rounded-lg p-2 z-10 text-center"
    aiExplanation.style.left = `${canvas.width * 0.5 - 60}px`
    aiExplanation.style.top = `${canvas.height * 0.5 - 30}px`
    aiExplanation.style.width = "120px"

    aiExplanation.innerHTML = `
      <div class="text-xs font-semibold mb-1">AI Matching</div>
      <div class="text-[10px] text-gray-700">Identifies same products across sources</div>
    `

    labelsContainer.appendChild(aiExplanation)

    // Animation variables
    let animationStartTime = Date.now()
    let animationFrame: number

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate elapsed time
      const elapsedTime = Date.now() - animationStartTime

      // Draw connecting lines
      products.forEach((product) => {
        // Line from product to AI matcher
        ctx.beginPath()
        ctx.moveTo(product.position.x, product.position.y)
        ctx.lineTo(canvas.width * 0.5, canvas.height * 0.5)
        ctx.strokeStyle = `${product.color}40` // 25% opacity
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Line from AI matcher to unified product
        ctx.beginPath()
        ctx.moveTo(canvas.width * 0.5, canvas.height * 0.5)
        ctx.lineTo(unifiedProduct.position.x, unifiedProduct.position.y)
        ctx.strokeStyle = "#2447C240" // Blue at 25% opacity
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Draw animated data packets
        const packetProgress =
          (Math.sin(elapsedTime / 1000 + products.indexOf(product)) + 1) / 2

        // First half - from product to AI
        if (packetProgress < 0.5) {
          const normalizedProgress = packetProgress * 2
          const packetX =
            product.position.x +
            (canvas.width * 0.5 - product.position.x) * normalizedProgress
          const packetY =
            product.position.y +
            (canvas.height * 0.5 - product.position.y) * normalizedProgress

          ctx.beginPath()
          ctx.arc(packetX, packetY, 4, 0, Math.PI * 2)
          ctx.fillStyle = product.color
          ctx.fill()
        }
        // Second half - from AI to unified product
        else {
          const normalizedProgress = (packetProgress - 0.5) * 2
          const packetX =
            canvas.width * 0.5 +
            (unifiedProduct.position.x - canvas.width * 0.5) *
              normalizedProgress
          const packetY =
            canvas.height * 0.5 +
            (unifiedProduct.position.y - canvas.height * 0.5) *
              normalizedProgress

          ctx.beginPath()
          ctx.arc(packetX, packetY, 4, 0, Math.PI * 2)
          ctx.fillStyle = "#2447C2" // Blue
          ctx.fill()
        }
      })

      // Draw AI matcher node (pulsing)
      const aiSize = 20 + Math.sin(elapsedTime / 500) * 3

      // Outer glow
      ctx.beginPath()
      ctx.arc(
        canvas.width * 0.5,
        canvas.height * 0.5,
        aiSize + 5,
        0,
        Math.PI * 2
      )
      ctx.fillStyle = "rgba(107, 114, 249, 0.2)"
      ctx.fill()

      // Inner circle
      ctx.beginPath()
      ctx.arc(canvas.width * 0.5, canvas.height * 0.5, aiSize, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(107, 114, 249, 0.8)"
      ctx.fill()

      // AI icon (simplified)
      ctx.font = "bold 14px sans-serif"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("AI", canvas.width * 0.5, canvas.height * 0.5)

      // Draw product nodes
      products.forEach((product) => {
        ctx.beginPath()
        ctx.arc(product.position.x, product.position.y, 8, 0, Math.PI * 2)
        ctx.fillStyle = product.color
        ctx.fill()
      })

      // Draw unified product node with subtle pulsing
      const pulseSize = Math.sin(elapsedTime / 1000) * 3 + 5

      // Outer halo
      ctx.beginPath()
      ctx.arc(
        unifiedProduct.position.x,
        unifiedProduct.position.y,
        unifiedProduct.size / 2 + pulseSize,
        0,
        Math.PI * 2
      )
      ctx.fillStyle = "rgba(36, 71, 194, 0.1)"
      ctx.fill()

      // Main circle
      ctx.beginPath()
      ctx.arc(
        unifiedProduct.position.x,
        unifiedProduct.position.y,
        unifiedProduct.size / 2 - 5,
        0,
        Math.PI * 2
      )
      ctx.fillStyle = unifiedProduct.color
      ctx.fill()

      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [activeTab])

  return (
    <div className="flex flex-col w-full">
      {/* Animation Tabs */}
      <div className="flex justify-center mb-4">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === "dataFlow"
                ? "bg-white shadow-sm text-gray-800"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("dataFlow")}
          >
            Data Flow
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === "productUnification"
                ? "bg-white shadow-sm text-gray-800"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("productUnification")}
          >
            Product Unification
          </button>
        </div>
      </div>

      {/* Animation Containers */}
      <div className="relative w-full flex-1 min-h-[400px]">
        {/* Data Flow Animation */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            activeTab === "dataFlow" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <canvas
            ref={dataFlowCanvasRef}
            className="w-full h-full"
            style={{ display: "block" }}
          />
          <div
            ref={dataFlowLabelsRef}
            className="absolute inset-0 pointer-events-none"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-3 py-2 rounded-lg text-xs text-center max-w-[90%]">
            <p>
              Multiple vendors and partners send product data to CommerciCore's
              centralized MDM system
            </p>
          </div>
        </div>

        {/* Product Unification Animation */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            activeTab === "productUnification"
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          <canvas
            ref={productUnificationCanvasRef}
            className="w-full h-full"
            style={{ display: "block" }}
          />
          <div
            ref={productUnificationLabelsRef}
            className="absolute inset-0 pointer-events-none"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-3 py-2 rounded-lg text-xs text-center max-w-[90%]">
            <p>
              CommerciCore's AI identifies and matches identical products from
              multiple sources, creating a single unified record
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
