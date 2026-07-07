import { defineCollection, z } from "astro:content";

const site = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    ctaEmail: z.string().email(),
    image: z.string().url(),
    favicon: z.string().url()
  })
});

export const collections = { site };
