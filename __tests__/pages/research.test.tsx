import { render, screen } from "@testing-library/react";
import ResearchPage from "@/app/research/page";

describe("Research page", () => {
  it("renders the Research heading", () => {
    render(<ResearchPage />);
    expect(screen.getByRole("heading", { name: /^research$/i, level: 1 })).toBeInTheDocument();
  });

  it("renders all research project titles from data", async () => {
    render(<ResearchPage />);
    expect(screen.getByText("Injectable Bioelectronics")).toBeInTheDocument();
    expect(screen.getByText("Organic Bioelectronic Materials")).toBeInTheDocument();
    expect(screen.getByText("Neural Interfaces")).toBeInTheDocument();
  });
});
