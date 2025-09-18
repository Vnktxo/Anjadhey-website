import {defineConfig} from "sanity";
import {visionTool} from "@sanity/vision";
import {deskTool} from "sanity/desk";
import {schema} from "./src/sanity/schema";
import {structure} from "./src/sanity/structure";
import {projectId, dataset} from "./src/sanity/env";

export default defineConfig({
  name: "default",
  title: "Anjadhey Studio",
  projectId,
  dataset,
  basePath: "/admin",
  schema,
  plugins: [
    deskTool({structure}),
    visionTool(),
  ],
});
