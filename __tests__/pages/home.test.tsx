import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: () => [jest.fn(), { scrollPrev: jest.fn(), scrollNext: jest.fn() }],
}));

describe("Home page", () => {
  it("renders the hero heading", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: /jiang group/i, level: 1 })).toBeInTheDocument();
  });

  it("renders the News section heading", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: /news/i })).toBeInTheDocument();
  });

  it("renders the Research Highlights section", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { name: /research highlights/i })
    ).toBeInTheDocument();
  });

  it("renders Quick Links sidebar", () => {
    render(<HomePage />);
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getAllByText("Our Research").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Lab Members")).toBeInTheDocument();
  });
});
