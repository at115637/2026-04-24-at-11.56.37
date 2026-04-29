import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    coverImage: z.string(),
    imageCredit: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { articles };
