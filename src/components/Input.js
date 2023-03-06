import React, { useState } from "react"

const Input = () => {
  const [phrase, setPhrase] = useState("")
  const [phraseTranslated, setPhraseTranslated] = useState("")

  const myPigLatinCodeHere = () => {
    let userInput = phrase.split(" ")
    console.log("userInput:", userInput)
    let translatedWordsArray = userInput.map((currentWord) => {
      console.log("currentWord:", currentWord)
      let vowelsArray = currentWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })

      console.log("vowelsArray:", vowelsArray)

      let addAy = "y"

      let translatePigLatin = (str) => {
        let currentWord = ""

        if (vowelsArray.indexOf(str[0]) > -1) {
          currentWord = str + "way"
          return currentWord
        } else if (currentWord.split("")[0] === addAy) {
          //   let secondMatch = str.match(/[aeiou]/g) || 0;
          let vowel = str.indexOf(currentWord[1])
          currentWord = str.substring(vowel) + str.substring(0, vowel) + "ay"
          return currentWord
        } else if (str.slice(0, 2) === "qu") {
          return str.slice(2) + str.slice(0, 2) + "ay"
        } else {
          let firstMatch = str.match(/[aeiou]/g) || 0
          let vowel = str.indexOf(firstMatch[0])
          currentWord = str.substring(vowel) + str.substring(0, vowel) + "ay"
          return currentWord
        }
      }

      console.log(translatePigLatin(""))
      console.log(translatePigLatin(phrase))
      console.log(translatePigLatin(phraseTranslated))
      return translatePigLatin(currentWord)
    })

    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    this.setState({ phraseTranslated: translatedWords })
  }

  const restartGame = () => {
    setPhrase("")
    setPhraseTranslated("")
  }

  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  const handleInput = (e) => {
    setPhrase({ phrase: e.target.value })
  }
  return (
    <>
      <div className="inputArea">
        <h2>Enter phrase to be translated:</h2>
        <input
          type="text"
          placeholder="Enter text here"
          className="userInput"
          onChange={handleInput}
          value={phrase}
        />
        <br />
        <button onClick={setUpPreventDefault}>Submit</button>
        <button onClick={restartGame}>Clear</button>
      </div>
      <div className="output">{phraseTranslated}</div>
    </>
  )
}

export default Input
