import Link from "next/link";
import { Heart, Users, TreePine, BookOpen, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-accent-light via-white to-accent-light min-h-screen">
      {/* Hero Section */}
      <section className="section-hero">
        <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
        <div className="absolute inset-0 gradient-ring"></div>
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12">
            <h1 className="heading-xl mb-4">
              Humanity in Action.
              <br />
              <span className="text-primary-light">Hope in Every Hand.</span>
            </h1>
            <p className="subheading mb-10 max-w-3xl mx-auto">
              At Anjadhey Foundation, we believe that compassion can change the world. 
              Together, we can restore dignity, spread kindness, and build a brighter tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/about" className="btn-outline">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/donate" className="btn-primary">
                <Heart className="inline mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cards Section */}
      <section className="section-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four pillars that guide our journey towards a more compassionate world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card card-hover bg-gradient-to-br from-white to-accent-light">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-dark">Protect Dignity</h3>
              <p className="text-gray-600 leading-relaxed">
                Protecting the dignity of every human life with compassion and respect.
              </p>
            </div>

            <div className="card card-hover bg-gradient-to-br from-white to-accent-light">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-dark">Strengthen Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering children through quality education and learning opportunities.
              </p>
            </div>

            <div className="card card-hover bg-gradient-to-br from-white to-accent-light">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-dark">Revive Environment</h3>
              <p className="text-gray-600 leading-relaxed">
                Reforesting and reviving our environment for future generations.
              </p>
            </div>

            <div className="card card-hover bg-gradient-to-br from-white to-accent-light">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-dark">Spread Awareness</h3>
              <p className="text-gray-600 leading-relaxed">
                Building healthier communities through awareness and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="heading-lg mb-6 text-white">
            Be Part of Something Beautiful
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Every act of kindness creates ripples of hope. Join us in making the world 
            a better place, one life at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/our-work" className="btn-light">
              See Our Impact
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:text-white/90 hover:bg-white/10">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}