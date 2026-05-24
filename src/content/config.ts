import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string(),
    titleImage: z.string().optional(),
    titleImageCredit: z.string().optional(),
    coverImage: z.string().optional(),
    imageCredit: z.string().optional(),
    author: z.string().optional(),
    headerText: z.string().optional(),
  }),
});

export const collections = { articles };
