import React from "react";
import PropTypes from "prop-types";

const GuessedWord = (props) => {
  let contents;
  if (props.guessedWord.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to get the sectret word!</span>
    );
  } else {
    const guessedWordsRows = props.guessedWord.map((word, index) => (
      <>
        <tr data-test="guessed-word" key={index}>
          <td>{word.guessedWords}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      </>
    ));

    contents = (
      <div data-test="guessed-words">
        <h3>Guessed words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWord.propTypes = {
  guessedWord: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWords: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default GuessedWord;
