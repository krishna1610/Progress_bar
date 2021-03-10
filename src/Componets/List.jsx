import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      selectedItem: -1,
      selectedItems: [],
    };
    this.btnClicked = this.btnClicked.bind(this);
  }

  btnClicked() {
    let random_value = Math.random();
    let copyInitialList = [...this.state.lists];
    copyInitialList.push(random_value);
    this.setState({ lists: copyInitialList });
  }

  resetList() {
    this.setState({ lists: [], selectedItem: -1, selectedItems: [] });
  }

  selectedItemChanged(index) {
    let copySelectedItems = [...this.state.selectedItems];
    if (copySelectedItems.indexOf(index) >= 0) {
      // remove item from selectedItems
      copySelectedItems.splice(copySelectedItems.indexOf(index), 1);
    } else {
      // add index to the selectedItems
      copySelectedItems.push(index);
    }
    this.setState({ selectedItem: index, selectedItems: copySelectedItems });
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={() => {
            this.btnClicked();
          }}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            this.resetList();
          }}
        >
          Reset
        </button>
        <div className="list-group">
          {this.state.lists.map((item, index) => {
            return (
              <button
                className={
                  "list-group-item list-group-item-action " +
                  (this.state.selectedItems.indexOf(index) >= 0 ? "active" : "")
                }
                key={index}
                onClick={() => {
                  this.selectedItemChanged(index);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
export default List;
