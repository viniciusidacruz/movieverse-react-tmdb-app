import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { State } from ".";

describe("State", () => {
  it("Should be render component root", () => {
    render(<State.Root>Root</State.Root>);

    expect(screen.getByText("Root")).toBeInTheDocument();
  });

  it("Should be render component title", () => {
    render(<State.Title>Title</State.Title>);

    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("Should be render component text", () => {
    render(<State.Text>Text</State.Text>);

    expect(screen.getByText("Text")).toBeInTheDocument();
  });
});
