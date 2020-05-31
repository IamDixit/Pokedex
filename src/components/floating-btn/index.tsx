import "./index.scss";
import Plus from "../../assests/plus.svg";
import React, { PureComponent } from "react";

interface FloatingBtnProp {}

interface FloatingBtnState {}

class FloatingBtn extends PureComponent<FloatingBtnProp, FloatingBtnState> {
  render() {
    return (
      <div className="floating-btn">
        <img src={Plus} alt="plus" />
      </div>
    );
  }
}

export default FloatingBtn;
