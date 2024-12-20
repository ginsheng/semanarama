import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const movies = await getCollection('movies');
  return rss({
    title: 'Semanarama',
    description: 'Reseñas libres de spoilers',
    site: context.site,
    items: movies.map((movie) => ({
      title: movie.data.title,
      pubDate: movie.data.date,
      description: movie.data.slogan,
      categories: movie.data.categories,
      link: `/movies/${movie.slug}/`,
    })),
  });
}