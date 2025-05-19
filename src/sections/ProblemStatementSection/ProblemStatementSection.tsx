"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ProblemStatementSection() {
  const [activeTab, setActiveTab] = useState("before")

  const painPoints = [
    {
      icon: "⏱️",
      stat: "60%",
      text: "of product launches delayed by data quality issues",
      color: "bg-primary/10",
    },
    {
      icon: "⚙️",
      stat: "25+",
      text: "hours weekly wasted on manual data cleansing",
      color: "bg-secondary/10",
    },
    {
      icon: "💸",
      stat: "15-20%",
      text: "increased storage costs due to product duplicates",
      color: "bg-primary/10",
    },
  ]

  return (
    <section
      id="problem-statement"
      className="py-16 md:py-24 bg-gray-50"
      aria-labelledby="problem-statement-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            The Challenge
          </span>
          <h2
            id="problem-statement-heading"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-primary">Poor Product Data</span> Costs You
            $137,500 Per Month
          </h2>
          <p className="mt-6 text-lg text-gray-600 text-center mx-auto max-w-3xl">
            Retailers and distributors struggle with inconsistent product data
            from multiple suppliers, creating catalog chaos and directly
            impacting your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Left Column - Narrative */}
          <div className="space-y-6">
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-lg ${point.color} border border-gray-200`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl">{point.icon}</div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {point.stat}
                      </span>
                      <span className="text-gray-700">{point.text}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Industry Benchmark */}
            <motion.div
              className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-700"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="font-medium">Industry benchmark:</span> While the
              average retailer struggles with 15% duplicate items, our customers
              achieve less than 0.5%
            </motion.div>

            {/* Testimonial - Social Proof - REMOVED as requested */}

            {/* The Real Cost */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">The Real Cost</h3>
              <p className="text-gray-600 mb-4">
                Poor product data quality directly impacts search relevance,
                conversion rates, and customer satisfaction. Ultimately hurting
                your bottom line.
              </p>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">↓ 23%</div>
                  <div className="text-xs text-gray-500">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">↑ 31%</div>
                  <div className="text-xs text-gray-500">Return Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">↓ 18%</div>
                  <div className="text-xs text-gray-500">Search Relevance</div>
                </div>
              </div>
            </motion.div>

            {/* Single CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition shadow-md hover:shadow-xl text-center font-medium"
                aria-label="Save your spot"
              >
                Save Your Spot
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Before/After Tabs */}
          <div className="relative h-[500px] rounded-xl bg-white border border-gray-200 shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 px-4 py-3 text-sm font-medium ${
                  activeTab === "before"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("before")}
                aria-label="View before CommerciCore"
              >
                Before CommerciCore
              </button>
              <button
                className={`flex-1 px-4 py-3 text-sm font-medium ${
                  activeTab === "after"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("after")}
                aria-label="View after CommerciCore"
              >
                After CommerciCore
              </button>
            </div>

            {/* Content container */}
            <div className="h-[450px] overflow-y-auto p-4">
              {/* "Before" View - Messy Data */}
              {activeTab === "before" && (
                <div className="space-y-6">
                  {/* Visual indicator for chaotic data */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                      Inconsistent product data from multiple vendors
                    </div>
                  </div>

                  {/* iPhone 16 Example - Vendor A */}
                  <div className="border border-gray-300 rounded-md p-3 bg-gray-50">
                    <div className="text-xs text-gray-400 mb-1">
                      Vendor A Product ID: IPHONE16PM-256-BLK
                    </div>
                    <div className="font-medium text-gray-800">
                      iPhone 16 Pro Max Black 256GB
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div>
                        <span className="text-gray-500">Screen:</span>
                        <span className="text-gray-700"> 6.9 inch</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Storage:</span>
                        <span className="text-gray-700"> 256 GB</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Color:</span>
                        <span className="text-gray-700"> Black Titanium</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Price:</span>
                        <span className="text-gray-700"> $1,199.99</span>
                      </div>
                    </div>
                    <div className="mt-1 flex justify-end">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                        Missing Features
                      </span>
                    </div>
                  </div>

                  {/* iPhone 16 Example - Vendor B */}
                  <div className="border border-gray-300 rounded-md p-3 bg-gray-50">
                    <div className="text-xs text-gray-400 mb-1">
                      Vendor B Product ID: APL-IP16-PM-256
                    </div>
                    <div className="font-medium text-gray-800">
                      Apple iPhone 16 Pro Max (6.9", 256GB)
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div>
                        <span className="text-gray-500">Display Size:</span>
                        <span className="text-gray-700"> 6.9"</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Storage Capacity:</span>
                        <span className="text-gray-700"> 256GB</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Processor:</span>
                        <span className="text-gray-700"> A18 Pro</span>
                      </div>
                      <div>
                        <span className="text-gray-500">MSRP:</span>
                        <span className="text-gray-700"> $1,299.00</span>
                      </div>
                    </div>
                    <div className="mt-1 flex justify-end">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                        Inconsistent Pricing
                      </span>
                    </div>
                  </div>

                  {/* iPhone 16 Example - Vendor C */}
                  <div className="border border-gray-300 rounded-md p-3 bg-gray-50">
                    <div className="text-xs text-gray-400 mb-1">
                      Vendor C Product ID: APPLE-16-PRO-256GB
                    </div>
                    <div className="font-medium text-gray-800">
                      Apple® iPhone 16 Pro Max Black Titanium
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div>
                        <span className="text-gray-500">Screen Type:</span>
                        <span className="text-gray-700"> Super Retina XDR</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Memory:</span>
                        <span className="text-gray-700"> 256 GB</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Camera:</span>
                        <span className="text-gray-700">
                          {" "}
                          48MP Triple Camera
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">List Price:</span>
                        <span className="text-gray-700"> $1,249.00</span>
                      </div>
                    </div>
                    <div className="mt-1 flex justify-end">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Different naming format
                      </span>
                    </div>
                  </div>

                  {/* LG TV Example */}
                  <div className="border border-gray-300 rounded-md p-3 bg-gray-50">
                    <div className="text-xs text-gray-400 mb-1">
                      Vendor C Product ID: LG-TV-4K55
                    </div>
                    <div className="font-medium text-gray-800">
                      LG Smart TV 55"
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div>
                        <span className="text-gray-500">Size:</span>
                        <span className="text-gray-700"> 55 inches</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Resolution:</span>
                        <span className="text-gray-700"> 4K Ultra HD</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Model #:</span>
                        <span className="text-gray-700"> OLED55C1PUB</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Price:</span>
                        <span className="text-gray-700"> $1,499.99</span>
                      </div>
                    </div>
                    <div className="mt-1 flex justify-end">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Missing Tech Specs
                      </span>
                    </div>
                  </div>

                  {/* Same LG TV from different vendor */}
                  <div className="border border-gray-300 rounded-md p-3 bg-gray-50">
                    <div className="text-xs text-gray-400 mb-1">
                      Vendor D Product ID: TV-LG-OLED-55
                    </div>
                    <div className="font-medium text-gray-800">
                      LG OLED C1 Series Television
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div>
                        <span className="text-gray-500">Display:</span>
                        <span className="text-gray-700"> 55" OLED</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Res:</span>
                        <span className="text-gray-700"> 3840 x 2160</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Smart Features:</span>
                        <span className="text-gray-700">
                          {" "}
                          webOS, Google Assistant
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Retail:</span>
                        <span className="text-gray-700"> $1,399.00</span>
                      </div>
                    </div>
                    <div className="mt-1 flex justify-end">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                        Different Naming Convention
                      </span>
                    </div>
                  </div>

                  {/* Simple manager dashboard */}
                  <div className="mt-6 p-3 border border-gray-300 rounded-md bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium text-gray-700">
                        Product Manager Dashboard
                      </div>
                      <div className="text-xs text-gray-500">
                        Manual Process
                      </div>
                    </div>
                    <div className="bg-red-50 p-2 rounded border border-red-200 text-sm flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-red-600">
                        427 products requiring manual review
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* "After" View - Unified Data */}
              {activeTab === "after" && (
                <div className="space-y-6">
                  {/* Visual indicator for clean data */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Unified product data across all vendors
                    </div>
                  </div>

                  {/* iPhone 16 Unified Record */}
                  <div className="border-2 border-primary/20 rounded-md p-4 bg-white shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-xs text-primary mb-1">
                          Golden Record
                        </div>
                        <div className="font-medium text-gray-800 text-lg">
                          Apple iPhone 16 Pro Max (256GB)
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                        Unified from 3 vendors
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Display
                        </span>
                        <span className="text-gray-900 font-medium">
                          6.9" Super Retina XDR ProMotion
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Storage
                        </span>
                        <span className="text-gray-900 font-medium">256GB</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Processor
                        </span>
                        <span className="text-gray-900 font-medium">
                          A18 Pro Chip
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Camera
                        </span>
                        <span className="text-gray-900 font-medium">
                          48MP Triple Camera System
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Features
                        </span>
                        <span className="text-gray-900 font-medium">
                          Face ID, 5G, MagSafe, Ceramic Shield
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Colors
                        </span>
                        <span className="text-gray-900 font-medium">
                          Black Titanium, White Titanium, Natural Titanium, Blue
                          Titanium
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-500 mb-2">
                        Related Vendor SKUs
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Vendor A: IPHONE16PM-256-BLK
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Vendor B: APL-IP16-PM-256
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Vendor C: APPLE-16-PRO-256GB
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* LG TV Unified Record */}
                  <div className="border-2 border-primary/20 rounded-md p-4 bg-white shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-xs text-primary mb-1">
                          Golden Record
                        </div>
                        <div className="font-medium text-gray-800 text-lg">
                          LG OLED C1 55" 4K Smart TV
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                        Unified from 2 vendors
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Display
                        </span>
                        <span className="text-gray-900 font-medium">
                          55" OLED 4K UHD (3840 x 2160)
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Model
                        </span>
                        <span className="text-gray-900 font-medium">
                          OLED55C1PUB
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Smart Features
                        </span>
                        <span className="text-gray-900 font-medium">
                          webOS, Google Assistant, Alexa
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Retail Price
                        </span>
                        <span className="text-gray-900 font-medium">
                          $1,399.00 - $1,499.99
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Ports
                        </span>
                        <span className="text-gray-900 font-medium">
                          4x HDMI 2.1, 3x USB, Ethernet
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs">
                          Additional Features
                        </span>
                        <span className="text-gray-900 font-medium">
                          G-Sync, FreeSync, Dolby Vision
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-500 mb-2">
                        Related Vendor SKUs
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Vendor C: LG-TV-4K55
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Vendor D: TV-LG-OLED-55
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Simple dashboard */}
                  <div className="mt-6 p-3 border border-gray-300 rounded-md bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium text-gray-700">
                        CommerciCore Dashboard
                      </div>
                      <div className="text-xs text-gray-500">
                        Automated Process
                      </div>
                    </div>
                    <div className="bg-green-50 p-2 rounded border border-green-200 text-sm flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-green-600">
                        All 427 products automatically processed
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom section with "Learn how it works" link - Metrics row removed as requested */}
        <div className="text-center mt-12">
          <Link
            href="#how-it-works"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            aria-label="Learn how it works"
          >
            Learn how it works
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>

        {/* Hidden text for screen readers */}
        <div className="sr-only" aria-hidden="false">
          CommerciCore solves product data inconsistency problems by
          automatically matching and merging data from multiple vendor sources.
          Before CommerciCore, retailers struggle with inconsistent product
          names, specifications, pricing, and incomplete information across
          vendors. After CommerciCore, all product information is consolidated
          into a single golden record with consistent naming, complete
          specifications, and intelligent price handling. This automation saves
          85% of manual work, achieves 99.8% match accuracy, and delivers a 3x
          ROI within 6 months.
        </div>
      </div>
    </section>
  )
}
