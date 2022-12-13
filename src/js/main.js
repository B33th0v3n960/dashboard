// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { job, api, jobGraphData, signupGraphData } from './data.js'
import { fillTable } from './table.js'
import { fillGraph } from './graph.js'
import { layout } from './graph-layout.js'
import { graphBtn } from './graph-btn.js'
import { changeTableDate } from './job-date.js'

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

layout()

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

changeTableDate('#date-input')
