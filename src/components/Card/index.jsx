import trash from '../../assets/trash-fill.svg'
import pencil from '../../assets/pencil-square.svg'

import './style.scss'

export function Card({text}) {

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
    textarea.disabled = true
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
        <button>
          <img src={trash} alt="delete card" srcset="" />
        </button>
      </section>

      <section id='work'>
        <input type="checkbox" id="maked" />
        <textarea 
          className="work-text"
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