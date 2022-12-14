import { fillGraph } from './graph.js'
import { layout } from './graph-layout.js'

export function graphBtn(id, graphId, legendId, trId, data) {
  const formGroup = document.querySelector(id).children

  for (let element of formGroup) {
    element.addEventListener('click', () => {
      if (element.checked) {
        const time = element.value
        fillGraph(graphId, legendId, trId, data[time])
      }
    })
  }
}
