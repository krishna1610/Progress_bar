import React from "react";

class AppGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      elements: [],
    };
    this.addItemAtEnd = this.addItemAtEnd.bind(this);
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
        <div
          className="btn-group my-3"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.addItemAtEnd();
            }}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              this.removeItemFromEnd();
            }}
          >
            Remove
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.randomiseElements();
            }}
          >
            Shuffle
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.sorting();
            }}
          >
            Sort
          </button>
        </div>
        <div className="container">
          <div className="row">
            {this.state.elements.map((element) => {
              return <div className="col-3">{element}</div>;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default AppGrid;
