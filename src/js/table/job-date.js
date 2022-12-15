import { fillTable } from './table.js'
import { data } from '../data.js'
import { topCompany } from '../graph/top-company.js'
import { fillGraph } from '../graph/graph.js'
import { fillInformation } from '../card.js'

export function changeTableDate(id, company) {
  const job = data[company].job
  const api = data[company].api
  const input = document.querySelector(id)
  input.addEventListener('input', () => {
    const monthJobData = job[input.value]
    const monthApiData = api[input.value]
    const companyJobGraphData = topCompany(monthJobData.data, 'completedJobs')
    const companyRevenueGraphData = topCompany(
      monthJobData.data,
      'companyIncome'
    )

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
      monthJobData.header,
      monthJobData.data
    )
    fillTable(
      '#api-table',
      '#api-thead',
      '#api-tbody',
      monthApiData.header,
      monthApiData.data
    )

    fillGraph(
      '#top-company-revenue-graph',
      '#top-company-revenue-legend',
      'top-company-revenue-graph-tr',
      companyRevenueGraphData
    )
    console.log('upgrade')
    fillGraph(
      '#top-company-job-graph',
      '#top-company-job-legend',
      'top-company-job-graph-tr',
      companyJobGraphData
    )

    fillInformation(
      '#top-company-job-total',
      `Total: ${companyJobGraphData[0].value}`
    )
  })
}
