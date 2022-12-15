export function topCompany(data, key) {
  const output = []
  let total = 0
  for (let item of data) {
    output.push({ barLegend: item.companyName, value: item[key] })
  }
  const result = sortObjectByKey(output, 'value').reverse()
  const shorten = result.slice(0, 10)

  for (let item of shorten) {
    total += item.value
  }
  shorten.push({ barLegend: 'total', value: total })

  return shorten
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
