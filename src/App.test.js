import { shallow } from "enzyme";
import { findByTestAttr } from "../Test/testUtils";
import App from "./App";

const setUp = () => {
  return shallow(<App />);
};
test("renders learn react link", () => {
  const wrapper = setUp();

  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
