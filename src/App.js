import React, { useState } from "react"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Input from "./components/Input"
import Directions from "./components/Directions"
import Pig from "./components/Pig"

const App = () => {
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  const pigLatinCodeHere = () => {
    var arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)
    var translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u" ||
          vowel === "A" ||
          vowel === "E" ||
          vowel === "I" ||
          vowel === "O" ||
          vowel === "U"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      const firstVowel = vowelsArray[0]
      const firstVowelLocation = eachWord.indexOf(firstVowel)
      const qChecker = eachWord[firstVowelLocation - 1]
      console.log("Q checker :", qChecker)

      if (firstVowelLocation === 0) {
        return `${eachWord}way`
      } else if (qChecker === "q") {
        const whatGetsMoved = eachWord.slice(0, firstVowelLocation + 1)
        const restOfWord = eachWord.slice(firstVowelLocation + 1)
        return `${restOfWord}${whatGetsMoved}ay`
      } else if (firstVowelLocation === 1) {
        const y = eachWord.indexOf("y")
        const whatGetsRelocated = eachWord.slice(0, y)
        const restOfTheWord = eachWord.slice(y)
        return `${restOfTheWord}${whatGetsRelocated}ay`
      } else {
        const whatNeedsToMove = eachWord.slice(0, firstVowelLocation)
        const theRest = eachWord.slice(firstVowelLocation)
        return `${theRest}${whatNeedsToMove}ay`
      }
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string

    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    const movePunctuationToEnd = (str) => {
      // Create arrays to store the characters and punctuation
      let characters = []
      let punctuation = []

      // Loop through each character in the string
      for (let i = 0; i < str.length; i++) {
        // Check if the character is punctuation
        if (/[^\w\s]/.test(str[i])) {
          punctuation.push(str[i]) // If so, add it to the punctuation array
        } else {
          characters.push(str[i]) // If not, add it to the characters array
        }
      }
      return characters.join("") + punctuation.join("")
    }

    const finalProduct = movePunctuationToEnd(translatedWords)

    setInputTranslated(finalProduct)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    pigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
      <div className="body">
        <Header />
        <main>
          <Pig />
          <Directions />
          <Input
            handleInput={handleInput}
            phrase={userInput}
            setUpPreventDefault={setUpPreventDefault}
            restartGame={restartGame}
            phraseTranslated={inputTranslated}
          />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
