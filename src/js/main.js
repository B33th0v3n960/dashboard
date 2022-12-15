// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { filterCompany, createFilter } from './company-filter.js'
import { fillInformation } from './card.js'
import { fillGraph } from './graph/graph.js'
import { graphBtn } from './graph/graph-btn.js'
import { fillTable } from './table/table.js'
import { changeTableDate } from './date.js'
import { topCompany } from './graph/top-company.js'
import {
  newData,
  graphData,
  year,
  layoutData,
  overall,
} from './data/new-data.js'
import {
  parseCompletedJobs,
  parseApiGraph,
  parseYearData,
} from './data/parse-data.js'

const info = newData
const jobGraphData = graphData.jobGraphData
const signupGraphData = graphData.signupGraphData

const now = new Date()
const month = now.getMonth()
const fullYear = now.getFullYear()
const monthJobData = parseCompletedJobs(info, fullYear, year[month])
const monthApiData = parseApiGraph(info, fullYear, year[month])
const companyJobGraphData = parseYearData(
  newData[0].data[2019],
  'completedJobs'
)
// const companyJobGraphData = topCompany(monthJobData, 'completedJobs')
const companyRevenueGraphData = parseYearData(
  newData[0].data[2019],
  'companyIncome'
)
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

console.log(info)
fillInformation('#submitted-jobs', overall.submittedJobs)
fillInformation('#in-prgress-jobs', overall.inProgressJobs)
fillInformation('#completed-jobs', overall.completedJobs)
fillInformation('#cancelled-jobs', overall.cancelledJobs)

changeTableDate('#date-input')
filterCompany('#company-filter')

const result = parseYearData(newData[0].data[2019])
console.log(result)
