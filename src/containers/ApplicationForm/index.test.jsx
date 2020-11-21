import React from "react";
import renderer from "react-test-renderer";
import ApplicationPage from "./";

it("renders ApplicationPage correctly", () => {
  const tree = renderer.create(<ApplicationPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
