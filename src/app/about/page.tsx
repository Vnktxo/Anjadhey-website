import { Users, Target, Eye, Leaf } from "lucide-react";
import Image from "next/image"; // Import the Next.js Image component

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Mayilvanan Panneerselvam",
      title: "Director",
      description:
        "The social service in other word titled as “noble” because of what it seeks to accomplish. “Speak up if you want to bring change to the world” every now and then, we meet younger versions of ourselves. We Anjadhey Helping Hands Foundation drive through the dignity of human life, strong education, reforesting the world and many. We build a diversified community connections to our next generation with core values of life.",
      quote: "Firsts are always frightening. First step, first failure, first success.",
      imageUrl: "/Mayilvanan.jpg",
    },
    {
      name: "Nishanthi Sekar",
      title: "Chief Operating Director",
      description:
        "Responsible running the facility, including its safety, financial, and commercial aspects.",
      quote:
        "Regardless of gender, dreams are the spark that ignites greatness. It's not about being a man or a woman; it's about being driven, passionate, and determined to achieve your goals. Genius knows no bounds, and game-changers come in all forms.",
      imageUrl: "/Nishanthi-sekar.jpg",
    },
    {
      name: "Benazir Parveen",
      title: "Chief Technology Director",
      description:
        "Owns the organizations social media strategy to align with an innovation, needs and managing the IT infrastructure by ensuring our competitive edge in the digital landscape.",
      quote:
        "Explore! The world is your oyster. Know your breath, stay afraid, state your Goal, situate an idea, your journey will conclude with an unique outcome.",
      imageUrl: "/Benazir-parveen.jpg",
    },
    {
      name: "Sahitha Banu",
      title: "Chief Executive Director",
      description:
        "Clear vision and aligning with the goals. Setting and Organizing each program, planning, ensuring regulatory compliance, controlling the budget, overall nurturing organizational culture.",
      quote:
        "Navigate your dreams. Unlock the hidden secrets within, trust the signs, overcome obstacles, and believe that every step shapes your destiny.",
      imageUrl: "/Sahitha-banu.jpg",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white text-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Anjadhey Foundation
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Born from the belief to #ManidhamKaapom (Protect Humanity), we are a
            growing family of volunteers dedicated to serving with empathy.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-primary-dark" />
                </div>
                <h2 className="text-3xl font-bold text-primary-dark">
                  Our Mission
                </h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-lg pl-4">
                <li>Protect the dignity of human life</li>
                <li>Strengthen education for children in need</li>
                <li>Reforest and revive our environment</li>
                <li>Spread awareness on health & well-being</li>
                <li>Support underprivileged families</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-primary-dark" />
                </div>
                <h2 className="text-3xl font-bold text-primary-dark">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg">
                A compassionate society where dignity, diversity, and kindness
                guide the next generation. This is our identity. This is our
                promise.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <Leaf size={200} className="text-primary-light/10 mx-auto" />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section - UPDATED */}
      <section className="py-20 bg-accent-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              The passionate individuals leading our mission to protect humanity.
            </p>
          </div>

          {/* 4x1 layout: each member is full-width row with image on the left, content on the right */}
          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-custom p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-6 min-h-[480px]"
              >
                {/* Photo column */}
                <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-72 md:h-80 relative rounded-xl overflow-hidden ring-1 ring-black/5 shadow-2xl">
                    <Image
                      src={member.imageUrl}
                      alt={`Photo of ${member.name}`}
                      width={176}
                      height={176}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Content column */}
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary-dark">
                    {member.name}
                  </h3>
                  <p className="text-primary-light font-semibold mb-4">
                    {member.title}
                  </p>

                  <p className="text-foreground/90 leading-relaxed mb-4">
                    {member.description}
                  </p>

                  <blockquote className="border-l-4 border-accent-warm pl-4 italic text-foreground/80">
                    "{member.quote}"
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
