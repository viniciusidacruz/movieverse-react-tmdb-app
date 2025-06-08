import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { Badge } from ".";

describe("Badge", () => {
  it("Should render component", () => {
    render(<Badge>Hello</Badge>);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
