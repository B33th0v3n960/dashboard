// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { job, api, jobGraphData, signupGraphData } from './data.js'
import { fillTable } from './table.js'
import { fillGraph } from './graph.js'
import { layout } from './graph-layout.js'
import { filterTable } from './table-filter.js'

fillTable('#job-table', '#job-thead', '#job-tbody', job.header, job.data)
fillTable('#api-table', '#api-thead', '#api-tbody', api.header, api.data)

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
filterTable('#job-table', '#job-tbody', job.header, job.data)
filterTable('#api-table', '#api-tbody', api.header, api.data)
