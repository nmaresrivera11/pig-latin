const Input = (props) => {
  return (
    <>
      <div className="inputArea">
        <h2>Enter a phrase to be translated:</h2>
        <input
          type="text"
          placeholder="Enter text here"
          className="userInput"
          onChange={props.handleInput}
          value={props.phrase}
        />
        <br />
        <button onClick={props.setUpPreventDefault}>Submit</button>
        <button onClick={props.restartGame}>Clear</button>
      </div>
      <div className="output">{props.phraseTranslated}</div>
    </>
  )
}

export default Input
