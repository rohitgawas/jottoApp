import checkPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (Component, confirmingProp) => {
  const propError = checkPropTypes(
    Component.propTypes,
    confirmingProp,
    "prop",
    Component.name
  );
  expect(propError).toBeUndefined();
};
