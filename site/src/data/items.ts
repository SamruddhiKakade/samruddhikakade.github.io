import { getCollection } from 'astro:content';

// Published items only (drafts never build), newest first.
export async function publishedItems() {
  const all = await getCollection('items', ({ data }) => data.status === 'published');
  return all.sort((a, b) => b.data.start.localeCompare(a.data.start) || a.data.title.localeCompare(b.data.title));
}

export async function itemsIn(section: string) {
  return (await publishedItems()).filter((i) => i.data.section === section);
}
