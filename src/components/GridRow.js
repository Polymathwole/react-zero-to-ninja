import React, { Component } from "react";

class GridRow extends Component {
  render() {
    let width = this.props.width;
    let x = [];

    for (let i = 0; i < width; i++) {
      x.push(this.props.children(i));
    }

    return <tr>{x}</tr>;
  }
}

export default GridRow;
