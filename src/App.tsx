import "./app.scss";
import Home from "./pages/home";
import { connect } from "react-redux";
import { storeData } from "./redux/reducer/localstore";
import { ReduxPokemonState, mapStateToProps } from "./redux/actions/pokemon";
import React, { PureComponent } from "react";

interface AppProp extends ReduxPokemonState {}

interface AppState {
  isError: boolean;
}

class App extends PureComponent<AppProp, AppState> {
  state = {
    isError: false,
  };
  static getDerivedStateFromProps(props: AppProp, state: AppState) {
    storeData();
    return state;
  }
  render() {
    return (
      <div className="app">
        <Home pokemon={this.props.pokemon} />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
