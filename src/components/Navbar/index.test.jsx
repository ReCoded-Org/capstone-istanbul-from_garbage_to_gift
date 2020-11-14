import React from "react";
import renderer from "react-test-renderer";
import SiteNavbar from "./";

it("renders ProjectDescription correctly", () => {
  const tree = renderer.create(<SiteNavbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
