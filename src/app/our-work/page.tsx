import { BookOpen, Heart, Leaf, Droplet } from "lucide-react";

/**
 * Responsive milestone layout — desktop has timeline nodes with icons,
 * mobile stacked cards without icons.
 */

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f5e9] via-[#cfe6cc] to-[#2a633b]">
      {/* Header */}
      <section className="pt-16 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#174a2b]">
            MILESTONES
          </h1>

          <div className="mt-6 flex justify-center">
            <div
              className="w-full max-w-[820px] border-t-4 border-dotted"
              style={{ borderColor: "rgba(255,255,255,0.6)" }}
            />
          </div>
        </div>
      </section>

      {/* Timeline container */}
      <section className="pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* SVG connectors: visible only on large screens */}
            <svg
              className="hidden lg:block absolute inset-0 pointer-events-none"
              viewBox="0 0 1200 640"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              {/* Symmetric connectors */}
<path
  d="M150 160 L400 160 L600 320 L800 160 L1050 160"
  stroke="rgba(255,255,255,0.95)"
  strokeWidth="8"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
/>
<path
  d="M150 480 L400 480 L600 320 L800 480 L1050 480"
  stroke="rgba(255,255,255,0.95)"
  strokeWidth="8"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
/>

            </svg>

            {/* ---------- DESKTOP GRID (with icons) ---------- */}
            <div
              className="hidden lg:grid gap-12 lg:gap-16 grid-cols-3 items-start"
              style={{ minHeight: 520 }}
            >
              {/* TOP-LEFT CARD */}
              <div className="flex flex-col items-start">
                <div className="bg-[#2a633b]/70 backdrop-blur-md text-white rounded-2xl p-8 shadow-lg w-full">
                  <h3 className="text-2xl font-semibold mb-3">Stationaries 1</h3>
                  <p className="leading-relaxed text-lg">
                    We planned to distribute basic stationaries set for minimum 2025 students.
                  </p>
                  <p className="mt-4 font-semibold py-5">Budget : 10 L</p>
                </div>

                <div className="mt-10">
                  <Node icon={<BookOpen className="h-6 w-6 text-white" />} />
                </div>
              </div>

              <div />

              {/* TOP-RIGHT CARD */}
              <div className="flex flex-col items-end">
                <div className="bg-[#2a633b]/70 backdrop-blur-md text-white rounded-2xl p-8 shadow-lg w-full">
                  <h3 className="text-2xl font-semibold mb-3">Girivalam Donation 2</h3>
                  <p className="leading-relaxed text-lg">
                    We planned to donation Health Drinks and Food for Girivalam Devotees (<span className="underline">Pournami and Ammavasai</span>)
                  </p>
                  <p className="mt-4 font-semibold">Budget : 45 L</p>
                </div>

                <div className="mt-10">
                  <Node icon={<Heart className="h-6 w-6 text-white" />} />
                </div>
              </div>

              {/* BOTTOM-LEFT CARD */}
              <div className="flex flex-col items-start">
                <div className="bg-[#2a633b]/70 backdrop-blur-md text-white rounded-2xl p-8 shadow-lg w-full">
                  <h3 className="text-2xl font-semibold mb-3">Sustainability 3</h3>
                  <p className="leading-relaxed text-lg">
                    We planned to support old age people, organize awareness camp, afforestation and groceries donation to villages throughout <span className="underline">tamilnadu</span>.
                  </p>
                  <p className="mt-4 font-semibold">Budget : 5 L</p>
                </div>

                <div className="mt-10">
                  <Node icon={<Leaf className="h-6 w-6 text-white" />} />
                </div>
              </div>

              <div />

              {/* BOTTOM-RIGHT CARD */}
              <div className="flex flex-col items-end">
                <div className="bg-[#2a633b]/70 backdrop-blur-md text-white rounded-2xl p-8 shadow-lg w-full">
                  <h3 className="text-2xl font-semibold mb-3">Organic Sanitary Pads 4</h3>
                  <p className="leading-relaxed text-lg">
                    We planned to distribute Organic Sanitary pads for minimum 2025 village teen girls.
                  </p>
                  <p className="mt-4 font-semibold py-7">Budget : 3 L</p>
                </div>

                <div className="mt-10">
                  <Node icon={<Droplet className="h-6 w-6 text-white" />} />
                </div>
              </div>
            </div>

            {/* ---------- MOBILE STACK (NO ICONS) ---------- */}
            <div className="block lg:hidden mt-10 space-y-6">
              <MobileNodeCard
                title="Stationaries 1"
                desc="We planned to distribute basic stationaries set for minimum 2025 students."
                budget="10 L"
              />
              <MobileNodeCard
                title="Girivalam Donation 2"
                desc="We planned to donation Health Drinks and Food for Girivalam Devotees (Pournami and Ammavasai)"
                budget="45 L"
              />
              <MobileNodeCard
                title="Sustainability 3"
                desc="We planned to support old age people, organize awareness camp, afforestation and groceries donation to villages throughout tamilnadu."
                budget="5 L"
              />
              <MobileNodeCard
                title="Organic Sanitary Pads 4"
                desc="We planned to distribute Organic Sanitary pads for minimum 2025 village teen girls."
                budget="3 L"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Small helper components */

function Node({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="relative w-[84px] h-[84px]">
      <div
        className="absolute inset-0 rounded-full bg-[#14502f] flex items-center justify-center"
        style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.18)" }}
      >
        {icon}
      </div>
      <div className="absolute left-0 right-0 -top-6 h-[50%] overflow-hidden">
        <div className="w-full bg-[#ffd400] h-full rounded-t-full flex items-center justify-center text-[#14502f] font-bold text-sm">
          2025
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[50%] w-3.5 h-3.5 bg-white rounded-full" />
    </div>
  );
}

function MobileNodeCard({
  title,
  desc,
  budget,
}: {
  title: string;
  desc: string;
  budget: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#2a633b]/70 backdrop-blur-md text-white rounded-2xl p-4 shadow-md w-full">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm leading-relaxed">{desc}</p>
        <p className="mt-3 font-semibold text-sm">Budget : {budget}</p>
      </div>
    </div>
  );
}
