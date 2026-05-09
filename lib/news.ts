import { NewsItem } from "./types";

const THREE_YEARS_MS = 3 * 365 * 24 * 60 * 60 * 1000;

export function isArchived(item: NewsItem, now = new Date()): boolean {
  const itemDate = new Date(item.date);
  return now.getTime() - itemDate.getTime() > THREE_YEARS_MS;
}

export function partitionNews(
  items: NewsItem[],
  now = new Date()
): { active: NewsItem[]; archived: NewsItem[] } {
  const sorted = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return {
    active: sorted.filter((item) => !isArchived(item, now)),
    archived: sorted.filter((item) => isArchived(item, now)),
  };
}

export function formatNewsDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
