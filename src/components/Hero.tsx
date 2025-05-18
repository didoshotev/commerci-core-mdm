"use client"

import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import the DataFlowAnimation component to avoid SSR issues with canvas
const DataFlowAnimation = dynamic(() => import("./DataFlowAnimation"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg animate-pulse" />
  ),
})

// Dynamically import the ProductMatchingAnimation component
const ProductMatchingAnimation = dynamic(
  () => import("./ProductMatchingAnimation"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] bg-gray-100 rounded-lg animate-pulse" />
    ),
  }
)

export default function Hero() {
  return (
    <>
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
              <DataFlowAnimation />

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
              <h3 className="text-xl font-semibold mb-2">
                Ensure Data Quality
              </h3>
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

      {/* How it works section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How CommerciCore Works
            </h2>
            <p className="text-lg text-gray-600">
              Our master data management platform handles the entire product
              data lifecycle from ingestion to synchronization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Ingestion</h3>
              <p className="text-gray-600">
                Connect to multiple vendor feeds and your internal inventory
                systems with our flexible connectors.
              </p>
              <ul className="mt-4 text-sm text-gray-500 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  CSV, XML, JSON data import
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  API/SFTP integrations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Database connectors
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                AI-Powered Matching
              </h3>
              <p className="text-gray-600">
                Automatically identify identical and similar products across
                vendors and your own inventory.
              </p>
              <ul className="mt-4 text-sm text-gray-500 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Machine learning algorithms
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Image recognition
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Fuzzy text matching
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Golden Record Creation
              </h3>
              <p className="text-gray-600">
                Create a single source of truth for each product with the best
                data from all connected sources.
              </p>
              <ul className="mt-4 text-sm text-gray-500 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Smart attribute merging
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Conflict resolution
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Version control
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-primary text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Enrichment</h3>
              <p className="text-gray-600">
                Automatically enhance product data with additional details from
                all connected sources.
              </p>
              <ul className="mt-4 text-sm text-gray-500 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Auto-categorization
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Description enhancement
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Attribute completion
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-primary text-xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Validate data quality with our built-in rules engine to ensure
                all products meet your standards.
              </p>
              <ul className="mt-4 text-sm text-gray-500 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Custom validation rules
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Automated corrections
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Quality scoring
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-primary text-xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Multi-Channel Distribution
              </h3>
              <p className="text-gray-600">
                Publish your unified product data to all your e-commerce
                channels with format-specific transformations.
              </p>
              <ul className="mt-4 text-sm text-gray-500 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Format transformations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Scheduled publishing
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Change tracking
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/demo"
              className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg transition shadow-lg hover:shadow-xl text-center font-medium"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* AI Product Matching section */}
      <section id="ai-matching" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intelligent Product Matching
            </h2>
            <p className="text-lg text-gray-600">
              Our AI engine identifies identical products across multiple
              vendors and unifies them into a single, comprehensive record.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and explanation */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Transform Product Chaos into Order
              </h3>

              <p className="text-gray-600">
                When managing thousands of products from different vendors,
                you'll often receive the same item with varying:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-medium">Product names</span>
                    <p className="text-sm text-gray-500">
                      Different naming conventions and formats
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-medium">Specifications</span>
                    <p className="text-sm text-gray-500">
                      Various ways of describing the same features
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-medium">Pricing</span>
                    <p className="text-sm text-gray-500">
                      Different price points across vendors
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-medium">Images and media</span>
                    <p className="text-sm text-gray-500">
                      Inconsistent product photos and assets
                    </p>
                  </div>
                </li>
              </ul>

              <p className="text-gray-600">
                CommerciCore's AI matching technology automatically identifies
                these products as the same item and creates a unified "golden
                record" with the best information from all sources.
              </p>

              <div className="mt-4">
                <Link
                  href="/demo"
                  className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition shadow-lg hover:shadow-xl text-center font-medium inline-block"
                >
                  See AI Matching in Action
                </Link>
              </div>
            </div>

            {/* Right side - Animation */}
            <div className="relative h-[500px] rounded-xl bg-gray-50 border border-gray-200 shadow-lg overflow-hidden">
              <ProductMatchingAnimation />
            </div>
          </div>

          {/* Key benefits of AI matching */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reduce Duplicates</h3>
              <p className="text-gray-600">
                Eliminate duplicate product listings and present a clean,
                unified catalog to your customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Improve Data Quality
              </h3>
              <p className="text-gray-600">
                Create comprehensive product information by selecting the best
                attributes from each source.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Save Time & Resources
              </h3>
              <p className="text-gray-600">
                Automate manual product matching and focus your team on
                high-value tasks that drive sales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
