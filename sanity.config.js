import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
import { media } from "sanity-plugin-media";

const config = defineConfig({
  title: "Sanity CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "vedo01nm",

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-10",

  basePath: "/admin",

  plugins: [structureTool(), media(), visionTool({ defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-10" })],

  schema: {
    types: schemas,
  },
});

export default config;
