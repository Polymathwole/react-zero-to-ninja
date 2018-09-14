import React, { Component } from "react";
import "./App.css";
import GridRow from "./Components/GridRow";
import GridCell from "./Components/GridCell";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      elementsPos: []
    };

    this.getRowColumns = this.getRowColumns.bind(this);
  }

  getRowColumns() {
    const height = parseInt(prompt("Enter height"), 10);
    const width = parseInt(prompt("Enter width"), 10);

    this.setState({ height, width });
  }

  render() {
    let items = [];
    let ind = 0;

    if (this.state.height > 0 && this.state.width > 0) {
      for (let i = 0; i < this.state.height; i++) {
        items.push(
          <GridRow
            key={i}
            height={this.state.height}
            elementsPos={this.state.elementsPos}
            width={this.state.width}
          >
            {i => <GridCell key={ind++} />}
          </GridRow>
        );
      }
    }

    return (
      <div className="App">
        <input
          type="button"
          onClick={this.getRowColumns}
          value="Provide height and width"
        />
        <table>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
