export function createLineGraph(id, data, key, info) {
  anychart.onDocumentReady(() => {
    const dataSet = anychart.data.set(data)

    const lineDataSet = []
    for (let company of info) {
      console.log(info.indexOf(company))
      lineDataSet.push({
        name: company.companyName,
        data: dataSet.mapAs({ x: 0, value: info.indexOf(company) }),
      })
    }
    console.log('dataSet: ', lineDataSet)

    const chart = anychart.line()

    const firstSeries = chart.line(lineDataSet[0].data)
    firstSeries.name(lineDataSet[0].name)
    const secondSeries = chart.line(lineDataSet[1].data)
    secondSeries.name(lineDataSet[1].name)
    const thirdSeries = chart.line(lineDataSet[2].data)
    thirdSeries.name(lineDataSet[2].name)
    const fourthSeries = chart.line(lineDataSet[3].data)
    fourthSeries.name(lineDataSet[3].name)
    const fifthSeries = chart.line(lineDataSet[4].data)
    fifthSeries.name(lineDataSet[4].name)
    const sixthSeries = chart.line(lineDataSet[5].data)
    sixthSeries.name(lineDataSet[5].name)
    const seventhSeries = chart.line(lineDataSet[6].data)
    seventhSeries.name(lineDataSet[6].name)
    const eighthSeries = chart.line(lineDataSet[7].data)
    eighthSeries.name(lineDataSet[7].name)
    const ninethSeries = chart.line(lineDataSet[8].data)
    ninethSeries.name(lineDataSet[8].name)
    const tenthSeries = chart.line(lineDataSet[9].data)
    tenthSeries.name(lineDataSet[9].name)

    firstSeries.hovered().markers().type('circle').size(4)
    secondSeries.hovered().markers().type('circle').size(4)
    thirdSeries.hovered().markers().type('circle').size(4)
    fourthSeries.hovered().markers().type('circle').size(4)
    fifthSeries.hovered().markers().type('circle').size(4)
    sixthSeries.hovered().markers().type('circle').size(4)
    seventhSeries.hovered().markers().type('circle').size(4)
    eighthSeries.hovered().markers().type('circle').size(4)
    ninethSeries.hovered().markers().type('circle').size(4)
    tenthSeries.hovered().markers().type('circle').size(4)
    chart.crosshair().enabled(true).yStroke(null).yLabel(false)

    chart.legend().enabled(true)

    // add a title
    // chart.title('graph')

    // specify where to display the chart
    chart.container(id)

    // draw the resulting chart
    chart.draw()
    console.log('here')
  })
}
