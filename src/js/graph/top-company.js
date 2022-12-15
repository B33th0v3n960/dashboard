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

  const arr = []
  for (let item of data) {
    arr.push(item.companyName)
  }

  const layout = createLayout(arr)
  // console.log(layout)

  return shorten
}

function sortObjectByKey(arr, key) {
  const data = [...arr]

  if (!isNaN(data[0][key])) data.sort((a, b) => a[key] - b[key])
  else data.sort((a, b) => a[key].localeCompare(b[key]))

  return data
}

export function createLayout(arr) {
  let output
  for (let item of arr) {
    output += `
              <h3>${item}</h3>
              <table
                id="${item}-job-graph"
                class="table table-bordered"
              ></table>`
  }
  return output
}
