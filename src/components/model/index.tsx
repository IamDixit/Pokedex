import "./index.scss";
import React, { PureComponent } from "react";

interface ModelProp {}

interface ModelState {}

class Model extends PureComponent<ModelProp, ModelState> {
  render() {
    return (
      <div className="pokedex-model">
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

export default Model;
