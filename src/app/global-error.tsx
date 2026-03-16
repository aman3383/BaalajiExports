'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                Something went wrong!
              </h1>
              <p className="text-gray-600 mb-8">
                We're sorry, but something went wrong. Please try again.
              </p>
            </div>
            
            <button
              onClick={reset}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
} 