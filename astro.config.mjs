import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          {
            name: "music",
            label: "Music",
            folder: "src/content/music",
            slug: "{{sortOrder}}-{{slug}}",
            create: true,
            delete: true,
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Link", name: "link", widget: "string" },
              { label: "Release Year", name: "year", widget: "string" },
              { label: "Slug", name: "slug", widget: "string" },
              { label: "Item Number", name: "sortOrder", widget: "number" },
            ],
          },
        ],
      },
    }),
  ],
});
