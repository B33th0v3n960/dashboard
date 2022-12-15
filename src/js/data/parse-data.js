import { year } from './new-data.js'

export function parseCompletedJobs(data, year, month) {
  const output = []
  for (let company of data) {
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
    console.log(month)
    console.log(data[month])
    output.push({ barLegend: month, value: data[month].job[key] })
  }
  return output
}
