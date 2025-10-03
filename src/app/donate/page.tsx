import { Heart, Users, TreePine, GraduationCap } from "lucide-react";
import GradientText from "../components/GradientText";

export default function DonatePage() {
  return (
    <div className="bg-gradient-to-br from-accent-light via-white to-accent-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Heart className="mx-auto mb-6 h-16 w-16 text-accent-warm animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              One Small Gift.
              <br />
              <span className="text-accent-warm">One Big Change.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Your kindness has the power to transform lives. Every contribution, 
              big or small, becomes a story of hope for someone who needs it most.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent-warm/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent-warm/30 rounded-full animate-pulse"></div>
      </section>

      <div className="container mx-auto px-6 py-20">
        {/* Impact Cards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">Your Impact</h2>
            <div className="w-16 h-1 bg-accent-warm mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card card-hover rounded-3xl border-accent-warm/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary-dark mb-2">₹100</h3>
              <p className="text-gray-600 leading-relaxed">
                A child receives school supplies to dream bigger and reach for the stars.
              </p>
            </div>
            
            <div className="card card-hover rounded-3xl border-accent-warm/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary-dark mb-2">₹500</h3>
              <p className="text-gray-600 leading-relaxed">
                A community gains access to health awareness and life-changing knowledge.
              </p>
            </div>
            
            <div className="card card-hover rounded-3xl border-accent-warm/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary-dark mb-2">₹1000</h3>
              <p className="text-gray-600 leading-relaxed">
                Trees are planted to secure our planet&apos;s future for generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-custom-hover border border-accent-warm/20 text-center">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">Scan to Donate</h2>
            <p className="text-lg text-gray-600 mb-8">
              Be the Difference. Protect Humanity Today.
            </p>
            
            {/* QR Code Placeholder */}
            <div className="bg-gradient-to-br from-accent-light to-white p-8 rounded-2xl border-2 border-dashed border-accent-warm mb-8">
              <div className="w-64 h-64 mx-auto bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <Heart className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                  <p className="text-gray-500 font-medium">QR Code Here</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Add your donation QR code<br />
                    to the public folder
                  </p>
                </div>
              </div>
            </div>
            
            {/* TODO Comment */}
            <div className="bg-accent-light p-6 rounded-xl border-l-4 border-accent-warm mb-8">
              <p className="text-primary-dark font-medium mb-2">📝 Important Setup:</p>
              <p className="text-sm text-gray-700">
                1. Get your donation QR code from your payment provider<br />
                2. Save it as 'qr-code.png' in the public folder<br />
                3. Replace the placeholder above with: &lt;Image src="/qr-code.png" alt="Donation QR Code" width={300} height={300} /&gt;
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-accent-light to-accent-light p-6 rounded-2xl">
              <p className="text-primary-dark font-semibold text-lg italic">
                "Your donation isn&apos;t charity - it&apos;s an investment in humanity."
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="bg-gradient-primary text-white p-12 rounded-3xl shadow-custom-hover relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Every Rupee Matters</h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-6">
                Join thousands of compassionate hearts who believe in the power of giving. 
                Together, we&apos;re writing stories of hope across India.
              </p>
              <div className="flex items-center justify-center space-x-2 text-accent-warm">
                <Heart className="h-6 w-6" />
                <GradientText className="font-semibold text-lg">#ManidhamKaapom</GradientText>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}