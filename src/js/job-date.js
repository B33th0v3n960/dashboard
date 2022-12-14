import { fillTable } from './table.js'
import { data } from './data.js'

export function changeTableDate(id, company) {
  const job = data[company].job
  const input = document.querySelector(id)
  input.addEventListener('input', () => {
    const monthJobData = job[input.value]

    fillTable(
      '#job-table',
      '#job-thead',
      '#job-tbody',
      monthJobData.header,
      monthJobData.data
    )
  })
}
