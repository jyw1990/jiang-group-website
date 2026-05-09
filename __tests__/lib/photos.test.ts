import { formatMonthYear, sortPhotosDesc } from "@/lib/photos";
import { PhotoItem } from "@/lib/types";

describe("formatMonthYear", () => {
  it("formats YYYY-MM into a readable month and year", () => {
    expect(formatMonthYear("2025-03")).toBe("March 2025");
    expect(formatMonthYear("2024-12")).toBe("December 2024");
  });
});

describe("sortPhotosDesc", () => {
  it("sorts photos from newest to oldest", () => {
    const photos: PhotoItem[] = [
      { id: "1", monthYear: "2024-01", caption: "a", image: "/a.jpg" },
      { id: "2", monthYear: "2025-03", caption: "b", image: "/b.jpg" },
      { id: "3", monthYear: "2024-08", caption: "c", image: "/c.jpg" },
    ];
    const sorted = sortPhotosDesc(photos);
    expect(sorted.map((p) => p.id)).toEqual(["2", "3", "1"]);
  });

  it("does not mutate the original array", () => {
    const photos: PhotoItem[] = [
      { id: "1", monthYear: "2024-01", caption: "a", image: "/a.jpg" },
      { id: "2", monthYear: "2025-03", caption: "b", image: "/b.jpg" },
    ];
    const original = [...photos];
    sortPhotosDesc(photos);
    expect(photos).toEqual(original);
  });
});
