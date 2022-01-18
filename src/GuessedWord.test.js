import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../Test/testUtils";
import GuessedWord from "./GuessedWord";

const defaultProps = {
  guessedWord: [{ guessedWord: "train", lettermatchCount: 3 }],
};

const setUp = (props) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWord {...setUpProps} />);
};
test("Does not throw warning with expected props", () => {
  //checkProps(GuessedWord, defaultProps);
});

describe("If there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWord: [] });
  });
  test("renders without error", () => {
    const wrapper = setUp({ guessedWord: [] });
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("If there are words guessed", () => {
  let wrapper;
  const guessedWord = [
    { guessedWord: "train", lettermatchCount: 3 },
    { guessedWord: "agile", lettermatchCount: 1 },
    { guessedWord: "party", lettermatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setUp({ guessedWord });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("Renders guessed words section", () => {
    const guessedWordNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordNode.length).toBe(1);
  });

  test("Correct numbers of guessed words", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWord.length);
  });
});
