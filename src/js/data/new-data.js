const day = [
  '0.00',
  '1.00',
  '2.00',
  '3.00',
  '4.00',
  '5.00',
  '6.00',
  '7.00',
  '8.00',
  '9.00',
  '10.00',
  '11.00',
  '12.00',
  '13.00',
  '14.00',
  '15.00',
  '16.00',
  '17.00',
  '18.00',
  '19.00',
  '20.00',
  '21.00',
  '22.00',
  '23.00',
  '0.00',
]
const week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]
const month = ['week 1', 'week 2', 'week 3', 'week 4']
export const year = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

class Company {
  constructor(name, id) {
    this.companyName = name
    this.companyId = id
    this.data = generateYearsData([
      2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
    ])
    this.submittedJobs = getRandomIntInclusive(700, 1500)
    this.inProgressJobs = getRandomIntInclusive(700, 1500)
    this.completedJobs = getRandomIntInclusive(700, 1500)
    this.cancelledJobs = getRandomIntInclusive(0, 50)
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

function randomLetter() {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateGraphData(arr, min, max) {
  const output = []
  for (let i of arr) {
    output.push({ barLegend: i, value: getRandomIntInclusive(min, max) })
  }
  return output
}

function generateData(arr) {
  const output = {}
  for (let time of arr) {
    output[time] = {
      job: {
        completedJobs: getRandomIntInclusive(20, 500),
        totalEmails: getRandomIntInclusive(20, 50),
        companyIncome: getRandomIntInclusive(50, 300),
        zoomRevenue: getRandomIntInclusive(20, 400),
        totalSMS: getRandomIntInclusive(20, 500),
      },
      api: {
        map: getRandomIntInclusive(0, 100),
        direction: getRandomIntInclusive(50, 1000),
        distanceMatrix: getRandomIntInclusive(50, 1000),
        georecorder: getRandomIntInclusive(20, 400),
        place: getRandomIntInclusive(10, 500),
      },
    }
  }

  return output
}

function generateYearsData(years) {
  const output = {}
  for (let i of years) {
    output[i] = generateData(year)
  }
  return output
}

function createDatabase(num) {
  const output = []
  for (let i = 0; i < num; i++) {
    output.push(
      new Company(`company ${randomLetter()}`, getRandomIntInclusive(0, num))
    )
  }
  return output
}

function yearsData(years) {
  const output = {}
  for (let currentYear of years) {
    output[currentYear] = [...generateGraphData(year, 0, 100)]
  }
  return output
}

export const newData = createDatabase(12)
export const graphData = {
  jobGraphData: {
    today: [...generateGraphData(day, 0, 10)],
    week: [...generateGraphData(week, 0, 20)],
    month: [...generateGraphData(month, 0, 50)],
    year: [...generateGraphData(year, 0, 50)],
  },
  signupGraphData: {
    today: [...generateGraphData(day, 0, 10)],
    week: [...generateGraphData(week, 0, 20)],
    month: [...generateGraphData(month, 0, 50)],
  },
}
export const layoutData = {
  jobHeader: {
    companyId: 'Company ID',
    companyName: 'Company Name',
    completedJobs: 'Completed Jobs',
    companyIncome: 'Company Income',
    zoomRevenue: 'Zoom Revenue',
    totalEmails: 'Total Emails',
    totalSMS: 'Total SMS',
  },
  apiHeader: {
    companyName: 'Company Name',
    map: 'Map',
    direction: 'Direction',
    distanceMatrix: 'Distance Matrix',
    georecorder: 'Georecorder',
    place: 'Place',
  },
}
export const overall = {
  revenue: yearsData([2023, 2022, 2021, 2020, 2019, 2018, 2017]),
  submittedJobs: getRandomIntInclusive(700, 1500),
  inProgressJobs: getRandomIntInclusive(700, 1500),
  completedJobs: getRandomIntInclusive(700, 1500),
  cancelledJobs: getRandomIntInclusive(0, 50),
}
export function findObjectByName(name, objects) {
  for (const obj of objects) {
    if (obj.companyName === name) {
      return obj
    }
  }

  return null
}
