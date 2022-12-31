import trash from '../../assets/trash-fill.svg'
import pencil from '../../assets/pencil-square.svg'

import './style.scss'

export function Card() {

  window.onresize = () => {
    const textarea = document.getElementById("work-text")
    textarea.style.height = ""
    textarea.style.height =  `${textarea.scrollHeight}px`
  }

  return (
    <div className="Card">
      <section id='menu'></section>
      <section id='work'>
        <input type="checkbox" id="maked" />
        <textarea 
          id="work-text"
          rows={1}
          defaultValue="condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl"
          onInput={e => {
            e.currentTarget.style.height = ""
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`
          }}
        ></textarea>
      </section>
    </div>
  )
}