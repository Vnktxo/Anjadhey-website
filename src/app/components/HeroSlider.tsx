"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { autoplay } from "@/lib/keenAutoplay";

// Just your two images
const heroSlides = [
  { src: "/hero1.png", alt: "Helping hands" },
  { src: "/hero2.jpg", alt: "Children studying" },
];

export default function HeroSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      renderMode: "performance",
    },
    [autoplay(4000)] // 4s per slide
  );

  return (
    <section className="section-hero relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background slider */}
      <div ref={sliderRef} className="keen-slider absolute inset-0 -z-10">
        {heroSlides.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide relative w-full h-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={idx === 0}
            />
            {/* subtle dark overlay so text is readable */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-6 text-center relative z-10 flex items-center justify-center">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12">
          <h1 className="heading-xl mb-4">
            Humanity in Action.
            <br />
            <span className="text-primary-light">Hope in Every Hand.</span>
          </h1>
          <p className="subheading mb-10 max-w-3xl mx-auto">
            At Anjadhey Foundation, we believe that compassion can change the
            world. Together, we can restore dignity, spread kindness, and build
            a brighter tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/about" className="btn-outline group">
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
  );
}
