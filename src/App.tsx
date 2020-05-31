import "./app.scss";
import Home from "./pages/home";
import { connect } from "react-redux";
import { ReduxPokemonState, mapStateToProps } from "./redux/actions/pokemon";
import React, { PureComponent } from "react";

interface AppProp extends ReduxPokemonState {}

interface AppState {}

class App extends PureComponent<AppProp, AppState> {
  render() {
    return (
      <div className="app">
        <Home pokemon={this.props.pokemon} />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
