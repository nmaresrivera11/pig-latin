import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: "",
      phraseTranslated: "",
    };
  }

  myPigLatinCodeHere = () => {
    let userInput = this.state.phrase.split(" ");
    console.log("userInput:", userInput);
    let translatedWordsArray = userInput.map((currentWord) => {
      console.log("currentWord:", currentWord);
      let vowelsArray = currentWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        );
      });

      console.log("vowelsArray:", vowelsArray);

      let addAy = "y";

      let translatePigLatin = (str) => {
        let currentWord = "";

        if (vowelsArray.indexOf(str[0]) > -1) {
          currentWord = str + "way";
          return currentWord;
        } else if (currentWord.split("")[0] === addAy) {
          //   let secondMatch = str.match(/[aeiou]/g) || 0;
          let vowel = str.indexOf(currentWord[1]);
          currentWord = str.substring(vowel) + str.substring(0, vowel) + "ay";
          return currentWord;
        } else if (str.slice(0, 2) === "qu") {
          return str.slice(2) + str.slice(0, 2) + "ay";
        } else {
          let firstMatch = str.match(/[aeiou]/g) || 0;
          let vowel = str.indexOf(firstMatch[0]);
          currentWord = str.substring(vowel) + str.substring(0, vowel) + "ay";
          return currentWord;
        }
      };

      console.log(translatePigLatin(""));
      console.log(translatePigLatin(this.state.phrase));
      console.log(translatePigLatin(this.state.phraseTranslated));
      return translatePigLatin(currentWord);
    });

    let translatedWords = translatedWordsArray.join(" ");
    console.log("translatedWords:", translatedWords);

    this.setState({ phraseTranslated: translatedWords });
  };

  restartGame = () => {
    this.setState({
      phrase: "",
      phraseTranslated: "Try another phrase!",
    });
  };

  setUpPreventDefault = (e) => {
    e.preventDefault();
    this.myPigLatinCodeHere();
  };

  handleInput = (e) => {
    this.setState({ phrase: e.target.value });
  };
  render() {
    return (
      <>
        <div className="inputArea">
          <h2>Enter phrase to be translated:</h2>
          <input
            type="text"
            placeholder="Enter text here"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <div className="output">{this.state.phraseTranslated}</div>
      </>
    );
  }
}

export default Input;
