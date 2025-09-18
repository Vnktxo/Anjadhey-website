import type { StructureResolver } from "sanity/desk";

// This is a basic structure resolver. You can customize it later to organize your documents in the Studio.
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      // Add your document types here. For example:
      S.documentTypeListItem("milestone").title("Milestones"),
      S.documentTypeListItem("galleryImage").title("Gallery Images"),
    ]);
