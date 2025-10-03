"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export default function HeroSlider() {
  return (
    <section className="relative min-h-[105vh] lg:min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-[#2a633b]/20 to-[#2a633b]">
      {/* Top heading */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-[#2a633b]">
          Humanity in Action.
        </h1>
        <p className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-3xl font-semibold text-[#2a633b]/90">
          Hope in Every Hand.
        </p>
      </div>

      {/* Main content: left card – center image – right card */}
      <div className="relative z-10 mx-auto mt-8 sm:mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 px-4 sm:px-6 lg:mt-20 lg:grid-cols-3">
        {/* Left card */}
        <div className="order-2 lg:order-1 -mt-4 sm:-mt-6 lg:-mt-20">
          <div className="rounded-2xl bg-[#2a633b]/40 p-4 sm:p-6 md:p-8 text-center lg:text-left text-white backdrop-blur-md shadow-lg">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              At Anjadhey Foundation, we believe that compassion can change the
              world. Together, we can restore dignity, spread kindness, and
              build a brighter tomorrow.
            </p>
          </div>

          <div className="mt-4 sm:mt-5 flex justify-center lg:justify-start">
            <Link
              href="/about"
              className="inline-flex items-center rounded-xl bg-white/80 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-900 backdrop-blur transition hover:bg-white"
            >
              Join Our Mission
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>

        {/* Center image */}
        <div className="order-1 flex justify-center lg:order-2">
          <Image
            src="/MP.png"
            alt="Founder"
            width={600}
            height={800}
            priority
            className="h-auto w-[220px] sm:w-[280px] md:w-[400px] lg:w-[600px]"
          />
        </div>

        {/* Right card */}
        <div className="order-3 -mt-4 sm:-mt-6 lg:-mt-20">
          <div className="rounded-2xl bg-[#2a633b]/40 p-4 sm:p-6 md:p-8 text-center lg:text-right text-white backdrop-blur-md shadow-lg">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Put your compassion into action. A contribution from you today helps create tangible, lasting change.
            </p>
          </div>

          <div className="mt-4 sm:mt-5 flex justify-center lg:justify-end">
            <Link
              href="/donate"
              className="inline-flex items-center rounded-xl bg-white/80 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-900 backdrop-blur transition hover:bg-white"
            >
              Donate Now
              <Heart className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* bottom vignette for depth */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#2a633b]/50 to-transparent" />
    </section>
  );
}
