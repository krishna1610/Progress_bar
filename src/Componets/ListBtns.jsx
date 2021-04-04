import React from "react";

class ListBtns extends React.Component {
  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={() => {
            this.props.btnClicked();
          }}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            this.props.resetList();
          }}
        >
          Reset
        </button>
      </>
    );
  }
}
export default ListBtns;
