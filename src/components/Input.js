const Input = (props) => {
  return (
    <>
      <div className="input-area">
        <h2>Enter a phrase to be translated:</h2>
        <input
          type="text"
          placeholder="Enter text here"
          className="user-input"
          onChange={props.handleInput}
          value={props.phrase}
        />

        <button onClick={props.setUpPreventDefault}>Submit</button>
        <button onClick={props.restartGame}>Clear</button>
      </div>
      <div className="output">{props.phraseTranslated}</div>
    </>
  )
}

export default Input
