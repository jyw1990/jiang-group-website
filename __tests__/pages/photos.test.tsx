import { render, screen } from "@testing-library/react";
import PhotosPage from "@/app/photos/page";

describe("Photos page", () => {
  it("renders the Photos heading", () => {
    render(<PhotosPage />);
    expect(screen.getByRole("heading", { name: /photos/i, level: 1 })).toBeInTheDocument();
  });

  it("renders photo captions from data", () => {
    render(<PhotosPage />);
    expect(screen.getByText("Group outing at Penn campus")).toBeInTheDocument();
  });

  it("renders formatted month-year labels", () => {
    render(<PhotosPage />);
    expect(screen.getByText("March 2025")).toBeInTheDocument();
  });
});
