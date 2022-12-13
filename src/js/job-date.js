import { fillTable } from './table.js'
import { job } from './data.js'

export function changeTableDate(id) {
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
    console.log('change month of job data to:', input.value)
  })
}
