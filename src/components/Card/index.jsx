import { useState } from 'react'

import trash from '../../assets/trash-fill.svg'
import pencil from '../../assets/pencil-square.svg'

import './style.scss'

export function Card({text, remove, id}) {

  const [textCut, setTextCut] = useState(false)

  window.onresize = () => {
    for (let index = 0; index < document.getElementsByClassName("work-text").length; index++) {
      const element = document.getElementsByClassName("work-text")[index];
      element.style.height = ""
      element.style.height =  `${element.scrollHeight}px`
    }
  }

  document.body.onload = () => {
    for (let index = 0; index < document.getElementsByClassName("work-text").length; index++) {
      const element = document.getElementsByClassName("work-text")[index];
      element.style.height = ""
      element.style.height =  `${element.scrollHeight}px`
    }
  }

  function handleTextAreaResize(e) {
    e.currentTarget.style.height = ""
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`
  }

  function handleEditWorkText(e) {
    const textarea = e.currentTarget.parentNode.nextSibling.childNodes[1]
    textarea.disabled = false
    textarea.focus()
  }

  function handleFinishEditing(e) {
    const textarea = e.currentTarget

    remove[1](prevState => {
      const index = prevState.findIndex(card => card.id == id)
      if (index != -1) {
        prevState[index].text = textarea.value
      }

      localStorage.setItem("cards", JSON.stringify([...prevState])) 

      return [...prevState]
    })

    textarea.disabled = true
  }

  function handleRemoveCards() {
    remove[1](prevState => {
      
      const index = prevState.findIndex(card => card.id == id)
      if (index != -1) {
        prevState.splice(index, 1)
      }

      localStorage.setItem("cards", JSON.stringify([...prevState])) 

      return [...prevState]
    })
  }

  return (
    <div className="Card" onLoad={e => {
      const textarea = e.currentTarget.childNodes[1].childNodes[1]
      textarea.style.height = ""
      textarea.style.height = `${textarea.scrollHeight}px`
    }}>

      <section id='menu'>
        <button onClick={e => handleEditWorkText(e)}>
          <img src={pencil} alt="edit card" srcset="" />
        </button>
        <button onClick={() => handleRemoveCards()}>
          <img src={trash} alt="delete card" srcset="" />
        </button>
      </section>

      <section id='work'>
        <input type="checkbox" id="maked" value={"true"} onClick={() => setTextCut(!textCut)}/>
        <textarea 
          className={(textCut === true ? "cut" : "") + " work-text"}
          rows={1}
          defaultValue={text}
          onInput={e => handleTextAreaResize(e)}
          onBlur={e => handleFinishEditing(e)}
          disabled
        ></textarea>
      </section>

    </div>
  )
}