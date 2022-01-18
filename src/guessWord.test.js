import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../Test/testUtils";

const setUp = (state) => {
  const wrapper = mount(<App></App>);

  //add value in the input box :

  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  //simulate click on submit button :

  const submitButton = findByTestAttr(wrapper, "submit-button");

  submitButton.simulate("click", { preventDefault() {} });
};

describe("no word guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ secretWord: "party", success: false, guessedWord: [] });
  });
  test("creates GuessedWords table with one row", () => {
    const guessedWordsRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsRows.length).toBe(1);
  });
});
describe("some word guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({
      secretWord: "party",
      success: false,
      guessedWord: [{ guessedWords: "agile", letterMatchCount: 1 }],
    });
  });
  test("add rows to guessedWords table", () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(2);
  });
});
describe("guess secret word", () => {});
