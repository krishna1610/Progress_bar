import React from "react";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress_value: 0,
    };
  }

  btnClicked() {
    let random_value = Math.round(Math.random() * 20);
    let newProgressValue = this.state.progress_value + random_value;
    if (newProgressValue > 100) {
      newProgressValue = 0;
    }
    console.log(newProgressValue);
    this.setState({ progress_value: newProgressValue });
  }

  render() {
    return (
      <div className="container">
        <div className="progress my-3">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${this.state.progress_value}%` }}
            aria-valuenow={this.state.progress_value}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {`${this.state.progress_value}%`}
          </div>
        </div>
        <button
          className="btn-primary"
          onClick={() => {
            this.btnClicked();
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default ProgressBar;
