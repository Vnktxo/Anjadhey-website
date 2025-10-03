import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function NextGenPage() {
  const nextGenLeaders = [
    {
      name: "Ayisha Begam",
      description: "Passionate about environmental conservation and youth empowerment.",
      imageUrl: "/Ayisha-begam.jpg",
    },
    {
      name: "Sridharan",
      description: "Dedicated to building stronger community connections and social welfare.",
      imageUrl: "/Sridharan.JPG",
    },
    {
      name: "Sriyugan",
      description: "Committed to providing quality education opportunities for all children.",
      imageUrl: "/Sriyugan.JPG",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white text-center py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 text-accent-warm mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">
              NextGen Leaders
            </h1>
            <Sparkles className="h-12 w-12 text-accent-warm ml-4" />
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Empowering the next generation of changemakers who are shaping a better tomorrow
          </p>
        </div>
      </section>

      {/* Leaders Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Meet Our NextGen Leaders
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Young, passionate individuals driving change and inspiring communities across various initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nextGenLeaders.map((leader, index) => (
              <div
                key={index}
                className="card card-hover text-center group"
              >
                <div className="relative mb-10 overflow-hidden rounded-2xl">
                  <Image
                    src={leader.imageUrl}
                    alt={leader.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-2">
                  {leader.name}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join NextGen CTA */}
      <section className="py-20 bg-accent-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            Want to Become a NextGen Leader?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our movement and be part of the change you want to see in the world
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center"
          >
            Get Involved
            <Sparkles className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}