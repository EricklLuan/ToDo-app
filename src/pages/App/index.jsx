import check_square from "../../assets/check-square.svg"
import send from "../../assets/send.svg"

import { Card } from "../../components/Card"

import "./style.scss"

export function App() {

  function addWork(e) {
    e.preventDefault()
  }

  return (
    <div className="App">
      <header>
        <img src={check_square} alt="" />
        <h1>To-Do</h1>
      </header>

      <form id="add-work" onSubmit={e => addWork(e)}>
        <input type="text" maxLength={50} placeholder="Insira a tarefa..."/>
        <button type="submit">
          <img src={send} alt="" />
        </button>
      </form>

      <div id="cards">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  )
}