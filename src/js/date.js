import { fillTable } from './table/table.js'
import { fillGraph } from './graph/graph.js'
import { newData, graphData, year, layoutData } from './data/new-data.js'
import { parseApiGraph, parseCompletedJobs } from './data/parse-data.js'

export function changeTableDate(id) {
  const info = newData
  const jobGraphData = graphData.jobGraphData
  const signupGraphData = graphData.signupGraphData

  const input = document.querySelector(id)
  input.addEventListener('input', () => {
    const fullYear = new Date(input.value).getFullYear()
    const month = new Date(input.value).getMonth()
    const monthJobData = parseCompletedJobs(info, fullYear, year[month])
    const monthApiData = parseApiGraph(info, fullYear, year[month])

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const alert = (message, type) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('')

      alertPlaceholder.append(wrapper)
    }

    if (!(monthJobData && monthApiData))
      alert(
        'The date you have chosen does is not available in our data base',
        'success'
      )

    fillTable(
      '#job-table',
      '#job-thead',
      '#job-tbody',
      layoutData.jobHeader,
      monthJobData
    )
    fillTable(
      '#api-table',
      '#api-thead',
      '#api-tbody',
      layoutData.apiHeader,
      monthApiData
    )

    fillGraph(
      '#job-overview-graph',
      '#job-legend',
      'job-overview-graph-tr',
      jobGraphData.today
    )
    fillGraph(
      '#sign-up-graph',
      '#signup-legend',
      'sign-up-graph-tr',
      signupGraphData.today
    )
  })
}
