import { newData } from './data/new-data.js'
import { fillInformation } from './card.js'

export function createFilter(id, companies) {
  let output = `<option selected>- All Companies -</option>`
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

function findObjectByName(name, objects) {
  for (const obj of objects) {
    if (obj.companyName === name) {
      return obj
    }
  }

  return null
}
