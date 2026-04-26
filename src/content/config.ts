import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    coverImage: z.string(),
  }),
});

export const collections = { articles };
