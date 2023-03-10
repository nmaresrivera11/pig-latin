import React, { useState } from "react"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Input from "./components/Input"
import Directions from "./components/Directions"
import butcherPig from "./assets/butcherPig.jpeg"

const App = () => {
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  const pigLatinCodeHere = () => {
    var arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)
    var translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)
      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
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

      // ACTION ITEM: your Pig Latin logic goes here!

      //----> **Story 1: In order to see English words converted to Pig Latin, as the user of the application, I need to see words beginning with a vowel translated to add "way" the end.**
      if (vowelsArray.includes(eachWord.charAt(0))) {
        return eachWord + "way"
        //-----> **Story 2: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have "qu" in the first syllable translated by moving all the consonant and the "u" to the end and add "ay".**
      } else if (eachWord.includes("qu")) {
        const indexOfU = eachWord.indexOf("u")
        const leftOfU = eachWord.slice(0, indexOfU + 1)
        return vowelsArray.join("").slice(1) + leftOfU + "ay"
        //---->**Story 4: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have one or more consonants translated by moving all the consonant to the end and add "ay".**
      } else if (vowelsArray.length !== 0) {
        const firstVowel = eachWord.indexOf(vowelsArray[0])
        const saveCons = eachWord.slice(0, firstVowel)
        return vowelsArray.join("") + saveCons + "ay"
        //----> **Story 3: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have no vowels other than "y" translated by moving all the consonant to the end and add "ay".**
      } else if (vowelsArray.length === 0 && eachWord.includes("y")) {
        const indexOfY = eachWord.indexOf("y")
        const everythingButTheY = eachWord.slice(0, indexOfY)
        return "y" + everythingButTheY + "ay"
      } else {
        const catchAll = "something went wrong"
        return catchAll
      }
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
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
  //   let translatedWordsArray = userInput.map((currentWord) => {
  //     // console.log("currentWord:", currentWord)
  //     let vowelsArray = currentWord.split("").filter((vowel) => {
  //       return (
  //         vowel === "a" ||
  //         vowel === "e" ||
  //         vowel === "i" ||
  //         vowel === "o" ||
  //         vowel === "u"
  //       )
  //     })

  //     // console.log("vowelsArray:", vowelsArray)

  //     let addAy = "y"

  //     let translatePigLatin = (str) => {
  //       let currentWord = ""

  //       if (vowelsArray.indexOf(str[0]) > -1) {
  //         currentWord = str + "way"
  //         return currentWord
  //       } else if (currentWord.split("")[0] === addAy) {
  //         //   let secondMatch = str.match(/[aeiou]/g) || 0;
  //         let vowel = str.indexOf(currentWord[1])
  //         currentWord = str.substring(vowel) + str.substring(0, vowel) + "ay"
  //         return currentWord
  //       } else if (str.slice(0, 2) === "qu") {
  //         return str.slice(2) + str.slice(0, 2) + "ay"
  //       } else {
  //         let firstMatch = str.match(/[aeiou]/g) || 0
  //         let vowel = str.indexOf(firstMatch[0])
  //         currentWord = str.substring(vowel) + str.substring(0, vowel) + "ay"
  //         return currentWord
  //       }
  //     }

  //     // console.log(translatePigLatin(""))
  //     // console.log(translatePigLatin(phrase))
  //     // console.log(translatePigLatin(phraseTranslated))
  //     return translatePigLatin(currentWord)
  //   })

  //   let translatedWords = translatedWordsArray.join(" ")
  //   // console.log("translatedWords:", translatedWords)

  //   setPhraseTranslated(translatedWords)
  // }

  // const restartGame = () => {
  //   setPhrase("")
  //   setPhraseTranslated("")
  // }

  // const setUpPreventDefault = (e) => {
  //   e.preventDefault()
  //   pigLatinCodeHere()
  // }

  // const handleInput = (e) => {
  //   setPhrase({ phrase: e.target.value })
  // }
  return (
    <>
      <Header />
      <img
        src={butcherPig}
        alt="pig with butcher cut names in pig latin"
        className="butcherPig"
      />
      <Directions />
      <Input
        handleInput={handleInput}
        phrase={userInput}
        setUpPreventDefault={setUpPreventDefault}
        restartGame={restartGame}
        phraseTranslated={inputTranslated}
      />
      <Footer />
    </>
  )
}

export default App
