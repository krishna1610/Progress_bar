import React from "react";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 0,
    };
    this.btnClicked = this.btnClicked.bind(this);
  }

  btnClicked() {
    let randomValue = Math.round(Math.random() * 20);
    let newProgressValue = this.state.progressValue + randomValue;
    if (newProgressValue > 100) {
      newProgressValue = 0;
    }
    console.log(newProgressValue);
    this.setState({ progressValue: newProgressValue });
  }

  render() {
    return (
      <div>
        <div className="progress my-3">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${this.state.progressValue}%` }}
            aria-valuenow={this.state.progressValue}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {`${this.state.progressValue}%`}
          </div>
        </div>
        <button className="btn btn-primary mb-3" onClick={this.btnClicked}>
          Click me
        </button>
      </div>
    );
  }
}

export default ProgressBar;
