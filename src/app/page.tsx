import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <section
        className="bg-cover bg-center h-[60vh] rounded-lg shadow-xl flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://placehold.co/1200x600/334155/ffffff?text=Anjadhey+Foundation')",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
          Humanity in Action. Hope in Every Hand.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8 drop-shadow-sm">
          At Anjadhey Foundation, we believe that compassion can change the
          world. Together, we can restore dignity, spread kindness, and build a
          brighter tomorrow.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Join Us
          </Link>
          <Link
            href="/donate"
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Donate Now
          </Link>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-2">Protect Dignity</h3>
            <p>Protecting the dignity of every human life.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-2">Strengthen Education</h3>
            <p>Strengthening education for children in need.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-2">Revive Environment</h3>
            <p>Reforesting and reviving our environment.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-2">Spread Awareness</h3>
            <p>Spreading awareness on health & well-being.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
