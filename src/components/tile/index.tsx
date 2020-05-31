import "./index.scss";
import Model from "../model";
import { connect } from "react-redux";
import {
  ReduxPokemonAction,
  mapDispatchToProps,
} from "../../redux/actions/pokemon";
import { Pokemon, typesArr, PokemonTypes } from "../../redux/reducer/store";
import React, { PureComponent } from "react";

interface TileProp extends Pokemon, ReduxPokemonAction {}

interface TileState extends Pokemon {
  model: boolean;
  disabled: boolean;
  intialise: boolean;
}

class Tile extends PureComponent<TileProp, TileState> {
  constructor(props: TileProp) {
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
      intialise: true,
      disabled: false,
    };
  }

  static getDerivedStateFromProps(props: TileProp, state: TileState) {
    if (state.intialise) {
      state.uid = props.uid;
      state.name = props.name;
      state.hp = props.hp;
      state.attack = props.attack;
      state.defence = props.defence;
      state.imageUrl = props.imageUrl;
      state.intialise = false;
    }
    return state;
  }

  toggleModel = (value: boolean) => {
    this.setState({
      model: !this.state.model,
      disabled: value,
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
  handleType = (event: any) => {
    this.setState({
      type: event.target.value,
    });
  };
  updateData = () => {
    this.props.pokemonAction({
      type: "updatePokemon",
      payload: {
        ...this.state,
      },
    });
    this.toggleModel(false);
    this.props.pokemonAction({
      type: "getPokemonImage",
      payload: {
        ...this.state,
      },
    });
  };
  deleteData = () => {
    this.props.pokemonAction({
      type: "deletePokemon",
      payload: {
        ...this.state,
      },
    });
  };
  render() {
    return (
      <div className="tile" key={this.props.uid}>
        <div onClick={this.toggleModel.bind(this, true)}>
          <div className="header-box">
            {this.props.imageUrl ? (
              <img src={this.props.imageUrl} alt="pokemon" />
            ) : (
              <img
                src={require("../../assests/logo.png")}
                alt="pokemon"
                width="80px"
              />
            )}
          </div>
          <div className="body">
            <span className="title">
              {this.props.name.charAt(0).toUpperCase() +
                this.props.name.slice(1)}
            </span>
            <div className="subtitle">
              <span>HP: {this.props.hp}</span>
              <span>Attack: {this.props.attack}</span>
              <span>Defence: {this.props.defence}</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="left-side">
            <div className="action-box">
              <img
                src={require("../../assests/star.png")}
                alt="star"
                className="action-icon"
              />
            </div>
          </div>
          <div className="right-side">
            <div
              className="action-box"
              onClick={this.toggleModel.bind(this, false)}
            >
              <img
                src={require("../../assests/edit.png")}
                alt="edit"
                className="action-icon"
              />
            </div>
            <div className="action-box" onClick={this.deleteData}>
              <img
                src={require("../../assests/delete.png")}
                alt="delete"
                className="action-icon"
              />
            </div>
          </div>
        </div>
        {this.state.model ? (
          <Model>
            <div className="model-header">
              {this.state.disabled ? (
                <h4>View Pokemon: {this.props.name}</h4>
              ) : (
                <h4>Edit Pokemon: {this.props.name}</h4>
              )}
            </div>
            <div className="model-body">
              <div className="row">
                <span>Name</span>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleName}
                  disabled={this.state.disabled}
                />
              </div>
              <div className="row">
                <span>HP</span>
                <input
                  type="number"
                  value={this.state.hp}
                  onChange={this.handleHp}
                  disabled={this.state.disabled}
                />
              </div>
              <div className="row">
                <span>Defence</span>
                <input
                  type="number"
                  value={this.state.defence}
                  onChange={this.handleDefence}
                  disabled={this.state.disabled}
                />
              </div>
              <div className="row">
                <span>Attack</span>
                <input
                  type="number"
                  value={this.state.attack}
                  onChange={this.handleAttack}
                  disabled={this.state.disabled}
                />
              </div>
              <div className="row">
                <span>Type</span>
                <select
                  value={this.state.type}
                  onChange={this.handleType}
                  disabled={this.state.disabled}
                >
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
              <button onClick={this.toggleModel.bind(this, false)}>
                close
              </button>
              {this.state.disabled ? null : (
                <button onClick={this.updateData} className="submit">
                  Update
                </button>
              )}
            </div>
          </Model>
        ) : null}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Tile);
