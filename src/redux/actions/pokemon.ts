import { Dispatch } from "redux";
import { State, Pokemon } from "../reducer/store";

type Actions =
  | "loadData"
  | "getPokemonDetails"
  | "insertPokemon"
  | "updatePokemon"
  | "deletePokemon"
  | "getPokemonImage";
type Payload = Pokemon;

export interface IPokemonAction {
  type: Actions;
  payload: Payload;
}

function PokeMon(params: IPokemonAction) {
  return {
    type: params.type,
    payload: params.payload,
  };
}

export interface ReduxPokemonAction {
  pokemonAction: (params: IPokemonAction) => IPokemonAction;
}

export function mapDispatchToProps(dispatch: Dispatch): ReduxPokemonAction {
  return {
    pokemonAction: (params: IPokemonAction) => dispatch(PokeMon(params)),
  };
}

export interface ReduxPokemonState {
  pokemon: State["pokemons"];
}

export function mapStateToProps(state: State): ReduxPokemonState {
  return {
    pokemon: state.pokemons,
  };
}
