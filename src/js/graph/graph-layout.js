export function layout(graphId, trId) {
  const graph = document.querySelector(graphId)
  const graphTr = document.querySelector(trId)

  if (graphTr)
    graph.style.setProperty(
      '--last-width',
      `${25 / graphTr.childElementCount}%`
    )

  guidlineSize(graph)
  window.addEventListener('resize', guidlineSize)
}

function guidlineSize(graph) {
  const guideline = graph.children

  for (let element of guideline) {
    element.style.setProperty('--width', `${graph.offsetWidth - 1}px`)
  }
}
