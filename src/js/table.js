import { filterTable } from './table-filter.js'

export function fillTable(id, theadId, tbodyId, header, data) {
  const tableJobs = document.querySelector(id)
  const thead = document.querySelector(theadId)
  const tbody = document.querySelector(tbodyId)
  const head = tableHead(header)
  const body = tableBody(data, header)

  thead.innerHTML = head
  tbody.innerHTML = body

  filterTable(id, tbodyId, header, data)
  function tableHead(tableHeader) {
    let output = ``

    for (let title in tableHeader) {
      output += `<td scope="col" id="${title}" class="table-head" >${tableHeader[title]}</td>`
    }

    return `<tr class='table-light'> ${output} </tr>`
  }
}

export function tableBody(companies, tableHeader) {
  let output = ``

  for (let company in companies) {
    let cache = ``

    for (let title in tableHeader) {
      cache += `<td scope="row">${companies[company][title]}</td>`
    }
    output += `<tr> ${cache} </tr>`
  }

  return output
}
