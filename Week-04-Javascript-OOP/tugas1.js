export class Table {

  // initialiation constructor
  constructor(init) {
    this.init = init;
  }


  //create method for the header
  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";

    //parameter "d" would be the content of the table header
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }


  //create method for the body of the table
  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    //this need to be build in iteration for each <td></td>, but i dont know how
    data.forEach((d) => {
      open += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
          <td>${d[3]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  //wrapping method above with tag table, plus adding class table (for bootstrap)
  wrap(element) {
    let tableWrap =
      "<table class='table table-hover'>" +
      this.createHeader(this.init.header) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = tableWrap;
  }
  
}