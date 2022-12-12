// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const jobGraph = document.querySelector('#job-overview-graph')
const signUpGraph = document.querySelector('#sign-up-graph')
const bar = document.querySelectorAll('.bar-container')

// set the length of the last td element in bar chart
jobGraph.style.setProperty(
  '--last-width',
  `${25 / jobGraph.childElementCount}%`
)

signUpGraph.style.setProperty(
  '--last-width',
  `${25 / signUpGraph.childElementCount}%`
)

// set horizontal guideline size to be equal to graph length
jobGuidelineSize()
signupGuidelineSize()
window.addEventListener('resize', jobGuidelineSize)
window.addEventListener('resize', signupGuidelineSize)

// set the local of the bottom legend to be under bar at all times
positionBarLegend()
window.addEventListener('resize', positionBarLegend)

function jobGuidelineSize() {
  const guideLine = document.querySelector('#job-legend').children

  for (let element of guideLine) {
    element.style.setProperty('--width', `${jobGraph.offsetWidth}px`)
  }
}

function signupGuidelineSize() {
  const guideLine = document.querySelector('#signup-legend').children

  for (let element of guideLine) {
    element.style.setProperty('--width', `${signUpGraph.offsetWidth}px`)
  }
}

function positionBarLegend() {
  bar.forEach((element) => {
    element.style.setProperty('--move-right', `${element.offsetWidth}%`)
  })
}
