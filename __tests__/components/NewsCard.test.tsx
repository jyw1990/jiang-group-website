import { render, screen } from "@testing-library/react";
import NewsCard from "@/components/NewsCard";

describe("NewsCard", () => {
  it("renders the news text", () => {
    render(<NewsCard date="2025-04-15" text="Big announcement!" image={null} />);
    expect(screen.getByText("Big announcement!")).toBeInTheDocument();
  });

  it("renders the formatted date", () => {
    render(<NewsCard date="2025-04-15" text="test" image={null} />);
    expect(screen.getByText("April 15, 2025")).toBeInTheDocument();
  });

  it("does not render an image when image prop is null", () => {
    render(<NewsCard date="2025-04-15" text="test" image={null} />);
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("renders an image when image prop is provided", () => {
    render(<NewsCard date="2025-04-15" text="test" image="/images/news/test.jpg" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
