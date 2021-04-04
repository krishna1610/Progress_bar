import React from "react";

class AppGridBtns extends React.Component {
  render() {
    return (
      <div
        className="btn-group my-3"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            this.props.addItemAtEnd();
          }}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            this.props.removeItemFromEnd();
          }}
        >
          Remove
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            this.props.randomiseElements();
          }}
        >
          Shuffle
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.sorting();
          }}
        >
          Sort
        </button>
      </div>
    );
  }
}

export default AppGridBtns;
