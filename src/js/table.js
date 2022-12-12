export function fillTable(id, header, data) {
  const tableJobs = document.querySelector(id);
  const head = tableHead(header);
  const body = tableBody(data, header);

  tableJobs.innerHTML = `<thead class="fw-semibold"> ${head}</thead> ${body} `;

  function tableHead(tableHeader) {
    let output = ``;

    for (let title in tableHeader) {
      output += `<td scope="col">${tableHeader[title]}</td>`;
    }

    return `<tr class='table-light'> ${output} </tr>`;
  }

  function tableBody(companies, tableHeader) {
    let output = ``;

    for (let company of companies) {
      let cache = ``;

      for (let title in tableHeader) {
        cache += `<td scope="row">${company[title]}</td>`;
      }
      output += `<tr> ${cache} </tr>`;
    }

    return `<tbody> ${output} </tbody>`;
  }
}
