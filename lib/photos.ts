import { PhotoItem } from "./types";

export function formatMonthYear(monthYear: string): string {
  const [year, month] = monthYear.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export function sortPhotosDesc(photos: PhotoItem[]): PhotoItem[] {
  return [...photos].sort((a, b) => b.monthYear.localeCompare(a.monthYear));
}
