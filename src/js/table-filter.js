import { fillTable, tableBody } from './table.js'
var flag = false

export function filterTable(id, tbodyId, header, data) {
  const jobTable =
    document.querySelector(id).firstElementChild.firstElementChild.children

  for (let element of jobTable) {
    element.addEventListener('click', () => {
      console.log(element.id)
      const result = filterOutput(id, header, data, element.id)
      const tbody = document.querySelector(tbodyId)
      tbody.innerHTML = result
    })
  }
}

function filterOutput(id, header, data, key) {
  console.log(key)
  const newData = sortObjectByKey(data, key)
  return tableBody(newData, header)
}

function sortObjectByKey(arr, key) {
  // create a new array with the data from the original object
  const data = [...arr]
  console.log(typeof arr[0][key])
  console.log(!isNaN(arr[0][key]))
  console.log(typeof data[0].key == 'number')
  // sort the array of data by the value of the given key
  if (!isNaN(arr[0][key])) data.sort((a, b) => a[key] - b[key])
  else data.sort((a, b) => a[key].localeCompare(b[key]))

  if (flag) {
    flag = false
    return data.reverse()
  } else {
    flag = true
    return data
  }
}
