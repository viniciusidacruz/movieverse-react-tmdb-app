import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/dom";

import { Card } from ".";

const mockOnClickIconButton = vi.fn();

describe("Card", () => {
  it("Should be render component root", () => {
    render(<Card.Root>Root</Card.Root>);

    expect(screen.getByText("Root")).toBeInTheDocument();
  });

  it("Should be render component title", () => {
    render(<Card.Title>Title</Card.Title>);

    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("Should be render component Icon button", () => {
    render(<Card.Icon onClick={mockOnClickIconButton}>Icon</Card.Icon>);

    const button = screen.getByRole("button", { name: "Icon" });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockOnClickIconButton).toHaveBeenCalled();
  });

  it("Should be render component image", () => {
    render(<Card.Image src="example.com" alt="example" />);

    expect(screen.getByAltText("example")).toBeInTheDocument();
  });

  it("Should be render component image without src", () => {
    render(<Card.Image src="" alt="example" />);

    expect(screen.queryByAltText("example")).not.toBeInTheDocument();
    expect(screen.getByText("Poster do filme")).toBeInTheDocument();
  });
});
