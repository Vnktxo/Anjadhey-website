import Link from "next/link";
import { Heart, Users, TreePine, BookOpen, ArrowRight, Sprout, Library, Cake } from "lucide-react";

import HeroSlider from "./components/HeroSlider";
import Image from "next/image";

export default function Home() {
  const keyInitiatives = [
    {
      icon: TreePine,
      title: "Planting Trees",
      description: "Reforesting our environment and creating a sustainable future for generations to come through community-driven tree plantation drives.",
    },
  
    {
      icon: Library,
      title: "Anjadhey Library",
      description: "Building knowledge centers and providing access to books and learning resources for underprivileged children.",
    },
    {
      icon: Cake,
      title: "Your Fest, Their Future",
      description: "Celebrating birthdays and anniversaries by donating to children in need, turning personal milestones into moments of giving.",
    },
  ];

  const csrPartners = [
    { name: "Partner 1", logo: "https://placehold.co/200x80/0A5B2D/FFFFFF/png?text=Partner+1" },
    { name: "Partner 2", logo: "https://placehold.co/200x80/0A5B2D/FFFFFF/png?text=Partner+2" },
    { name: "Partner 3", logo: "https://placehold.co/200x80/0A5B2D/FFFFFF/png?text=Partner+3" },
    { name: "Partner 4", logo: "https://placehold.co/200x80/0A5B2D/FFFFFF/png?text=Partner+4" },
  ];

  return (
    <div className="bg-background">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Important Message Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Anjadhey Foundation</h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              We ANJADHEY Helping Hands Foundation integrated around a central vision of social change. 
              We are unified in engaging in a diverse range of activities across various sectors. We stand 
              for a remarkable stride in fulfilling our Sustainable Development, deeply dedicating ourselves 
              to an inclusive and sustainable public welfare. From strong education, deep community engagement, 
              old age, women empowerment, spirituality and sustainability etc by fostering a positive change 
              around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Cards Section */}
      <section className="py-20 bg-accent-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Mission</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Four pillars that guide our journey towards a more compassionate world
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card card-hover bg-white">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-dark">
                Protect Dignity
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Protecting the dignity of every human life with compassion and respect.
              </p>
            </div>
            <div className="card card-hover bg-white">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-dark">
                Strengthen Education
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Empowering children through quality education and learning opportunities.
              </p>
            </div>
            <div className="card card-hover bg-white">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-dark">
                Revive Environment
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Reforesting and reviving our environment for future generations.
              </p>
            </div>
            <div className="card card-hover bg-white">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-dark">
                Spread Awareness
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Building healthier communities through awareness and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Key Initiatives</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Focused programs driving meaningful change in our communities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyInitiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div key={index} className="card card-hover bg-gradient-to-br from-white to-accent-light/30">
                  <div className="w-16 h-16 bg-primary-dark rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-primary-dark">
                    {initiative.title}
                  </h3>
                  <p className="text-foreground/90 leading-relaxed text-sm">
                    {initiative.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CSR Partners Section */}
      <section className="py-16 bg-accent-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">CSR Partners</h2>
            <p className="text-lg text-foreground/80 mb-8">
              We welcome and acknowledge the receipt of funds
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {csrPartners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-custom hover:shadow-custom-hover transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="heading-lg mb-6 text-white">
            Be Part of Something Beautiful
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Every act of kindness creates ripples of hope. Join us in making the world a better place, one life at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/our-work" className="btn-light group">
              See Our Impact
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white/10 group"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}