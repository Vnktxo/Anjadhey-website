import { Heart, Users, TreePine, GraduationCap } from "lucide-react";
import GradientText from "../components/GradientText";
import { Caveat } from "next/font/google";
import Image from "next/image";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function DonatePage() {
  return (
    <div className="bg-gradient-to-br from-accent-light via-white to-accent-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-[#2a633b]/20 to-[#2a633b] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="max-w-3xl md:max-w-4xl mx-auto">
            <Heart className="mx-auto mb-5 sm:mb-6 h-14 w-14 sm:h-16 sm:w-16 text-accent-warm animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 leading-tight text-primary-dark">
              One Small Gift.
              <br />
              <span className="text-accent-warm">One Big Change.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto px-2 text-foreground/80">
              Your kindness has the power to transform lives. Every contribution,
              big or small, becomes a story of hope for someone who needs it most.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-accent-warm/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-12 sm:w-16 h-12 sm:h-16 bg-accent-warm/30 rounded-full animate-pulse"></div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Impact Cards */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-3 sm:mb-4">
              Your Impact
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-accent-warm mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8 text-white" />,
                amount: "₹100",
                text: "A child receives school supplies to dream bigger and reach for the stars.",
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                amount: "₹500",
                text: "A community gains access to health awareness and life-changing knowledge.",
              },
              {
                icon: <TreePine className="h-8 w-8 text-white" />,
                amount: "₹1000",
                text: "Trees are planted to secure our planet's future for generations to come.",
              },
            ].map(({ icon, amount, text }, idx) => (
              <div
                key={idx}
                className="card card-hover rounded-3xl border-accent-warm/20 text-center p-6 sm:p-8"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-2">
                  {amount}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Donation Section */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-custom-hover border border-accent-warm/20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-4 sm:mb-6">
              Scan to Donate
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
              Be the Difference. Protect Humanity Today.
            </p>

            {/* QR Code Section */}
            <div className="bg-gradient-to-br from-accent-light to-white p-6 sm:p-8 rounded-2xl border-2 border-accent-warm mb-8">
              <div className="relative w-52 sm:w-64 aspect-[4/5] mx-auto rounded-xl overflow-hidden shadow-md border border-gray-200">
                <Image
                  src="/qr-code.jpg"
                  alt="Donation QR Code"
                  fill
                  className="object-contain bg-white p-2"
                  sizes="(max-width: 768px) 80vw, 256px"
                  priority
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center px-2">
                Scan the QR code above to donate securely.
              </p>
            </div>

            {/* Quote Section */}
            <div className="bg-gradient-to-br from-accent-light to-accent-light p-5 sm:p-6 rounded-2xl">
              <p className="text-primary-dark font-semibold text-base sm:text-lg italic leading-relaxed">
                "Your donation isn&apos;t charity — it&apos;s an investment in humanity."
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-14 sm:mt-16 px-2">
          <div className="bg-gradient-primary text-white p-8 sm:p-12 rounded-3xl shadow-custom-hover relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Every Rupee Matters
              </h3>
              <p className="text-base sm:text-xl opacity-90 max-w-xl sm:max-w-2xl mx-auto mb-5 sm:mb-6 leading-relaxed">
                Join thousands of compassionate hearts who believe in the power of giving.
                Together, we&apos;re writing stories of hope across India.
              </p>
              <div className="flex items-center justify-center space-x-2 text-accent-warm">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                <GradientText className={`text-2xl sm:text-3xl ${caveat.className}`}>
                  #ManidhamKaapom
                </GradientText>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
