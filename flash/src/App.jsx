import { useState } from 'react'
import './App.css'
import Cards from "../cards" 

function App() {
  
  let mesCartesArray = []

  const [monDeck,setMonDeck] = useState([])

  function creationDeck(){
    for (let i = 0; i < 4; i++) {
      let randomNumber = Math.floor(Math.random() * Cards.length)
      mesCartesArray.push(randomNumber)
      setMonDeck(Cards[randomNumber])
    }
  }
  
   console.log(monDeck)
  return (
    <div className="App"> 
    <p onClick={creationDeck}>Commencer partie</p>
    </div>
  )
}

export default App
