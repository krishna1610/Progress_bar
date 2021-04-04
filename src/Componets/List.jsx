import React from "react";
import ListBtns from "./ListBtns";
import ListItems from "./ListItems";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      selectedItem: -1,
      selectedItems: [],
    };
    this.btnClicked = this.btnClicked.bind(this);
    this.selectedItemChanged = this.selectedItemChanged.bind(this);
    this.resetList = this.resetList.bind(this);
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
        <ListBtns btnClicked={this.btnClicked} resetList={this.resetList} />
        <ListItems
          lists={this.state.lists}
          selectedItems={this.state.selectedItems}
          selectedItemChanged={this.selectedItemChanged}
        />
      </div>
    );
  }
}
export default List;
