import { type SchemaTypeDefinition } from "sanity";
import milestone from "./schemaTypes/milestones";
import galleryImage from "./schemaTypes/galleryImage";
import galleryCategory from "./schemaTypes/galleryCategory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [milestone, galleryImage, galleryCategory],
};