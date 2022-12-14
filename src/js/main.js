// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { data } from './data.js'
import { filterCompany } from './company-filter.js'
import { fillInformation } from './card.js'
import { fillGraph } from './graph/graph.js'
import { graphBtn } from './graph/graph-btn.js'
import { fillTable } from './table/table.js'
import { changeTableDate } from './table/job-date.js'
import { topCompany } from './graph/top-company.js'

const info = data.companyA
const job = info.job
const api = info.api
const jobGraphData = info.jobGraphData
const signupGraphData = info.signupGraphData

const now = new Date()
const month = `${now.getFullYear()}-${now.getMonth() + 1}`
const monthJobData = job[month]
const companyJobGraphData = topCompany(monthJobData.data, 'completedJobs')
const companyRevenueGraphData = topCompany(monthJobData.data, 'companyIncome')
const overallRevenueGraphData = info.overallRevenueGraphData

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
  overallRevenueGraphData.today
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
filterCompany('#company-filter')

fillInformation('#submitted-jobs', info.submittedJobs)
fillInformation('#in-prgress-jobs', info.inProgressJobs)
fillInformation('#completed-jobs', info.completedJobs)
fillInformation('#cancelled-jobs', info.cancelledJobs)
