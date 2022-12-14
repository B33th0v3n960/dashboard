import { data } from './data.js'
import { fillTable } from './table.js'
import { fillGraph } from './graph.js'
import { graphBtn } from './graph-btn.js'
import { changeTableDate } from './job-date.js'

export function filterCompany(id) {
  const filter = document.querySelector(id)
  filter.addEventListener('input', () => {
    console.log(filter.value)

    const job = data[filter.value].job
    const api = data[filter.value].api
    const jobGraphData = data[filter.value].jobGraphData
    const signupGraphData = data[filter.value].signupGraphData

    const now = new Date()
    const month = `${now.getFullYear()}-${now.getMonth() + 1}`
    console.log(month)
    const monthJobData = job[month]

    fillTable(
      '#job-table',
      '#job-thead',
      '#job-tbody',
      monthJobData.header,
      monthJobData.data
    )
    fillTable('#api-table', '#api-thead', '#api-tbody', api.header, api.data)

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

    graphBtn(
      '#job-overview-radio',
      '#job-overview-graph',
      '#job-legend',
      'job-overview-graph-tr',
      jobGraphData
    )
    graphBtn(
      '#sign-up-radio',
      '#sign-up-graph',
      '#signup-legend',
      'sign-up-graph-tr',
      signupGraphData
    )

    changeTableDate('#date-input', 'companyA')
  })
}
