import "./index.scss";
import { connect } from "react-redux";
import React, { PureComponent } from "react";
import Model from "../model";
import { Pokemon, typesArr, PokemonTypes } from "../../redux/reducer/store";
import {
  ReduxPokemonAction,
  mapDispatchToProps,
} from "../../redux/actions/pokemon";

interface SideMenuProp extends ReduxPokemonAction {}

interface SideMenuState extends Pokemon {
  model: boolean;
}

class SideMenu extends PureComponent<SideMenuProp, SideMenuState> {
  constructor(props: SideMenuProp) {
    super(props);
    this.state = {
      uid: "",
      model: false,
      name: "",
      hp: 0,
      attack: 0,
      defence: 0,
      imageUrl: "",
      type: "normal",
    };
  }
  toggleModel = () => {
    this.setState({
      model: !this.state.model,
    });
  };
  handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleHp = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (Number.isInteger(value)) {
      this.setState({
        hp: value,
      });
    }
    if (!event.target.value) {
      this.setState({
        hp: 0,
      });
    }
  };
  handleDefence = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (Number.isInteger(value)) {
      this.setState({
        defence: value,
      });
    }
    if (!event.target.value) {
      this.setState({
        defence: 0,
      });
    }
  };
  handleAttack = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (Number.isInteger(value)) {
      this.setState({
        attack: value,
      });
    }
    if (!event.target.value) {
      this.setState({
        attack: 0,
      });
    }
  };
  addData = () => {
    this.toggleModel();
    this.props.pokemonAction({
      type: "insertPokemon",
      payload: {
        ...this.state,
        uid: new Date().getTime().toString(),
      },
    });
    this.props.pokemonAction({
      type: "getPokemonImage",
      payload: {
        ...this.state,
      },
    });
  };
  handleType = (event: any) => {
    this.setState({
      type: event.target.value,
    });
  };
  render() {
    return (
      <div className="pokedex-side-menu">
        <div className="logo">
          <img
            className="image"
            src={require("../../assests/logo.png")}
            alt="logo"
            width="150px"
          />
        </div>
        <div className="create-btn" onClick={this.toggleModel}>
          <span>+ Add Pokemon</span>
        </div>
        {this.state.model ? (
          <Model>
            <div className="model-header">
              <h4>Add Pokemon</h4>
            </div>
            <div className="model-body">
              <div className="row">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={this.handleName}
                />
              </div>
              <div className="row">
                <span>HP</span>
                <input
                  type="number"
                  value={this.state.hp}
                  onChange={this.handleHp}
                />
              </div>
              <div className="row">
                <span>Defence</span>
                <input
                  type="number"
                  value={this.state.defence}
                  onChange={this.handleDefence}
                />
              </div>
              <div className="row">
                <span>Attack</span>
                <input
                  type="number"
                  value={this.state.attack}
                  onChange={this.handleAttack}
                />
              </div>
              <div className="row">
                <span>Type</span>
                <select value={this.state.type} onChange={this.handleType}>
                  {typesArr.map(
                    (
                      item: { name: string; value: PokemonTypes },
                      index: number
                    ) => {
                      return (
                        <option key={index} value={item.value}>
                          {item.name}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
            </div>
            <div className="footer">
              <button onClick={this.toggleModel}>close</button>
              <button onClick={this.addData} className="submit">
                Save
              </button>
            </div>
          </Model>
        ) : null}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SideMenu);
