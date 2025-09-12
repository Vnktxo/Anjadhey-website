import Image from "next/image";

export default function DonatePage() {
  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          One Small Gift. One Big Change.
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Your kindness has the power to transform lives. Every contribution,
          big or small, becomes a story of hope for someone who needs it most.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">₹100</h3>
            <p className="text-gray-600">
              A child receives school supplies to dream bigger.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">₹500</h3>
            <p className="text-gray-600">
              A community gains access to health awareness.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">₹1000</h3>
            <p className="text-gray-600">
              Trees are planted to secure our planet&apos;s future.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Scan to Donate</h2>
          <p className="text-gray-600 mb-6">
            Be the Difference. Protect Humanity Today.
          </p>
          {/* TODO: Important! 
            1. Get the QR code image from the Anjadhey Foundation.
            2. Save it inside the `public` folder in your project.
            3. Replace the `src` below with the correct path, e.g., `/qr-code.png`
          */}
          {/*<Image
            src="https://placehold.co/300x300/e2e8f0/334155?text=Your+QR+Code"
            alt="Donation QR Code"
            width={300}
            height={300}
            className="mx-auto rounded-md"
          />*/}
          <p className="mt-6 text-gray-500 italic">
            &quot;Your donation isn&apos;t charity - it&apos;s an investment in
            humanity.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
