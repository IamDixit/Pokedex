import "./index.scss";
import { ReduxPokemonState } from "../../redux/actions/pokemon";
import { Header, SideMenu, Content } from "../../components";
import React, { PureComponent } from "react";

interface HomeProp extends ReduxPokemonState {}

interface HomeState {}

class Home extends PureComponent<HomeProp, HomeState> {
  render() {
    return (
      <div className="home">
        <div className="side-menu">
          <SideMenu />
        </div>
        <div className="header">
          <Header />
          <Content pokemon={this.props.pokemon} />
        </div>
      </div>
    );
  }
}

export default Home;
