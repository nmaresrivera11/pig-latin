import { Card, CardText } from "reactstrap"

const Directions = () => {
  return (
    <>
      <div className="inputArea">
        <Card className="card">
          <CardText>
            Welcome to Pig Latin Translator!
            <br />
            <br />
            Use this fun app to translate your text into Pig Latin.
            <br /> There are only a few rules:
            <br />
            1. Be you <br /> 2. Be creative <br /> 3. Have fun!
          </CardText>
        </Card>
      </div>
    </>
  )
}

export default Directions
