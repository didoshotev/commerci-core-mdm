"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const VendorsHeroAnimation = () => {
  const [isClient, setIsClient] = useState(false)
  const [activeSupplier, setActiveSupplier] = useState(null)
  const animationRef = useRef(null)

  // Ensure we're rendering on client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Cycle through suppliers to highlight data flow
  useEffect(() => {
    if (!isClient) return

    const suppliers: any = [
      "supplier1",
      "supplier2",
      "supplier3",
      "supplier4",
      "supplier5",
      "supplier6",
    ]
    let currentIndex = 0

    const interval = setInterval(() => {
      setActiveSupplier(suppliers[currentIndex])
      currentIndex = (currentIndex + 1) % suppliers.length
    }, 2000)

    return () => clearInterval(interval)
  }, [isClient])

  if (!isClient) return null

  const suppliers = [
    {
      id: "supplier1",
      name: "Vendor 1",
      x: 100,
      y: 150,
      color: "var(--primary)",
    },
    {
      id: "supplier2",
      name: "Vendor 2",
      x: 400,
      y: 150,
      color: "var(--secondary)",
    },
    {
      id: "supplier3",
      name: "Vendor 3",
      x: 480,
      y: 300,
      color: "var(--primary)",
    },
    {
      id: "supplier4",
      name: "Vendor 4",
      x: 400,
      y: 450,
      color: "var(--secondary)",
    },
    {
      id: "supplier5",
      name: "Vendor 5",
      x: 100,
      y: 450,
      color: "var(--primary)",
    },
    {
      id: "supplier6",
      name: "Vendor 6",
      x: 20,
      y: 300,
      color: "var(--secondary)",
    },
  ]

  // Center point for the central element
  const centerX = 250
  const centerY = 300

  return (
    <div className="w-full h-full flex items-center justify-center p-4 bg-gray-50 rounded-xl">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 600"
        className="overflow-visible"
        ref={animationRef}
      >
        {/* Background radial gradient */}
        <defs>
          <radialGradient
            id="centerGlow"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              stopColor="var(--primary-light)"
              stopOpacity="0.15"
            />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              result="shadowBlur"
            />
            <feBlend in="SourceGraphic" in2="shadowBlur" mode="normal" />
          </filter>
        </defs>

        {/* Background glow */}
        <circle cx={centerX} cy={centerY} r={170} fill="url(#centerGlow)" />

        {/* Top Left Label */}
        <g className="left-label" transform="translate(50, 80)">
          <rect
            width="110"
            height="28"
            rx="14"
            fill="white"
            stroke="var(--primary)"
            strokeWidth="1"
            filter="drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1))"
          />
          <text
            x="55"
            y="18"
            textAnchor="middle"
            fontSize="12"
            fontWeight="500"
            fill="var(--primary)"
          >
            Vendor Data
          </text>
        </g>

        {/* Top Right Label */}
        <g className="right-label" transform="translate(340, 80)">
          <rect
            width="130"
            height="28"
            rx="14"
            fill="white"
            stroke="var(--secondary)"
            strokeWidth="1"
            filter="drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1))"
          />
          <text
            x="65"
            y="18"
            textAnchor="middle"
            fontSize="12"
            fontWeight="500"
            fill="var(--secondary)"
          >
            Single Source of Truth
          </text>
        </g>

        {/* Draw connection paths for each supplier */}
        {suppliers.map((supplier) => (
          <path
            key={`path-${supplier.id}`}
            d={`M ${supplier.x} ${supplier.y} L ${centerX} ${centerY}`}
            stroke={supplier.color}
            strokeWidth={1.5}
            strokeDasharray="6,3"
            fill="none"
            opacity={activeSupplier === supplier.id ? 1 : 0.4}
          />
        ))}

        {/* Animated data particles flowing along paths */}
        {suppliers.map(
          (supplier) =>
            activeSupplier === supplier.id && (
              <motion.circle
                key={`particle-${supplier.id}`}
                cx={supplier.x}
                cy={supplier.y}
                r={4}
                fill={supplier.color}
                initial={{ cx: supplier.x, cy: supplier.y }}
                animate={{ cx: centerX, cy: centerY }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            )
        )}

        {/* Central platform element - blue circle with gradient */}
        <circle
          cx={centerX}
          cy={centerY}
          r={75}
          fill="white"
          stroke="var(--primary)"
          strokeWidth={2}
          filter="drop-shadow(0px 4px 8px rgba(53, 99, 233, 0.2))"
        />

        {/* Inner gradient circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={68}
          fill="var(--primary)"
          opacity={0.05}
        />

        {/* MDM CommerciCore text */}
        <text
          x={centerX}
          y={centerY - 15}
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="var(--primary)"
          filter="url(#dropShadow)"
        >
          MDM
        </text>

        <text
          x={centerX}
          y={centerY + 10}
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="var(--primary-dark)"
          filter="url(#dropShadow)"
        >
          CommerciCore
        </text>

        <text
          x={centerX}
          y={centerY + 30}
          textAnchor="middle"
          fontSize="11"
          fontWeight="medium"
          fill="var(--gray-600)"
        >
          Master Data Platform
        </text>

        {/* Central pulse animation */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={85}
          stroke="var(--primary-light)"
          strokeWidth={1.5}
          fill="none"
          opacity={0.4}
          initial={{ opacity: 0.2, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1.05 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Draw supplier nodes */}
        {suppliers.map((supplier) => (
          <g key={supplier.id}>
            {/* Supplier circle */}
            <circle
              cx={supplier.x}
              cy={supplier.y}
              r={35}
              fill="white"
              stroke={supplier.color}
              strokeWidth={1.5}
              filter="drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))"
            />

            {/* Supplier icon (small document icon) */}
            <rect
              x={supplier.x - 12}
              y={supplier.y - 8}
              width={24}
              height={18}
              rx={2}
              fill={supplier.color}
              opacity={0.2}
            />

            {/* Small document lines */}
            <line
              x1={supplier.x - 8}
              y1={supplier.y - 3}
              x2={supplier.x + 8}
              y2={supplier.y - 3}
              stroke={supplier.color}
              strokeWidth={1.5}
              opacity={0.5}
            />
            <line
              x1={supplier.x - 8}
              y1={supplier.y + 2}
              x2={supplier.x + 8}
              y2={supplier.y + 2}
              stroke={supplier.color}
              strokeWidth={1.5}
              opacity={0.5}
            />
            <line
              x1={supplier.x - 8}
              y1={supplier.y + 7}
              x2={supplier.x + 4}
              y2={supplier.y + 7}
              stroke={supplier.color}
              strokeWidth={1.5}
              opacity={0.5}
            />

            {/* Supplier text above circle */}
            <text
              x={supplier.x}
              y={supplier.y - 45}
              textAnchor="middle"
              fontSize="11"
              fontWeight="500"
              fill="var(--gray-700)"
            >
              {supplier.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default VendorsHeroAnimation
