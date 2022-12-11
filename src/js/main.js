// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const guideLine = document.querySelectorAll('.guideline')
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
guidlineSize()
window.addEventListener('resize', guidlineSize)

// set the local of the bottom legend to be under bar at all times
positionBarLegend()
window.addEventListener('resize', positionBarLegend)

function guidlineSize() {
  guideLine.forEach((element) => {
    element.style.setProperty('--width', `${jobGraph.offsetWidth}px`)
  })
}

function positionBarLegend() {
  bar.forEach((element) => {
    element.style.setProperty('--move-right', `${element.offsetWidth}%`)
  })
}
