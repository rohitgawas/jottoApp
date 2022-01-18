export function getLetterMatchCount(guessWord, secretWord) {
  const secretLetters = secretWord.split("");
  const guessedLetterSet = new Set(guessWord);

  return secretLetters.filter((letter) => guessedLetterSet.has(letter)).length;
}
