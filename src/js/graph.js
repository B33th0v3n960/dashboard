import { layout } from './graph-layout.js'

export function fillGraph(graphId, legendId, trId, data) {
  const graph = document.querySelector(graphId)
  const legend = document.querySelector(legendId)
  const legendArr = []
  var step // used so change made to the variable from a function is visible in global scope

  legend.innerHTML = createLegends()
  graph.innerHTML = createBars()
  layout()

  function createLegends() {
    let output = ``

    //find the max value from the data
    const maxVal = getMax(data)

    // find suitable steps of incrementation
    if (maxVal <= 10) step = 1
    else if (maxVal < 30) step = 5
    else if (maxVal <= 50) step = 10
    else step = 50
    for (let i = 0; i < maxVal + step; i += step) legendArr.push(i)

    // create legends
    for (let i = legendArr.length; i > 0; i -= 1) {
      output += `<p class="m-0 text-end">${legendArr[i - 1]}</p>`
    }

    return output
  }

  function createBars() {
    let output = ``

    //create guidline
    for (let i = 1; i < legendArr.length - 1; i++) {
      output += `<div class="guideline" 
                      style="--start: ${i * step + 1}" >
                 </div>`
    }
    output = `<th class="p-0 w-0">
                <span
                  class="bar-container border-none m-0 w-0"
                  style="--range: ${legendArr[legendArr.length - 1]}">
                  ${output}
                </span>
              </th>`

    // create a bar for every item data list
    for (let i = 0; i < data.length; i++) {
      let addon = ` <td class="p-0">
                        <span class="bar-container" 
                              style="--range: ${
                                legendArr[legendArr.length - 1]
                              };
                                    --end:${
                                      legendArr[legendArr.length - 1] + 1
                                    }">
                          <div class="bar" 
                              style="--percentage: ${
                                legendArr[legendArr.length - 1] - data[i].value
                              }" >
                          </div>
                          <p>${data[i].time}</p>
                        </span>
                      </td>`

      if (i === data.length - 1)
        addon = ` <td class="p-0">
                    <span class="bar-container"
                          style="--range: ${legendArr[legendArr.length - 1]};
                                --end:${legendArr[legendArr.length - 1] + 1}">
                      <div class="bar"
                          style="--percentage: ${
                            legendArr[legendArr.length - 1] - data[i].value
                          }" >
                      </div>
                      <p class="text-end w-100 overflow-visible last-legend" >${
                        data[i].time
                      }</p>
                    </span>
                  </td>`
      output += addon
    }
    return `<tbody> <tr id="${trId}"> ${output} </tr> </tbody>`
  }
}

function getMax(arr) {
  let max = arr[0].value

  for (let i = 1; i < arr.length; i++) max = Math.max(max, arr[i].value)

  return max
}
