function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

function randomLetter() {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateJobData(num) {
  const output = []
  for (let i = 0; i < num; i++)
    output.push({
      companyId: getRandomIntInclusive(20, 500),
      companyName: `company ${randomLetter()}`,
      completedJobs: getRandomIntInclusive(20, 500),
      totalEmails: getRandomIntInclusive(20, 50),
      companyIncome: getRandomIntInclusive(50, 300),
      zoomRevenue: getRandomIntInclusive(20, 400),
      totalSMS: getRandomIntInclusive(20, 500),
    })
  return output
}

function generateApiData(num) {
  const output = []
  for (let i = 0; i < num; i++)
    output.push({
      companyName: `company ${randomLetter()}`,
      map: getRandomIntInclusive(0, 100),
      direction: getRandomIntInclusive(50, 1000),
      distanceMatrix: getRandomIntInclusive(50, 1000),
      georecorder: getRandomIntInclusive(20, 400),
      place: getRandomIntInclusive(10, 500),
    })
  return output
}

function generateGraphData(arr, min, max) {
  const output = []
  for (let i of arr) {
    output.push({ time: i, value: getRandomIntInclusive(min, max) })
  }
  return output
}

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
const year = [
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

export const data = {
  companyA: {
    job: {
      '2022-12': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(41)],
      },
      '2022-11': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(45)],
      },
      '2022-10': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(38)],
      },
      '2022-09': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(23)],
      },
    },
    api: {
      header: {
        companyName: 'Company Name',
        map: 'Map',
        direction: 'Direction',
        distanceMatrix: 'Distance Matrix',
        georecorder: 'Georecorder',
        place: 'Place',
      },

      data: [...generateApiData(21)],
    },
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
    companyJobsGraphData: {
      today: [...generateGraphData(day, 0, 10)],
      week: [...generateGraphData(week, 0, 20)],
      month: [...generateGraphData(month, 0, 50)],
    },
    companyRevenueGraphData: {
      today: [...generateGraphData(day, 0, 10)],
      week: [...generateGraphData(week, 0, 20)],
      month: [...generateGraphData(month, 0, 50)],
    },
    overallRevenueGraphData: {
      today: [...generateGraphData(day, 0, 10)],
      week: [...generateGraphData(week, 0, 20)],
      month: [...generateGraphData(month, 0, 50)],
    },
    submittedJobs: getRandomIntInclusive(700, 1500),
    inProgressJobs: getRandomIntInclusive(700, 1500),
    completedJobs: getRandomIntInclusive(700, 1500),
    cancelledJobs: getRandomIntInclusive(0, 50),
    activeCustomers: getRandomIntInclusive(700, 1500),
    inActiveCustomers: getRandomIntInclusive(700, 1500),
    revenue: getRandomIntInclusive(90000, 200000) / 100,
  },
  companyB: {
    job: {
      '2022-12': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(41)],
      },
      '2022-11': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(45)],
      },
      '2022-10': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(38)],
      },
      '2022-09': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(23)],
      },
    },
    api: {
      header: {
        companyName: 'Company Name',
        map: 'Map',
        direction: 'Direction',
        distanceMatrix: 'Distance Matrix',
        georecorder: 'Georecorder',
        place: 'Place',
      },

      data: [...generateApiData(21)],
    },
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
    submittedJobs: getRandomIntInclusive(700, 1500),
    inProgressJobs: getRandomIntInclusive(700, 1500),
    completedJobs: getRandomIntInclusive(700, 1500),
    cancelledJobs: getRandomIntInclusive(0, 50),
    activeCustomers: getRandomIntInclusive(700, 1500),
    inActiveCustomers: getRandomIntInclusive(700, 1500),
    revenue: getRandomIntInclusive(90000, 200000) / 100,
  },
  companyC: {
    job: {
      '2022-12': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(41)],
      },
      '2022-11': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(45)],
      },
      '2022-10': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(38)],
      },
      '2022-09': {
        header: {
          companyId: 'Company ID',
          companyName: 'Company Name',
          completedJobs: 'Completed Jobs',
          totalEmails: 'Total Emails',
          companyIncome: 'Company Income',
          zoomRevenue: 'Zoom Revenue',
          totalSMS: 'Total SMS',
        },
        data: [...generateJobData(23)],
      },
    },
    api: {
      header: {
        companyName: 'Company Name',
        map: 'Map',
        direction: 'Direction',
        distanceMatrix: 'Distance Matrix',
        georecorder: 'Georecorder',
        place: 'Place',
      },

      data: [...generateApiData(21)],
    },
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
    submittedJobs: getRandomIntInclusive(700, 1500),
    inProgressJobs: getRandomIntInclusive(700, 1500),
    completedJobs: getRandomIntInclusive(700, 1500),
    cancelledJobs: getRandomIntInclusive(0, 50),
    activeCustomers: getRandomIntInclusive(700, 1500),
    inActiveCustomers: getRandomIntInclusive(700, 1500),
    revenue: getRandomIntInclusive(90000, 200000) / 100,
  },
}
