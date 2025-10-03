import { type SchemaTypeDefinition } from "sanity";

// Import your schema type modules
import galleryImage from "./galleryImage";
import galleryCategory from "./galleryCategory";
import milestones from "./milestones";

// Add additional schema types here as you create them, e.g.
// import otherType from "./otherType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // core / content types
    galleryImage,
    galleryCategory,
    milestones,

    // register other schema types below when available
    // otherType,
  ],
};
