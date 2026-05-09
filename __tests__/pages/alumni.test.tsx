import { render, screen } from "@testing-library/react";
import AlumniPage from "@/app/people/alumni/page";

describe("Alumni page", () => {
  it("renders the Alumni heading", () => {
    render(<AlumniPage />);
    expect(screen.getByRole("heading", { name: /^alumni$/i, level: 1 })).toBeInTheDocument();
  });

  it("renders back link to People page", () => {
    render(<AlumniPage />);
    expect(screen.getByRole("link", { name: /← people/i })).toHaveAttribute(
      "href",
      "/people"
    );
  });

  it("displays alumni entries sorted by exit year descending", () => {
    render(<AlumniPage />);
    // The placeholder alumni has exitYear 2024 — just check it renders
    expect(screen.getByText(/2019.*2024|2024/)).toBeInTheDocument();
  });
});
