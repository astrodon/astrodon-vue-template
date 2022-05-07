
import type { IAppConfig } from "https://raw.githubusercontent.com/astrodon/astrodon/main/modules/astrodon/mod.ts";

export default <IAppConfig> {
  main: "./mod.ts",
  name: "My Vue app",
  id: "com.astrodon.vue",
  version: "0.1.0",
  author: "Denosaur",
  shortDescription: "Some description",
  longDescription: "More description",
  homepage: "https://astrodon.land",
  copyright: `Denosaur ${new Date().getFullYear()}`,
  permissions: {
    allow_hrtime: true,
    prompt: true,
    allow_net: [],
  },
  build: {
    dist: "./dist",
    icons: [],
    resources: ['./renderer/dist'],
  },
};