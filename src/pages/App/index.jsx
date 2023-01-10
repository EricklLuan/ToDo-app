import { useEffect, useState } from "react"

import check_square from "../../assets/check-square.svg"
import send from "../../assets/send.svg"

import { Card } from "../../components/Card"

import "./style.scss"

export function App() {

  const [cardText, setCardText] = useState("")
  const [cards, setCards] = useState([])

  function addWork(e) {
    e.currentTarget[0].value = ""
    e.preventDefault()

    if (cardText === "") return

    const newCard = {
      id: (cards.length == 0 ? cards.length + 1 : cards.at(-1).id + 1),
      text: cardText
    }

    console.log(newCard.id)
    
    setCards(prevState => {
      localStorage.setItem("cards", JSON.stringify([...prevState, newCard])) 
      return [...prevState, newCard]
    })
    setCardText("")
  }
  
  useEffect(() => {
    if (localStorage.getItem("cards") === null) {
      localStorage.setItem("cards", "[]")
    } else {
      setCards(JSON.parse(localStorage.getItem("cards")))
    }
  }, [])

  return (
    <div className="App">
      <header>
        <img src={check_square} alt="" />
        <h1>To-Do</h1>
      </header>

      <form id="add-work" onSubmit={e => addWork(e)}>
        <input type="text" maxLength={50} placeholder="Insira a tarefa..." onInput={e => setCardText(e.currentTarget.value)}/>
        <button type="submit">
          <img src={send} alt="send text"/>
        </button>
      </form>

      <div id="cards">
        {
          cards.map(card => {
            return <Card key={card.id} id={card.id} text={card.text} remove={[cards, setCards]}/>
          })
        }
      </div>
    </div>
  )
}