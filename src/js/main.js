// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { filter, createFilter, createYearFilter } from './company-filter.js'
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
  formatData,
  getTotal,
  lineGraphData,
  totalLine,
  overallRevenueLineData,
} from './data/parse-data.js'
import { createLineGraph, createRevenueLine } from './graph/line-graph.js'

const info = newData
const jobGraphData = graphData.jobGraphData
const signupGraphData = graphData.signupGraphData
const now = new Date()
const month = now.getMonth()
const fullYear = now.getFullYear()
const monthJobData = parseCompletedJobs(info, fullYear, year[month])
const monthApiData = parseApiGraph(info, fullYear, year[month])
const companyJobGraphData = getTotal(info, fullYear, 'completedJobs')
const companyRevenueGraphData = getTotal(info, fullYear, 'companyIncome')
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
createYearFilter(
  `#company-job-year-filter`,
  [2022, 2021, 2020, 2019, 2018],
  'This Year'
)
createYearFilter(
  `#company-income-year-filter`,
  [2022, 2021, 2020, 2019, 2018],
  'This Year'
)
createYearFilter(
  `#overall-revenue-year-filter`,
  [2022, 2021, 2020, 2019, 2018],
  'This Year'
)

changeTableDate('#date-input')

fillInformation('#submitted-jobs', overall.submittedJobs)
fillInformation('#in-prgress-jobs', overall.inProgressJobs)
fillInformation('#completed-jobs', overall.completedJobs)
fillInformation('#cancelled-jobs', overall.cancelledJobs)
filter('#company-filter', (value) => {
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

const jobLineTotal = totalLine(companyJobGraphData)
const incomeLineTotal = totalLine(companyRevenueGraphData)
const completedJobsLine = lineGraphData(info, 'completedJobs', fullYear)
createLineGraph('top-company-job', completedJobsLine, info, jobLineTotal)
const companyRevenueLine = lineGraphData(info, 'zoomRevenue', fullYear)
createLineGraph(
  'company-income-line',
  companyRevenueLine,
  info,
  incomeLineTotal
)

filter(`#company-job-year-filter`, (value) => {
  if (value === 'default') {
    const total = totalLine(getTotal(info, fullYear, 'completedJobs'))
    const newLine = lineGraphData(info, 'completedJobs', fullYear)
    const graph = document.querySelector('#top-company-job')
    graph.innerHTML = ''
    createLineGraph('top-company-job', newLine, info, total)
  } else {
    const total = totalLine(getTotal(info, value, 'completedJobs'))
    const newLine = lineGraphData(info, 'completedJobs', value)
    const graph = document.querySelector('#top-company-job')
    graph.innerHTML = ''
    createLineGraph('top-company-job', newLine, info, total)
  }
})

filter(`#company-income-year-filter`, (value) => {
  if (value === 'default') {
    const total = totalLine(getTotal(info, fullYear, 'zoomRevenue'))
    const newLine = lineGraphData(info, 'zoomRevenue', fullYear)
    const graph = document.querySelector('#company-income-line')
    graph.innerHTML = ''
    createLineGraph('company-income-line', newLine, info, total)
  } else {
    const total = totalLine(getTotal(info, value, 'zoomRevenue'))
    const newLine = lineGraphData(info, 'zoomRevenue', value)
    const graph = document.querySelector('#company-income-line')
    graph.innerHTML = ''
    createLineGraph('company-income-line', newLine, info, total)
  }
})

const overallLineData = overallRevenueLineData(
  overallRevenueGraphData,
  fullYear
)
createRevenueLine('overall-revenue-line', overallLineData, info)

filter(`#overall-revenue-year-filter`, (value) => {
  if (value === 'default') {
    const overallLineData = overallRevenueLineData(
      overallRevenueGraphData,
      fullYear
    )
    const graph = document.querySelector('#overall-revenue-line')
    graph.innerHTML = ''
    createRevenueLine('overall-revenue-line', overallLineData, info)
  } else {
    const overallLineData = overallRevenueLineData(
      overallRevenueGraphData,
      value
    )
    const graph = document.querySelector('#overall-revenue-line')
    graph.innerHTML = ''
    createRevenueLine('overall-revenue-line', overallLineData, info)
  }
})
