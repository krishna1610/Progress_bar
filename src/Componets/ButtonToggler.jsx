import React from "react";

class ButtonToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStatus: true,
    };
  }

  btnClicked() {
    this.setState({ buttonStatus: !this.state.buttonStatus });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.btnClicked();
          }}
        >
          {this.state.buttonStatus ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default ButtonToggler;
