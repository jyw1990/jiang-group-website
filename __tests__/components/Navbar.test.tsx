import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/Navbar";

// next/navigation mock is provided by next/jest automatically
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

describe("Navbar", () => {
  it("renders the lab name link", () => {
    render(<Navbar />);
    expect(screen.getByText("Jiang Group")).toBeInTheDocument();
  });

  it("renders all six navigation links on desktop", () => {
    render(<Navbar />);
    const links = ["Home", "People", "Research", "Publications", "Photos", "Contact"];
    links.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1);
    });
  });

  it("toggles mobile menu when hamburger is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByLabelText("Toggle menu");
    // Menu starts closed — desktop links exist but mobile list is hidden
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
