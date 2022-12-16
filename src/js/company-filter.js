import { newData } from './data/new-data.js'
import { fillInformation } from './card.js'
import { findObjectByName } from './data/new-data.js'

export function createFilter(id, companies, defaultInput) {
  let output = `<option value="default" selected>${defaultInput}</option>`
  const filter = document.querySelector(id)

  for (let company of companies) {
    output += `<option value="${company.companyName}">
                  ${company.companyName}
               </option>`
  }

  filter.innerHTML = output
}

export function createYearFilter(id, years, defaultInput) {
  let output = `<option value="default" selected>${defaultInput}</option>`
  const filter = document.querySelector(id)

  for (let year of years) {
    output += `<option value="${year}">
                  ${year}
               </option>`
  }

  filter.innerHTML = output
}

export function filter(id, callback) {
  const filter = document.querySelector(id)
  filter.addEventListener('input', () => {
    callback(filter.value)
  })
}
