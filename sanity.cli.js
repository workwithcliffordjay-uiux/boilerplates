import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "vedo01nm",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
});
