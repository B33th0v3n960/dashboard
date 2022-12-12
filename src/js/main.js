// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { layout } from "./graph-layout.js";
import { jobHeader, jobData, apiHeader, apiData } from "./data.js";
import { fillTable } from "./table.js";

layout();

fillTable("#job-table", jobHeader, jobData);
fillTable("#api-table", apiHeader, apiData);
