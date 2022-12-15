// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { filterCompany, createFilter } from './company-filter.js'
import { fillInformation } from './card.js'
import { fillGraph } from './graph/graph.js'
import { graphBtn } from './graph/graph-btn.js'
import { fillTable } from './table/table.js'
import { changeTableDate } from './date.js'
import {
  newData,
  graphData,
  year,
  layoutData,
  overall,
  findObjectByName,
} from './data/new-data.js'
import {
  parseCompletedJobs,
  parseApiGraph,
  parseYearData,
  formatData,
  getTotal,
} from './data/parse-data.js'

const info = newData
const jobGraphData = graphData.jobGraphData
const signupGraphData = graphData.signupGraphData
const now = new Date()
const month = now.getMonth()
const fullYear = now.getFullYear()
const monthJobData = parseCompletedJobs(info, fullYear, year[month])
const monthApiData = parseApiGraph(info, fullYear, year[month])
const companyJobGraphData = getTotal(info, 2021, 'completedJobs')
const companyRevenueGraphData = getTotal(info, 2021, 'companyIncome')
const overallRevenueGraphData = overall.revenue

// TODO: use loops to refactor redundant code
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
fillGraph(
  '#top-company-job-graph',
  '#top-company-job-legend',
  'top-company-job-graph-tr',
  companyJobGraphData
)
fillGraph(
  '#top-company-revenue-graph',
  '#top-company-revenue-legend',
  'top-company-revenue-graph-tr',
  companyRevenueGraphData
)
fillGraph(
  '#overall-revenue-graph',
  '#overall-revenue-legend',
  'overall-revenue-graph-tr',
  overallRevenueGraphData
)
console.log(overallRevenueGraphData)
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

createFilter('#company-filter', info, `- All Companies -`)
createFilter('#top-company-job-filter', info, `Total Jobs Completed`)
createFilter('#top-company-revenue-filter', info, `Total Income`)
changeTableDate('#date-input')

console.log(info)
fillInformation('#submitted-jobs', overall.submittedJobs)
fillInformation('#in-prgress-jobs', overall.inProgressJobs)
fillInformation('#completed-jobs', overall.completedJobs)
fillInformation('#cancelled-jobs', overall.cancelledJobs)
filterCompany('#company-filter', (value) => {
  if (value === 'default') {
    fillInformation('#submitted-jobs', overall.submittedJobs)
    fillInformation('#in-prgress-jobs', overall.inProgressJobs)
    fillInformation('#completed-jobs', overall.completedJobs)
    fillInformation('#cancelled-jobs', overall.cancelledJobs)
  } else {
    const info = findObjectByName(value, newData)

    fillInformation('#submitted-jobs', info.submittedJobs)
    fillInformation('#in-prgress-jobs', info.inProgressJobs)
    fillInformation('#completed-jobs', info.completedJobs)
    fillInformation('#cancelled-jobs', info.cancelledJobs)
  }
})

filterCompany('#top-company-job-filter', (value) => {
  if (value === 'default') {
    fillGraph(
      '#top-company-job-graph',
      '#top-company-job-legend',
      'top-company-job-graph-tr',
      companyJobGraphData
    )
  } else {
    const data = findObjectByName(value, formatData(info, fullYear)).job
    fillGraph(
      '#top-company-job-graph',
      '#top-company-job-legend',
      'top-company-job-graph-tr',
      data
    )
  }
})

filterCompany('#top-company-revenue-filter', (value) => {
  if (value === 'default')
    fillGraph(
      '#top-company-job-graph',
      '#top-company-job-legend',
      'top-company-job-graph-tr',
      companyRevenueGraphData
    )
  else {
    const data = findObjectByName(value, formatData(info, fullYear)).income
    fillGraph(
      '#top-company-revenue-graph',
      '#top-company-revenue-legend',
      'top-company-revenue-graph-tr',
      data
    )
  }
})

const result = formatData(info, 2021)
console.log(result)

const final = getTotal(info, 2021, 'completedJobs')
