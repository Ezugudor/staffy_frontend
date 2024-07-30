import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Page", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("main");
    // const heading = screen.getByRole("main", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
