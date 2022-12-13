// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { layout } from './graph-layout.js'
import { job, api, jobGraphData, signupGraphData } from './data.js'
import { fillTable } from './table.js'
import { fillGraph } from './graph.js'

fillTable('#job-table', job.header, job.data)
fillTable('#api-table', api.header, api.data)

fillGraph(
  '#job-overview-graph',
  '#job-legend',
  'job-overview-graph-tr',
  jobGraphData.year
)
fillGraph(
  '#sign-up-graph',
  '#signup-legend',
  'sign-up-graph-tr',
  signupGraphData.today
)

layout()
