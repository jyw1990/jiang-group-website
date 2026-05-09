import { render, screen } from "@testing-library/react";
import PeoplePage from "@/app/people/page";

describe("People page", () => {
  it("renders the People heading", () => {
    render(<PeoplePage />);
    expect(screen.getByRole("heading", { name: /people/i, level: 1 })).toBeInTheDocument();
  });

  it("renders the Principal Investigator section", () => {
    render(<PeoplePage />);
    expect(screen.getByText("Principal Investigator")).toBeInTheDocument();
  });

  it("renders the Alumni link", () => {
    render(<PeoplePage />);
    expect(screen.getByRole("link", { name: /view alumni/i })).toHaveAttribute(
      "href",
      "/people/alumni"
    );
  });
});
