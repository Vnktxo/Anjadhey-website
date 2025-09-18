import { Users, Target, Eye } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Mayilvanan Panneerselvam",
      title: "Director",
      description:
        "The social service in other word titled as “noble” because of what it seeks to accomplish. “Speak up if you want to bring change to the world” every now and then, we meet younger versions of ourselves. We Anjadhey Helping Hands Foundation drive through the dignity of human life, strong education, reforesting the world and many. We build a diversified community connections to our next generation with core values of life.",
      quote:
        "Firsts are always frightening. First step, first failure, first success.",
    },
    {
      name: "Nishanthi Sekar",
      title: "Chief Operating Director",
      description:
        "Responsible running the facility, including its safety, financial, and commercial aspects.",
      quote:
        "Regardless of gender, dreams are the spark that ignites greatness. It's not about being a man or a woman; it's about being driven, passionate, and determined to achieve your goals. Genius knows no bounds, and game-changers come in all forms.",
    },
    {
      name: "Benazir Parveen",
      title: "Chief Technology Director",
      description:
        "Owns the organizations social media strategy to align with an innovation, needs and managing the IT infrastructure by ensuring our competitive edge in the digital landscape.",
      quote:
        "Explore! The world is your oyster. Know your breath, stay afraid, state your Goal, situate an idea, your journey will conclude with an unique outcome.",
    },
    {
      name: "Sahitha Banu",
      title: "Chief Executive Director",
      description:
        "Clear vision and aligning with the goals. Setting and Organizing each program, planning, ensuring regulatory compliance, controlling the budget, overall nurturing organizational culture.",
      quote:
        "Navigate your dreams. Unlock the hidden secrets within, trust the signs, overcome obstacles, and believe that every step shapes your destiny.",
    },
  ];

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
            Anjadhey Foundation began its journey in 2021 with a simple act of
            giving. Since then, our family of volunteers has grown, reaching
            communities across India with one mission: to serve with empathy.
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
              <h2 className="font-bold text-3xl mb-4 text-primary-dark">
                Our Mission
              </h2>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-primary-light font-bold mr-2">✓</span>{" "}
                  Protect the dignity of human life.
                </li>
                <li className="flex items-start">
                  <span className="text-primary-light font-bold mr-2">✓</span>{" "}
                  Strengthen education for children in need.
                </li>
                <li className="flex items-start">
                  <span className="text-primary-light font-bold mr-2">✓</span>{" "}
                  Reforest and revive our environment.
                </li>
                <li className="flex items-start">
                  <span className="text-primary-light font-bold mr-2">✓</span>{" "}
                  Spread awareness on health & well-being.
                </li>
                <li className="flex items-start">
                  <span className="text-primary-light font-bold mr-2">✓</span>{" "}
                  Support underprivileged families.
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="card card-hover bg-gradient-to-br from-white to-accent-light">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-bold text-3xl mb-4 text-primary-dark">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A compassionate society where dignity, diversity, and kindness
                guide the next generation.
              </p>
              <p className="text-primary-dark font-semibold italic mt-6 text-lg">
                ~ This is our identity. This is our promise: Together, We
                Protect Humanity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-accent-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              The passionate individuals leading our mission to protect
              humanity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-custom p-8 flex flex-col transition-all duration-300 hover:shadow-custom-hover hover:-translate-y-2"
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-primary-dark">
                    {member.name}
                  </h3>
                  <p className="text-primary-light font-semibold mb-4">
                    {member.title}
                  </p>
                  <p className="text-foreground/90 leading-relaxed mb-6">
                    {member.description}
                  </p>
                </div>
                <blockquote className="border-l-4 border-accent-warm pl-4 italic text-foreground/80">
                  "{member.quote}"
                </blockquote>
              </div>
            ))}
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
            At Anjadhey Foundation, we believe the future lies in the hands of
            our youth. By engaging the next generation in volunteering and
            social service, we're shaping leaders who value empathy,
            responsibility, and inclusion.
          </p>
        </div>
      </section>
    </div>
  );
}
