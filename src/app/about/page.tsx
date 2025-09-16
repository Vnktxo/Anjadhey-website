import { Users, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-accent-light via-white to-accent-light">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-primary-dark">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Born out of the belief #ManidhamKaapom ("Protect Humanity"),
            Anjadhey Foundation began its journey in 2021 with a simple act of giving. 
            Since then, our family of volunteers has grown, reaching communities across India
            with one mission: to serve with empathy.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Mission Card */}
            <div className="card card-hover bg-gradient-to-br from-white to-accent-light">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-bold text-3xl mb-4 text-primary-dark">Our Mission</h2>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start"><span className="text-primary-light font-bold mr-2">✓</span> Protect the dignity of human life.</li>
                <li className="flex items-start"><span className="text-primary-light font-bold mr-2">✓</span> Strengthen education for children in need.</li>
                <li className="flex items-start"><span className="text-primary-light font-bold mr-2">✓</span> Reforest and revive our environment.</li>
                <li className="flex items-start"><span className="text-primary-light font-bold mr-2">✓</span> Spread awareness on health & well-being.</li>
                <li className="flex items-start"><span className="text-primary-light font-bold mr-2">✓</span> Support underprivileged families.</li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="card card-hover bg-gradient-to-br from-white to-accent-light">
               <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-bold text-3xl mb-4 text-primary-dark">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A compassionate society where dignity, diversity, and kindness guide the next generation.
              </p>
              <p className="text-primary-dark font-semibold italic mt-6 text-lg">
                ~ This is our identity. This is our promise: Together, We Protect Humanity.
              </p>
            </div>

          </div>
        </div>
      </section>

       {/* Next Gen Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Users className="h-10 w-10 text-white" />
            </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Changemakers of Tomorrow
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            At Anjadhey Foundation, we believe the future lies in the hands of our youth. 
            By engaging the next generation in volunteering and social service, we're shaping leaders who value empathy, responsibility, and inclusion.
          </p>
        </div>
      </section>
    </div>
  );
}

