import {defineCollection, z} from "astro:content";

const moviesCollection = defineCollection({
    schema: ({image}) => z.object({
        author: z.string(),
        date: z.date(),
        categories: z.array(z.string()),
        image: image(),
        title: z.string(),
        slogan: z.string(),
        trailer_url: z.string(),
    })
});

export const collections = {
    movies: moviesCollection
}