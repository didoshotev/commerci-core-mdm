import Link from "next/link"

export default function AIInActionSection() {
  return (
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
            Our AI engine identifies identical products across multiple vendors
            and unifies them into a single, comprehensive record.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and explanation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Transform Product Chaos into Order
            </h3>

            <p className="text-gray-600">
              When managing thousands of products from different vendors, you'll
              often receive the same item with varying:
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
            {/* <ProductMatchingAnimation /> */}
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
              Eliminate duplicate product listings and present a clean, unified
              catalog to your customers.
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
            <h3 className="text-xl font-semibold mb-2">Improve Data Quality</h3>
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
              Automate manual product matching and focus your team on high-value
              tasks that drive sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
