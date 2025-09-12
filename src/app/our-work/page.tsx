import { client } from "@/lib/sanity";
import { Calendar, MapPin } from "lucide-react";

interface Milestone {
  _id: string;
  year: string;
  location: string;
  description: string;
}

async function getMilestones() {
  const query = `*[_type == "milestone"] | order(year desc)`;
  const data = await client.fetch(query);
  return data;
}

export default async function OurWorkPage() {
  const milestones: Milestone[] = await getMilestones();

  return (
    <div className="bg-white">
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Our Work & Milestones
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Every milestone is a story of humanity in action. Here are some of
            our key initiatives.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="relative border-l-2 border-blue-500 ml-4 md:ml-0">
          {milestones.length > 0 ? (
            milestones.map((milestone, index) => (
              <div key={milestone._id} className="mb-12 pl-8 md:pl-12 relative">
                <div className="absolute -left-4 top-1 h-8 w-8 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <div className="flex items-center gap-2 text-lg font-bold text-blue-600">
                      <Calendar className="h-5 w-5" />
                      <span>{milestone.year}</span>
                    </div>
                    {milestone.location && (
                      <div className="flex items-center gap-2 text-md font-semibold text-gray-700">
                        <MapPin className="h-5 w-5" />
                        <span>{milestone.location}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No milestones have been added yet. Please check back soon!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
