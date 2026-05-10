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

  it("renders an empty state when there are no publications", () => {
    render(<PublicationsPage />);
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
  });
});
