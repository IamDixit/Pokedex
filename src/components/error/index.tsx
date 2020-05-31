import "./index.scss";
import React, { PureComponent } from "react";

interface ErrorProp {
  title: string;
  subTitle: string;
  onClose: () => void;
}

interface ErrorState {}

class Error extends PureComponent<ErrorProp, ErrorState> {
  render() {
    return (
      <div className="error">
        <div className="title">
          <h3>{this.props.title}</h3>
          <button>close</button>
        </div>
        <div className="subtitle">
          <span>{this.props.subTitle}</span>
        </div>
      </div>
    );
  }
}

export default Error;
