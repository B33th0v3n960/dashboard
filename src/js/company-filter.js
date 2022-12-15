import { newData } from './data/new-data.js'
import { fillInformation } from './card.js'
import { findObjectByName } from './data/new-data.js'

export function createFilter(id, companies, defaultInput) {
  let output = `<option selected>${defaultInput}</option>`
  const filter = document.querySelector(id)

  for (let company of companies) {
    output += `<option value="${company.companyName}">
                  ${company.companyName}
               </option>`
  }

  filter.innerHTML = output
}

export function filterCompany(id) {
  const filter = document.querySelector(id)
  filter.addEventListener('input', () => {
    const info = findObjectByName(filter.value, newData)

    fillInformation('#submitted-jobs', info.submittedJobs)
    fillInformation('#in-prgress-jobs', info.inProgressJobs)
    fillInformation('#completed-jobs', info.completedJobs)
    fillInformation('#cancelled-jobs', info.cancelledJobs)
  })
}
