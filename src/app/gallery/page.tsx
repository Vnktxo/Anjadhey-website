import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

interface GalleryImage {
  _id: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  caption?: string;
}

async function getGalleryImages() {
  const query = `*[_type == "galleryImage"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function GalleryPage() {
  const images: GalleryImage[] = await getGalleryImages();

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Gallery
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A glimpse into our journey of compassion and action.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((item) => (
              <div
                key={item._id}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={urlFor(item.image).width(500).height(500).url()}
                  alt={item.caption || "Anjadhey Foundation Gallery Image"}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {item.caption && (
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                    <p>{item.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No images have been uploaded to the gallery yet.
          </p>
        )}
      </div>
    </div>
  );
}
