import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { HomePage } from ".";

describe("HomePage", () => {
  it("Should render full page", () => {
    render(<HomePage />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
