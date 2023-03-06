import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Input from "./components/Input"
import Directions from "./components/Directions"
import butcherPig from "./assets/butcherPig.jpeg"

const App = () => {
  return (
    <>
      <Header />
      <img
        src={butcherPig}
        alt="pig with butcher cut names in pig latin"
        className="butcherPig"
      />
      <Directions />
      <Input />
      <Footer />
    </>
  )
}

export default App
