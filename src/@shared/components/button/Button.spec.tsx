import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { Button } from ".";

const mockOnClick = vi.fn();

const sut = (loading = false) => (
  <Button onClick={mockOnClick} isLoading={loading}>
    Hello
  </Button>
);

describe("Button", () => {
  it("Should render component", () => {
    render(sut());

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Hello")).toBeEnabled();
    expect(screen.queryByText("Processando...")).not.toBeInTheDocument();
  });

  it("Should render component and is render label processing when is isLoading", () => {
    render(sut(true));

    expect(screen.getByText("Processando...")).toBeInTheDocument();
    expect(screen.queryByText("Hello")).not.toBeInTheDocument();
  });

  it("Should called method onClick when is click on button", () => {
    render(sut());

    expect(screen.getByText("Hello")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Hello"));

    expect(mockOnClick).toBeCalled();
  });
});
