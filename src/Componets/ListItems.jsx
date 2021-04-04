import React from "react";

class ListItems extends React.Component {
  render() {
    return (
      <div className="list-group">
        {this.props.lists.map((item, index) => {
          return (
            <button
              className={
                "list-group-item list-group-item-action " +
                (this.props.selectedItems.indexOf(index) >= 0 ? "active" : "")
              }
              key={index}
              onClick={() => {
                this.props.selectedItemChanged(index);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}
export default ListItems;
