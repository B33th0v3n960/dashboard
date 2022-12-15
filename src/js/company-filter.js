import { data } from './data.js'
import { fillInformation } from './card.js'

export function filterCompany(id) {
  const filter = document.querySelector(id)
  filter.addEventListener('input', () => {
    const info = data[filter.value]

    fillInformation('#submitted-jobs', info.submittedJobs)
    fillInformation('#in-prgress-jobs', info.inProgressJobs)
    fillInformation('#completed-jobs', info.completedJobs)
    fillInformation('#cancelled-jobs', info.cancelledJobs)
  })
}
