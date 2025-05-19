"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function IntegrationsSection() {
  const integrationCategories = [
    {
      title: "Primary E-commerce",
      integrations: [
        {
          name: "Shopify/Shopify Plus",
          logo: "/placeholder-shopify.svg", // Replace with actual logo path
        },
        {
          name: "WooCommerce",
          logo: "/placeholder-woocommerce.svg", // Replace with actual logo path
        },
      ],
    },
    {
      title: "Essential Marketplaces",
      integrations: [
        {
          name: "Amazon Seller Central",
          logo: "/placeholder-amazon.svg", // Replace with actual logo path
        },
        {
          name: "Google Merchant Center",
          logo: "/placeholder-google.svg", // Replace with actual logo path
        },
      ],
    },
    {
      title: "Key Business Systems",
      integrations: [
        {
          name: "Microsoft Dynamics 365",
          logo: "/placeholder-dynamics.svg", // Replace with actual logo path
        },
        {
          name: "CSV/Excel Export",
          logo: "/placeholder-excel.svg", // Replace with actual logo path
        },
      ],
    },
    {
      title: "For Developers",
      integrations: [
        {
          name: "REST API",
          logo: "/placeholder-api.svg", // Replace with actual logo path
        },
        {
          name: "Webhooks",
          logo: "/placeholder-webhooks.svg", // Replace with actual logo path
        },
      ],
    },
  ]

  return (
    <section id="integrations" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            Integrations
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">Connect Your</span> Essential
            Business Systems
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Push your unified product data wherever it needs to go. CommerciCore
            MDM integrates with your most important platforms out-of-the-box,
            with new connectors added regularly based on customer needs.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.integrations.map((integration, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Logo placeholder */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      {/* Replace this with actual logo when available */}
                      <div className="text-2xl text-gray-400">
                        {integration.name.charAt(0)}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      {integration.name}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Integration */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">
                Don't see what you need?
              </h3>
              <p className="text-gray-600 mb-4">
                We prioritize new integrations based on customer requirements
                and can develop custom connectors for your specific systems.
              </p>
              <p className="text-gray-600">
                All integrations include bidirectional syncing, flexible field
                mapping, and configurable scheduling to ensure your product data
                flows seamlessly throughout your business ecosystem.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="text-lg font-medium mb-3 text-center">
                  Request Integration
                </h4>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Integration name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <button className="w-full bg-primary hover:bg-primary-light text-white py-2 rounded-md transition">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Ask about our integration roadmap during your demo
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition shadow-lg hover:shadow-xl text-center font-medium"
          >
            Schedule a Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
