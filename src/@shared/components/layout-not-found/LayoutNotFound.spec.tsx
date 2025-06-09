import { BrowserRouter } from "react-router";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { LayoutNotFound } from ".";

describe("Link", () => {
  it("Should render component", () => {
    render(
      <BrowserRouter>
        <LayoutNotFound />
      </BrowserRouter>
    );

    expect(screen.getByText("Ops! página não encontrada")).toBeInTheDocument();
    expect(
      screen.getByText("Essa página não foi possível ser encontrada")
    ).toBeInTheDocument();
  });
});
