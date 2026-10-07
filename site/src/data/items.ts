import { getCollection, type CollectionEntry } from 'astro:content';
import { sections } from './site';

// Published items only (drafts never build), newest first.
export async function publishedItems() {
  const all = await getCollection('items', ({ data }) => data.status === 'published');
  return all.sort((a, b) => b.data.start.localeCompare(a.data.start) || a.data.title.localeCompare(b.data.title));
}

export async function itemsIn(section: string) {
  return (await publishedItems()).filter((i) => i.data.section === section);
}

// Where an item links to: its own page, or its section page when it has none.
export function itemHref(item: CollectionEntry<'items'>) {
  if (item.data.page) return `/${item.data.section}/${item.id}/`;
  return sections.find((s) => s.key === item.data.section)?.href ?? '/';
}
