import { getData } from "./localstore";
import initialState, { State } from "./store";
import { IPokemonAction } from "../actions/pokemon";

type ActionParams = IPokemonAction;

const AppReducer = (
  state: State = initialState,
  actionParams: ActionParams
) => {
  switch (actionParams.type) {
    case "loadData":
      return {
        ...state,
        pokemons: getData(),
      };
    case "insertPokemon":
      return {
        ...state,
        pokemons: [actionParams.payload, ...state.pokemons],
      };
    case "updatePokemon":
      return {
        ...state,
        pokemons: state.pokemons.map((item) => {
          if (item.uid === actionParams.payload.uid) {
            return actionParams.payload;
          } else return item;
        }),
      };
    case "deletePokemon":
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (item) => item.uid !== actionParams.payload.uid
        ),
      };
    default:
      return state;
  }
};
export default AppReducer;
