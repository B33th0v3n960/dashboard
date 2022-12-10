// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const guideLine = document.querySelectorAll(".guideline");

const jobGraph = document.querySelector("#job-overview-graph");
const signUpGraph = document.querySelector("#sign-up-graph");
console.log(guideLine);
console.log(jobGraph);

function guidlineSize() {
  //   console.log(graph.offsetWidth);
  guideLine.forEach((element) => {
    element.style.setProperty("--width", `${jobGraph.offsetWidth}px`);
  });
}

guidlineSize();
window.addEventListener("resize", guidlineSize);

console.log(jobGraph.childElementCount);

jobGraph.style.setProperty(
  "--last-width",
  `${25 / jobGraph.childElementCount}%`
);

signUpGraph.style.setProperty(
  "--last-width",
  `${25 / signUpGraph.childElementCount}%`
);

const bar = document.querySelectorAll(".bar-container");
console.log(bar);
function positionBarLegend() {
  bar.forEach((element) => {
    element.style.setProperty("--move-right", `${element.offsetWidth}%`);
  });
}
positionBarLegend();
window.addEventListener("resize", positionBarLegend);
