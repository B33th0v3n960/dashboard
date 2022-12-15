import { fillTable } from './table.js'
import { data } from '../data.js'

export function changeTableDate(id, company) {
  const job = data[company].job
  const api = data[company].api
  const input = document.querySelector(id)
  input.addEventListener('input', () => {
    const monthJobData = job[input.value]
    const monthApiData = api[input.value]

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
  })
}
