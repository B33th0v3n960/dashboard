import { fillGraph } from './graph.js'
import { layout } from './graph-layout.js'

export function graphBtn(id, graphId, legendId, trId, data) {
  const formGroup = document.querySelector(id).children

  for (let element of formGroup) {
    element.addEventListener('click', () => {
      check()
    })

    function check() {
      if (element.checked) {
        console.log(element)
        const time = element.value
        console.log(element.value)

        fillGraph(graphId, legendId, trId, data[time])
        layout()
      }
    }
  }
}
