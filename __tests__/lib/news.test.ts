import { isArchived, partitionNews, formatNewsDate } from "@/lib/news";
import { NewsItem } from "@/lib/types";

function makeItem(id: string, daysAgo: number): NewsItem {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return { id, date: date.toISOString().split("T")[0], text: "Test", image: null };
}

describe("isArchived", () => {
  it("returns false for an item from yesterday", () => {
    expect(isArchived(makeItem("a", 1))).toBe(false);
  });

  it("returns false for an item from exactly 3 years minus 1 day", () => {
    expect(isArchived(makeItem("b", 3 * 365 - 1))).toBe(false);
  });

  it("returns true for an item older than 3 years", () => {
    expect(isArchived(makeItem("c", 3 * 365 + 2))).toBe(true);
  });

  it("accepts a custom 'now' date", () => {
    const now = new Date("2026-01-01");
    const oldItem: NewsItem = {
      id: "x",
      date: "2022-01-01",
      text: "old",
      image: null,
    };
    expect(isArchived(oldItem, now)).toBe(true);

    const recentItem: NewsItem = {
      id: "y",
      date: "2025-06-01",
      text: "recent",
      image: null,
    };
    expect(isArchived(recentItem, now)).toBe(false);
  });
});

describe("partitionNews", () => {
  it("puts recent items in active and old items in archived", () => {
    const now = new Date("2026-01-01");
    const items: NewsItem[] = [
      { id: "1", date: "2025-06-01", text: "recent", image: null },
      { id: "2", date: "2022-01-01", text: "old", image: null },
    ];
    const { active, archived } = partitionNews(items, now);
    expect(active).toHaveLength(1);
    expect(active[0].id).toBe("1");
    expect(archived).toHaveLength(1);
    expect(archived[0].id).toBe("2");
  });

  it("returns items sorted newest-first within each group", () => {
    const now = new Date("2026-01-01");
    const items: NewsItem[] = [
      { id: "1", date: "2025-01-01", text: "a", image: null },
      { id: "2", date: "2025-06-01", text: "b", image: null },
      { id: "3", date: "2025-03-01", text: "c", image: null },
    ];
    const { active } = partitionNews(items, now);
    expect(active.map((i) => i.id)).toEqual(["2", "3", "1"]);
  });

  it("returns empty arrays when no items", () => {
    const { active, archived } = partitionNews([]);
    expect(active).toHaveLength(0);
    expect(archived).toHaveLength(0);
  });
});

describe("formatNewsDate", () => {
  it("formats a date string into a readable date", () => {
    expect(formatNewsDate("2025-04-15")).toBe("April 15, 2025");
  });
});
