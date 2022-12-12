// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { layout } from "./graph-layout.js";
import {
  jobHeader,
  jobData,
  apiHeader,
  apiData,
  jobGraphData,
  signupGraphData,
} from "./data.js";
import { fillTable } from "./table.js";
import "./graph.js";
import { fillGraph } from "./graph.js";

fillTable("#job-table", jobHeader, jobData);
fillTable("#api-table", apiHeader, apiData);

fillGraph(
  "#job-overview-graph",
  "#job-legend",
  "job-overview-graph-tr",
  jobGraphData
);
fillGraph(
  "#sign-up-graph",
  "#signup-legend",
  "sign-up-graph-tr",
  signupGraphData
);

layout();
