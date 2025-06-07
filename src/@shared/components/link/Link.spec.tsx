import { BrowserRouter } from "react-router";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { Link } from ".";

const sut = (path: string) => (
  <BrowserRouter>
    <Link to={path}>Hello</Link>
  </BrowserRouter>
);

describe("Link", () => {
  it("Should render component", () => {
    render(sut("/"));

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Hello")).toHaveClass("bg-blue-500");
  });

  it("Should render component and is not selected", () => {
    render(sut("/other-route"));

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Hello")).not.toHaveClass("bg-blue-500");
  });
});
