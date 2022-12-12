export function fillTable(element) {
  const data = [
    {
      companyId: '1',
      companyName: 'company a',
      completedJobs: '123',
      'Total SMS': '12',
    },

    {
      companyId: '1',
      companyName: 'company a',
      completedJobs: '123',
      'Total SMS': '12',
    },

    {
      companyId: '1',
      companyName: 'company a',
      completedJobs: '123',
      'Total SMS': '12',
    },
  ]

  const header = (companies) => {
    const output = ``

    for (let key in companies) {
      output += `<td scope="col">${key}</td>`
    }

    return `<tr class='table-light'>` + output + `</tr>`
  }

  header(data)
}
