import { year, findObjectByName } from './new-data.js'

export function parseCompletedJobs(data, year, month) {
  const output = []
  for (let company of data) {
    if (!company.data[year]) return undefined
    output.push({
      companyId: company.companyId,
      companyName: company.companyName,
      completedJobs: company.data[year][month].job.completedJobs,
      totalEmails: company.data[year][month].job.totalEmails,
      companyIncome: company.data[year][month].job.companyIncome,
      zoomRevenue: company.data[year][month].job.zoomRevenue,
      totalSMS: company.data[year][month].job.totalSMS,
    })
  }

  return output
}

export function parseApiGraph(data, year, month) {
  const output = []
  for (let company of data) {
    if (!company.data[year]) return undefined
    output.push({
      companyName: company.companyName,
      map: company.data[year][month].api.map,
      direction: company.data[year][month].api.direction,
      distanceMatrix: company.data[year][month].api.distanceMatrix,
      georecorder: company.data[year][month].api.georecorder,
      place: company.data[year][month].api.place,
    })
  }

  return output
}

export function parseYearData(data, key) {
  const output = []
  for (let month of year) {
    output.push({ barLegend: month, value: data[month].job[key] })
  }
  return output
}

export function formatData(companies, year) {
  const output = []

  for (let company of companies) {
    output.push({
      companyName: company.companyName,
      job: parseYearData(company.data[year], 'completedJobs'),
      income: parseYearData(company.data[year], 'zoomRevenue'),
    })
  }

  return output
}

function companyArr(companies) {
  const output = []
  for (let company of companies) output.push(company.companyName)
  return output
}

export function getTotal(companies, yearInput, key) {
  const output = []

  const companyArray = [...companyArr(companies)]
  for (let month of year) {
    let total = 0
    for (let company of companyArray)
      total += findObjectByName(company, companies).data[yearInput][month].job[
        key
      ]
    output.push({ barLegend: month, value: total })
  }

  return output
}
