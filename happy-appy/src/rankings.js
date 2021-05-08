import React, { Component } from "react";
import DataTable from "./Components/Data/dataTable.js"

class Rankings extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <h1>Rankings</h1>
        </div>
        <div>
          <DataTable />
        </div>
      </div>
    );
  }
}

export default Rankings;