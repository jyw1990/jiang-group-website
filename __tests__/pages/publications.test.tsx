import { render, screen } from "@testing-library/react";
import PublicationsPage from "@/app/publications/page";

describe("Publications page", () => {
  it("renders the Publications heading", () => {
    render(<PublicationsPage />);
    expect(
      screen.getByRole("heading", { name: /publications/i, level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the Google Scholar link", () => {
    render(<PublicationsPage />);
    expect(
      screen.getByRole("link", { name: /google scholar/i })
    ).toBeInTheDocument();
  });

  it("renders publication titles from data", () => {
    render(<PublicationsPage />);
    expect(
      screen.getByText(/Topological supramolecular network/i)
    ).toBeInTheDocument();
  });

  it("groups publications by year in descending order", () => {
    render(<PublicationsPage />);
    const yearHeadings = screen.getAllByRole("heading", { level: 2 });
    const years = yearHeadings.map((h) => Number(h.textContent));
    for (let i = 1; i < years.length; i++) {
      expect(years[i - 1]).toBeGreaterThanOrEqual(years[i]);
    }
  });
});
