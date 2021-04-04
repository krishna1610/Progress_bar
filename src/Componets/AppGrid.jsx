import React from "react";
import AppGridBody from "./AppGridBody";
import AppGridBtns from "./AppGridBtns";

class AppGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      elements: [],
    };
    this.addItemAtEnd = this.addItemAtEnd.bind(this);
    this.removeItemFromEnd = this.removeItemFromEnd.bind(this);
    this.randomiseElements = this.randomiseElements.bind(this);
    this.sorting = this.sorting.bind(this);
  }
  addItemAtEnd() {
    let increment = this.state.counter + 1;
    let copyElements = [...this.state.elements];
    copyElements.push(increment);
    this.setState({ counter: increment, elements: copyElements });
  }

  removeItemFromEnd() {
    let copyElements = [...this.state.elements];
    copyElements.pop();
    let decrement = this.state.counter - 1;
    this.setState({ counter: decrement, elements: copyElements });
  }

  randomiseElements() {
    let copyElements = [...this.state.elements];
    for (let i = copyElements.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = copyElements[i];
      copyElements[i] = copyElements[j];
      copyElements[j] = temp;
    }
    this.setState({ elements: copyElements });
  }
  sorting() {
    let copyElements = [...this.state.elements];
    copyElements.sort((a, b) => {
      return a - b;
    });
    this.setState({ elements: copyElements });
  }
  render() {
    return (
      <>
        <AppGridBtns
          addItemAtEnd={this.addItemAtEnd}
          removeItemFromEnd={this.removeItemFromEnd}
          randomiseElements={this.randomiseElements}
          sorting={this.sorting}
        />
        <AppGridBody elements={this.state.elements} />
      </>
    );
  }
}

export default AppGrid;
