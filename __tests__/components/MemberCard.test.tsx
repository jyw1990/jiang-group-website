import { render, screen } from "@testing-library/react";
import MemberCard from "@/components/MemberCard";

describe("MemberCard", () => {
  const baseProps = {
    name: "Jane Doe",
    photo: "/images/members/jane-doe.jpg",
  };

  it("renders the member name", () => {
    render(<MemberCard {...baseProps} />);
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  it("renders the photo with alt text", () => {
    render(<MemberCard {...baseProps} />);
    expect(screen.getByAltText("Jane Doe")).toBeInTheDocument();
  });

  it("renders role when provided", () => {
    render(<MemberCard {...baseProps} role="PhD Student" />);
    expect(screen.getByText("PhD Student")).toBeInTheDocument();
  });

  it("renders email link when provided", () => {
    render(<MemberCard {...baseProps} email="jane@seas.upenn.edu" />);
    const link = screen.getByRole("link", { name: /jane@seas.upenn.edu/i });
    expect(link).toHaveAttribute("href", "mailto:jane@seas.upenn.edu");
  });

  it("renders bio text when provided", () => {
    render(<MemberCard {...baseProps} bio="Research on bioelectronics." />);
    expect(screen.getByText("Research on bioelectronics.")).toBeInTheDocument();
  });

  it("renders department when provided", () => {
    render(<MemberCard {...baseProps} department="Materials Science" />);
    expect(screen.getByText("Materials Science")).toBeInTheDocument();
  });

  it("renders school when provided", () => {
    render(<MemberCard {...baseProps} school="Central High School" />);
    expect(screen.getByText("Central High School")).toBeInTheDocument();
  });
});
