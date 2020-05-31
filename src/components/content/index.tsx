import "./index.scss";
import Tile from "../tile";
import { ReduxPokemonState } from "../../redux/actions/pokemon";
import React, { PureComponent } from "react";

interface ContentProp extends ReduxPokemonState {}

interface ContentState {}

class Content extends PureComponent<ContentProp, ContentState> {
  render() {
    return (
      <div className="pokedex-content">
        {this.props.pokemon.map((item) => {
          return <Tile {...item} key={item.uid} />;
        })}
      </div>
    );
  }
}

export default Content;
