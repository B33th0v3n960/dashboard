export function topCompany(data, key) {
  const output = []
  let total = 0
  for (let item of data) {
    output.push({ barLegend: item.companyName, value: item[key] })
    total += item[key]
  }
  output.push({ barLegend: 'total', value: total })
  const result = sortObjectByKey(output, 'value').reverse()
  return result.slice(0, 10)
}

export function topCompanyRevenue(data) {}

function sortObjectByKey(arr, key) {
  // create a new array with the data from the original object
  const data = [...arr]

  // sort the array of data by the value of the given key
  if (!isNaN(data[0][key])) data.sort((a, b) => a[key] - b[key])
  else data.sort((a, b) => a[key].localeCompare(b[key]))

  return data
}
