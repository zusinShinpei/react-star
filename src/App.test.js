import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders successfully at root", () => {
  const elem = render(<App />);
  expect(elem).toMatchSnapshot();
});
