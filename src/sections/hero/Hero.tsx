"use client"

import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import the DataFlowAnimation component to avoid SSR issues with canvas
const VendorsHeroAnimation = dynamic(() => import("./VendorsHeroAnimation"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg animate-pulse" />
  ),
})

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <div className="max-w-2xl">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              Enterprise-Grade MDM
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              <span className="text-primary">Unify Product Data</span> Across
              Your E-commerce Ecosystem
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              CommerciCore transforms chaotic multi-vendor data into a single
              source of truth. Streamline your operations by seamlessly
              synchronizing product information from all your vendors and
              internal systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition shadow-lg hover:shadow-xl text-center font-medium"
              >
                Request Demo
              </Link>
              <Link
                href="#how-it-works"
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-foreground rounded-lg transition text-center font-medium"
              >
                How It Works
              </Link>
            </div>

            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-2">
                Trusted by leading e-commerce retailers
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                {/* Example logo placeholders - replace with actual partner logos */}
                <div className="h-6 w-20 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-7 w-24 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-6 w-16 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-7 w-28 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Hero Animation */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl bg-gray-50 border border-gray-200 shadow-lg overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50/50 to-transparent z-0"></div>

            {/* Data Flow Animation */}
            <VendorsHeroAnimation />

            {/* UI Elements overlaid on the animation */}
            <div className="absolute top-5 left-5 right-5 flex justify-between z-20 pointer-events-none opacity-70">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <div className="h-4 w-32 bg-primary/20 rounded mb-2"></div>
                <div className="h-2 w-24 bg-gray-300 rounded"></div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-md">
                <div className="h-4 w-24 bg-secondary/20 rounded mb-2"></div>
                <div className="h-2 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 lg:mt-24">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-xl"></div>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Accelerate Time-to-Market
            </h3>
            <p className="text-gray-600">
              Reduce product onboarding time by 75% with automated data
              synchronization from all your vendors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-bl-xl"></div>
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ensure Data Quality</h3>
            <p className="text-gray-600">
              Our AI-powered validation eliminates errors and inconsistencies
              for perfect product information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-xl"></div>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Scale with Confidence
            </h3>
            <p className="text-gray-600">
              Add new vendors, channels, and products without complexity. Our
              platform grows with your business.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white shadow-md rounded-lg border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-sm text-gray-600">
              Reduction in product data errors
            </div>
          </div>
          <div className="text-center p-6 bg-white shadow-md rounded-lg border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">3x</div>
            <div className="text-sm text-gray-600">
              Faster product onboarding
            </div>
          </div>
          <div className="text-center p-6 bg-white shadow-md rounded-lg border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-gray-600">
              Match rate for similar products
            </div>
          </div>
          <div className="text-center p-6 bg-white shadow-md rounded-lg border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">40%</div>
            <div className="text-sm text-gray-600">
              Reduction in data management costs
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
