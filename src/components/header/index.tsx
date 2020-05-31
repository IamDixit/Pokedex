import "./index.scss";
import { connect } from "react-redux";
import {
  ReduxPokemonAction,
  mapDispatchToProps,
} from "../../redux/actions/pokemon";
import Search from "../../assests/search.svg";
import { HOMETITLE, HOMESUBTITLE } from "../../redux/contants/strings";
import React, { PureComponent } from "react";

interface HeaderProp extends ReduxPokemonAction {}

interface HeaderState {
  search: string;
}

class Header extends PureComponent<HeaderProp, HeaderState> {
  state = {
    search: "",
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: event.target.value,
    });
  };
  getInfo = () => {
    if (this.state.search) {
      this.props.pokemonAction({
        type: "getPokemonDetails",
        payload: {
          uid: "",
          name: this.state.search,
          hp: 0,
          attack: 0,
          defence: 0,
          type: "normal",
          imageUrl: "",
        },
      });
      this.setState({
        search: "",
      });
    }
  };
  render() {
    return (
      <div className="pokedex-header">
        <div className="page-title">
          <div className="title">
            <span>{HOMETITLE}</span>
          </div>
          <div className="sub-title">
            <span>{HOMESUBTITLE}</span>
          </div>
        </div>
        <div className="search-bar">
          <div className="search">
            <input
              type="text"
              value={this.state.search}
              onChange={this.handleChange}
              onBlur={this.getInfo}
              className="searchTerm"
              placeholder="Enter pokemon name"
            />
            <button
              type="submit"
              className="searchButton"
              onClick={this.getInfo}
            >
              <img src={Search} alt="search" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Header);
