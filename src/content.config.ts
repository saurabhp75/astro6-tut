import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { defineCollection } from "astro:content"

const books = defineCollection({
    loader: glob({ base: "src/content/books", pattern: "*.md" }),
    schema: z.object({
        // id is automatically generated from the file name
        // id: z.string(), 
        title: z.string(),
        author: z.string(),
        rating: z.number(),
        summary: z.string(),
    })
})

export const collections = { books }