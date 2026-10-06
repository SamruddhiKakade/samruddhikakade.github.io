import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const SECTIONS = ['experience', 'research', 'education', 'certifications', 'projects'] as const;
export const AREAS = ['Machine learning', 'Language (NLP)', 'Data and networks', 'Search', 'Software', 'Games', 'Writing'] as const;

const items = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/items' }),
  schema: ({ image }) => z.object({
    title: z.string().min(1),
    section: z.enum(SECTIONS),
    // Dates as YYYY-MM; `end` omitted for a single-term item, 'present' for an ongoing one.
    start: z.string().regex(/^\d{4}-\d{2}$/),
    end: z.union([z.string().regex(/^\d{4}-\d{2}$/), z.literal('present')]).optional(),
    when: z.string().min(1),
    context: z.string().min(1),
    course: z.string().optional(),
    place: z.string().optional(),
    oneLine: z.string().min(1),
    summary: z.string().min(1),
    role: z.string().min(1),
    myPart: z.string().min(1),
    skills: z.array(z.string()).default([]),
    areas: z.array(z.enum(AREAS)).default([]),
    // Card image, where a real visual exists; cards without one show a thin area band.
    cover: image().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    status: z.enum(['published', 'draft']).default('published'),
  }),
});

export const collections = { items };
