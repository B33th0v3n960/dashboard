import { data } from './data.js'
import { fillTable } from './table.js'
import { fillGraph } from './graph.js'
import { graphBtn } from './graph-btn.js'
import { changeTableDate } from './job-date.js'
import { fillInformation } from './card.js'

export function filterCompany(id) {
  const filter = document.querySelector(id)
  filter.addEventListener('input', () => {
    const info = data[filter.value]
    const job = info.job
    const api = info.api
    const jobGraphData = info.jobGraphData
    const signupGraphData = info.signupGraphData

    const now = new Date()
    const month = `${now.getFullYear()}-${now.getMonth() + 1}`
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

    fillInformation('#submitted-jobs', info.submittedJobs)
    fillInformation('#in-prgress-jobs', info.inProgressJobs)
    fillInformation('#completed-jobs', info.completedJobs)
    fillInformation('#cancelled-jobs', info.cancelledJobs)

    fillInformation('#active-customers', info.activeCustomers)
    fillInformation('#inactive-customers', info.inActiveCustomers)
    fillInformation('#revenue', `$${info.revenue}`)
  })
}
