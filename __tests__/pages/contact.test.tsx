import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";

describe("Contact page", () => {
  it("renders the Contact heading", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: /contact/i, level: 1 })).toBeInTheDocument();
  });

  it("renders PI name", () => {
    render(<ContactPage />);
    expect(screen.getByText(/Dr. Yuanwen Jiang/)).toBeInTheDocument();
  });

  it("renders email link", () => {
    render(<ContactPage />);
    const emailLinks = screen.getAllByRole("link", { name: /ywjiang@seas.upenn.edu/i });
    expect(emailLinks.length).toBeGreaterThanOrEqual(1);
    expect(emailLinks[0]).toHaveAttribute("href", "mailto:ywjiang@seas.upenn.edu");
  });

  it("renders the prospective students section", () => {
    render(<ContactPage />);
    expect(screen.getByText(/Prospective Students/i)).toBeInTheDocument();
  });
});
