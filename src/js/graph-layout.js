export function layout() {
  const jobGraph = document.querySelector("#job-overview-graph");
  const signUpGraph = document.querySelector("#sign-up-graph");
  const jobGraphTr = document.querySelector("#job-overview-graph-tr");
  const signupGraphTr = document.querySelector("#sign-up-graph-tr");
  const bar = document.querySelectorAll(".bar-container");

  // set the length of the last td element in bar chart
  jobGraph.style.setProperty(
    "--last-width",
    `${25 / jobGraphTr.childElementCount}%`
  );

  signUpGraph.style.setProperty(
    "--last-width",
    `${25 / signupGraphTr.childElementCount}%`
  );

  // set horizontal guideline size to be equal to graph length
  jobGuidelineSize();
  signupGuidelineSize();
  window.addEventListener("resize", jobGuidelineSize);
  window.addEventListener("resize", signupGuidelineSize);

  // set the local of the bottom legend to be under bar at all times
  positionBarLegend();
  window.addEventListener("resize", positionBarLegend);

  function jobGuidelineSize() {
    const guideLine = document.querySelector("#job-legend").children;

    for (let element of guideLine) {
      element.style.setProperty("--width", `${jobGraph.offsetWidth}px`);
    }
  }

  function signupGuidelineSize() {
    const guideLine = document.querySelector("#signup-legend").children;

    for (let element of guideLine) {
      element.style.setProperty("--width", `${signUpGraph.offsetWidth}px`);
    }
  }

  function positionBarLegend() {
    bar.forEach((element) => {
      element.style.setProperty("--move-right", `${element.offsetWidth}%`);
    });
  }
}
