import "./App.css";
import Congrats from "./Congrats";
import GuessedWord from "./GuessedWord";
import Input from "./Input";

function App() {
  //get props from shared state:
  const success = false;
  const secretWord = "party";
  const guessedWord = [];
  return (
    <div data-test="component-app" className="container">
      <h1>JOTTO</h1>
      <Congrats success={true}></Congrats>
      <Input success={success} secretWord={secretWord}></Input>
      <GuessedWord guessedWord={{ guessedWord }}></GuessedWord>
    </div>
  );
}

export default App;
