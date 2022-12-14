import { layout } from './graph-layout.js'

export function fillGraph(graphId, legendId, trId, data) {
  const graph = document.querySelector(graphId)
  const legend = document.querySelector(legendId)
  const maxVal = getMax(data)
  const step = findStep(maxVal)
  const legendArr = [...createLegendsArr(maxVal, step)]

  legend.innerHTML = createLegends()
  graph.innerHTML = createBars()
  layout(graphId, `#${trId}`)

  function createLegends() {
    let output = ``

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

function findStep(maxVal) {
  if (maxVal <= 10) return 1
  else if (maxVal < 30) return 5
  else if (maxVal <= 50) return 10
  return 50
}

function createLegendsArr(maxVal, step) {
  const output = []
  for (let i = 0; i < maxVal + step; i += step) output.push(i)
  return output
}

function getMax(arr) {
  let max = arr[0].value

  for (let i = 1; i < arr.length; i++) max = Math.max(max, arr[i].value)

  return max
}
