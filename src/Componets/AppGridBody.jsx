import React from "react";

class AppGridBody extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.elements.map((element) => {
            return <div className="col-3">{element}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default AppGridBody;
