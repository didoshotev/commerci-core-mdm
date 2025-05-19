import { Link } from "lucide-react"

export default function HowItWorks() {
  return (
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
            Our master data management platform handles the entire product data
            lifecycle from ingestion to synchronization.
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
            <h3 className="text-xl font-semibold mb-3">AI-Powered Matching</h3>
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
              Validate data quality with our built-in rules engine to ensure all
              products meet your standards.
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
              Publish your unified product data to all your e-commerce channels
              with format-specific transformations.
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
  )
}
