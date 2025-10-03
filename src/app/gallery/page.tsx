import { client } from "@/lib/sanity";
import urlFor from "@/sanity/urlFor";
import Image from "next/image";

interface GalleryImageAsset {
  _id?: string;
  url?: string;
  metadata?: { lqip?: string } | null;
}

interface GalleryImage {
  _id: string;
  caption?: string;
  image?: { asset?: GalleryImageAsset } | null;
}

interface CategoryWithImages {
  _id: string;
  title: string;
  images: GalleryImage[];
}

export const revalidate = 60;

// Fetch categories (ordered) and their referenced images
async function getCategoriesWithImages(): Promise<CategoryWithImages[]> {
  const query = `*[_type == "galleryCategory"] | order(order asc) {
    _id,
    title,
    "images": *[_type == "galleryImage" && references(^._id)] | order(_createdAt desc) {
      _id,
      caption,
      image { asset->{ _id, url, metadata { lqip } } }
    }
  }`;
  return client.fetch<CategoryWithImages[]>(query);
}

export default async function GalleryPage(): Promise<JSX.Element> {
  const categories = await getCategoriesWithImages();

  return (
    <div className="bg-accent-light min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into our journey of compassion and action.
          </p>
        </div>

        {categories.length === 0 ? (
          <p className="text-center text-gray-600 py-16">
            No categories or images available yet.
          </p>
        ) : (
          categories.map((cat) => (
            <section key={cat._id} className="mb-14">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-6">
                {cat.title}
              </h2>

              {cat.images && cat.images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {cat.images.map((item) => {
                    const id = item._id;
                    const caption = item.caption ?? "Anjadhey Foundation Gallery Image";

                    const src = item.image?.asset?.url
                      ? urlFor(item.image).width(800).height(800).auto("format").url()
                      : "";

                    const lqip = item.image?.asset?.metadata?.lqip ?? undefined;

                    if (!src) {
                      return (
                        <div
                          key={id}
                          className="rounded-lg shadow-custom bg-white p-8 flex items-center justify-center aspect-square"
                        >
                          <span className="text-gray-500">Image unavailable</span>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={id}
                        className="group relative overflow-hidden rounded-2xl shadow-custom"
                      >
                        <Image
                          src={src}
                          alt={caption}
                          width={800}
                          height={800}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          placeholder={lqip ? "blur" : "empty"}
                          blurDataURL={lqip}
                        />
                        {item.caption && (
                          <div className="absolute bottom-0 left-0 w-full bg-primary-dark/80 text-white p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                            <p>{item.caption}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500">No images available in this category yet.</p>
              )}
            </section>
          ))
        )}
      </div>
    </div>
  );
}
