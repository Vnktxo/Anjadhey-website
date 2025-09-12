import { Target, Globe, Heart, Users } from "lucide-react"; // Using icons for visual appeal

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://placehold.co/1200x500/5a67d8/ffffff?text=Our+Story')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            About Anjadhey Foundation
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            Born out of the belief #ManidhamKaapom (&quot;Protect
            Humanity&quot;)
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Who We Are Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Anjadhey Foundation began its journey in 2021 with a simple act of
            giving. Since then, our family of volunteers has grown, reaching
            schools, villages, and communities across India with one mission: to
            serve with empathy.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
              <Heart className="mx-auto text-blue-600 mb-4 h-12 w-12" />
              <h3 className="font-semibold text-xl mb-2">
                Protect Human Dignity
              </h3>
              <p className="text-gray-600">
                We work to protect the dignity of human life and support
                underprivileged families and street communities.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
              <Users className="mx-auto text-blue-600 mb-4 h-12 w-12" />
              <h3 className="font-semibold text-xl mb-2">
                Strengthen Education
              </h3>
              <p className="text-gray-600">
                We are committed to strengthening education for children in
                need, empowering the next generation.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
              <Globe className="mx-auto text-blue-600 mb-4 h-12 w-12" />
              <h3 className="font-semibold text-xl mb-2">
                Revive Our Environment
              </h3>
              <p className="text-gray-600">
                Through tree plantation drives and awareness programs, we aim to
                reforest and revive our planet.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="mb-16 text-center bg-blue-600 text-white py-12 rounded-lg shadow-xl">
          <Target className="mx-auto mb-4 h-12 w-12" />
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-xl max-w-3xl mx-auto">
            A compassionate society where dignity, diversity, and kindness guide
            the next generation.
          </p>
        </section>

        {/* Next Gen Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Building Changemakers of Tomorrow
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Anjadhey Foundation, we believe the future lies in the hands of
            our youth. By engaging the next generation in volunteering,
            environmental action, and social service, we&apos;re shaping leaders
            who value empathy, responsibility, and inclusion. Together, We
            Protect Humanity - today and for generations to come.
          </p>
        </section>
      </div>
    </div>
  );
}
